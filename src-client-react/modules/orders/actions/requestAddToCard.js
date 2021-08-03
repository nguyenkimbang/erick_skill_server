import BaseAction from '../../../redux/base-action'
import { createActionByName } from './index'

import displayLoadingIndicator from './displayLoadingIndicator';

export default class requestAddToCard extends BaseAction {
  async runMiddleware(payload, getState) {
    console.log('pay me a coffee. hehe\r\npayload=', JSON.stringify(payload, null, 2))

    // note: never call getState and change state here
    console.log('demo getState: ' + getState().orders.cartItemCounter);

    this.pushAction(createActionByName(displayLoadingIndicator.name)({ show: true }));

    const assumeApiResponseData = await new Promise((s, r) => {
      setTimeout(() => {

        this.pushAction(createActionByName(displayLoadingIndicator.name)({ show: false }));
        s(1);
      }, 3000);
    });

    return assumeApiResponseData;
  }

  //note: must run sync. DO NOT RUN ASYNC HERE
  update(currentState, payload) {
    currentState.cartItemCounter = currentState.cartItemCounter + payload
  }
}
