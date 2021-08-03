import {login} from '../services/loginServices';

export const loginHandler = async (req, res) => {
  // basic validate here: empty email, type is null...
  res.json(await login(req.body))
}

