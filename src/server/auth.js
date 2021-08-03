import Cookies from 'universal-cookie';

import { verify } from '../services/loginServices'
const ignoreRoute = ['/login', '/api/login', '/assets', '/doc', '/favicon.ico']

export const authenticate = async (req, res, next) => {
  // if using 3rd auth (passport.js/cookiejs), <= put it here
  // base on technical document. handle different method, can jwt via header/params, or cookies

  if (ignoreRoute.filter(x => req.url.startsWith(x)).length > 0) {
    next();
    return;
  }

  const cookies = new Cookies(req.headers.cookie)
  const token = cookies.get('auth') || req.headers.authorization
  const { success, decoded } = await verify(token);

  if (!success) {
    if (req.path.startsWith('/api')) {
      res.status(401);
      res.json({ error: 'Invalid request. Unauthorized' })
    }
    else {
      res.redirect('/login');
    }
    return;
  }

  req.authenticatedUser = decoded;
  console.log(decoded);
  
  if (decoded.userType == 'staff') {
    req.userIdentity = {
      staffInfo: { staff_id: decoded.id, ...decoded },
      authenticated: true
    }
  }

  if (decoded.userType == 'customer') {
    req.userIdentity = {
      customerInfo: { customer_id: decoded.id, ...decoded },
      authenticated: true
    }
  }
  req.isAuthenticated = success;
  next();
};
