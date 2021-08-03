import BaseAction from '../../../redux/base-action'
import { remove } from '../../../api-base'

export default class removeProductFromCart extends BaseAction {
  async runMiddleware(payload) {
    console.log('pay me a coffee. hehe\r\npayload=', JSON.stringify(payload, null, 2))
    const response = await remove({ url: `/orders/${payload.order_id}/products/${payload.product_id}` })
    console.log(response)
    return { ...payload, ...response.data };
  }

  update(currentState, payload) {
    if (payload.success) {
      currentState.orderDetail.order_items = currentState.orderDetail.order_items.filter(x => x.product_id != payload.product_id)
    }
  }
}
