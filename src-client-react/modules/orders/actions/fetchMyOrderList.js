import BaseAction from '../../../redux/base-action'
import { fetch } from '../../../api-base'

export default class fetchOrderItemByCustomerId extends BaseAction {
  async runMiddleware(payload, getState) {
    const customer_id = getState().loginInfo.userIdentity.customerInfo.customer_id;
    const response = await fetch({ url: `/orders?customer_id=${customer_id}` })
    return { ...payload, userOrders: response.data };
  }

  update(currentState, payload) {
    currentState.userOrders = payload.userOrders || [];
  }
}
