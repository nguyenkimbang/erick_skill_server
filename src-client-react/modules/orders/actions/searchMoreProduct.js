import BaseAction from '../../../redux/base-action'
import { fetch } from '../../../api-base'

export default class loadProductsInStore extends BaseAction {
  async runMiddleware(payload) {
    console.log('pay me a coffee. hehe\r\npayload=', JSON.stringify(payload, null, 2))
    const response = await fetch({ url: `/odata/products?where={"product_name":{"$like":"%25${payload.product_name}%25"}}&limit=5` });

    console.log(response)
    return { request: payload, response: response.data };
  }

  update(currentState, payload) {
    currentState.searchMoreProductViewModel.productsResult = payload.response.products;
  }
}
