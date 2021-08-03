import Cookies from 'universal-cookie';
import { replace } from 'connected-react-router'
import BaseAction from '../../../redux/base-action'
import * as BaseApi from '../../../api-base';

import { createActionByName } from './index'

import displayLoadingIndicator from './displayLoadingIndicator';

export default class doLogin extends BaseAction {
  showIndicator(value) {
    this.pushAction(createActionByName(displayLoadingIndicator.name)({ show: value }));
  }
  async runMiddleware(payload, getState) {
    const loginForm = getState().loginInfo.loginForm;

    console.log('do login for: ' + getState().loginInfo.loginForm.email);

    this.showIndicator(true);
    const loginResponse = await BaseApi.post({ url: '/login', formBody: loginForm })
    this.showIndicator(false);
    if (loginResponse.data.success) {
      const cookies = new Cookies();
      cookies.set('auth', `${loginResponse.data.token}`, { path: '/' });

      localStorage.removeItem('customerInfo');
      localStorage.removeItem('staffInfo');

      if (!!loginResponse.data.customerInfo) {
        localStorage.setItem('customerInfo', JSON.stringify(loginResponse.data.customerInfo))
      }

      if (!!loginResponse.data.staffInfo) {
        localStorage.setItem('staffInfo', JSON.stringify(loginResponse.data.staffInfo))
      }

      // sample push something after 3 second
      setTimeout(() => {
        this.pushAction(replace('/orders'));
      }, 3000);
    }

    return loginResponse.data;
  }

  //note: must run sync. DO NOT RUN ASYNC HERE
  update(currentState, payload) {
    currentState.userIdentity = payload
    currentState.userIdentity.authenticated = payload.success
  }
}
