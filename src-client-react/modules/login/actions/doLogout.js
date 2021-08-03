import Cookies from 'universal-cookie';

import BaseAction from '../../../redux/base-action'
import * as BaseApi from '../../../api-base';

import { createActionByName } from './index'

import displayLoadingIndicator from './displayLoadingIndicator';

export default class doLogout extends BaseAction {
  async runMiddleware(payload, getState) {
      const cookies = new Cookies();
      cookies.remove('auth');
      localStorage.removeItem('customerInfo');
      localStorage.removeItem('staffInfo');
      
    return true;
  }

  //note: must run sync. DO NOT RUN ASYNC HERE
  update(currentState, payload) {
    currentState.userIdentity.staffInfo = null;
    currentState.userIdentity.customerInfo = null;
    currentState.userIdentity.authenticated = false
  }
}
