import * as BaseWrappedFn from '../../../redux/base-wrapped'

import displayLoadingIndicator from './displayLoadingIndicator'
import updateValue from './updateValue'
import doLogin from './doLogin'
import doLogout from './doLogout'

const prefix = 'LOGIN_MODULE::'

const actionClasses = {
  displayLoadingIndicator: new displayLoadingIndicator(),
  updateValue: new updateValue(),
  doLogin: new doLogin(),
  doLogout: new doLogout()
}

export const reducer = (state, action, immuableState) => BaseWrappedFn.reducer(actionClasses, prefix, state, action, immuableState);
export const createActionByName = (name) => BaseWrappedFn.createActionByName(actionClasses, prefix, name);
export const createWrapActions = () => BaseWrappedFn.createWrapActions(actionClasses, prefix);