import BaseAction from '../../../redux/base-action'
import { post, fetch } from '../../../api-base'

export default class requestBuyMore extends BaseAction {
  async runMiddleware(payload) {
    const addResponse = await post({
      url: `/orders/${payload.order_id}/products`, formBody: {
        product_id: payload.product_id,
        quantity: 1,
        discount: 0
      }
    })

    let orderItemResponse = null;
    if (addResponse.data.success) {
      orderItemResponse = await fetch({ url: `/orders/${payload.order_id}` })
    }

    return { ...payload, ...addResponse.data, orderDetail: orderItemResponse?.data };
  }

  update(currentState, payload) {
    if (payload.success) {
      currentState.orderDetail = payload.orderDetail;
    }
  }
}
