import jwt from 'jsonwebtoken'

import models from '../database/models';

export const login = (loginRequest) => {

  const loginType = loginRequest.loginType;

  if (loginType == 'customer') return customerLogin(loginRequest);
  if (loginType == 'staff') return staffLogin(loginRequest);

  return { success: false, reason: `type ${loginType} is not support` }
}

export const verify = async (token) => {
  if (!token) return { success: false, message: 'no token provided' }

  return new Promise((s, r) =>
    jwt.verify(token, "TOKEN_SECRET", (err, decoded) => s({ success: !err, message: 'verify fail', decoded }))
  )
}
const genAuthToken = ({ id, email, first_name, last_name, userType }) => {
  // using jwt token here
  return jwt.sign({ id, email, first_name, last_name, userType }, "TOKEN_SECRET", { expiresIn: '1800s' });
}

const staffLogin = async ({ email }) => {
  const model = await models.staffs.findOne({ where: { email } })

  if (!model) {
    return { success: false, reason: `login for staff fail` }
  }

  return {
    token: genAuthToken({ id: model.dataValues.staff_id, ...model.dataValues, userType: 'staff' }),
    staffInfo: model,
    success: true
  }
}

const customerLogin = async ({ email }) => {
  const model = await models.customers.findOne({ where: { email } })

  if (!model) {
    return { success: false, reason: `login for customer fail` }
  }
  
  return {
    token: genAuthToken({ id: model.dataValues.customer_id, ...model.dataValues, userType: 'customer' }),
    customerInfo: model,
    success: true
  }
}
