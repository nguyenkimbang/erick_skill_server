import { fromJS } from "immutable";

import { reducer } from './actions'

export const initState = {
  isRequesting: false,
  loginForm: {
    email: 'debra.burks@yahoo.com',
    loginType: 'customer'
  },
  showLoadingIndicator: false,
  userIdentity: {
    authenticated: false
  } 
}

function moduleReducer(state = initState, action) {
  const immuableState = fromJS(state);
  const newState = immuableState.toJS();
  reducer(newState, action, immuableState);

  return newState;
}

export default moduleReducer
