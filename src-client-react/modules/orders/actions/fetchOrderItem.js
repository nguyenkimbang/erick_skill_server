import BaseAction from '../../../redux/base-action'
import { fetch } from '../../../api-base'

export default class fetchOrderItem extends BaseAction {
  async runMiddleware(payload, getState) {
    const response = await fetch({ url: `/orders/${payload.order_id}` })
    console.log(response)
    return { ...payload, ...response.data };
  }

  update(currentState, payload) {
    currentState.orderDetail = payload;
    currentState.isOrderDetailFetched = true;
  }
}
