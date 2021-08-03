import { REQUEST_FETCH_PRODUCTS,  RECEIVE_PRODUCTS, DELETE_PRODUCTS_SUCCESS } from './products-action';

function apps(state = {isFetching: false, products: []}, action) {
  switch (action.type) {
    case REQUEST_FETCH_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        products: action.products
      });
    case DELETE_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        products: [...state.products.filter(x => x.product_id != action.productId) ]
      });
    default:
      return state
  }
}

export default apps
