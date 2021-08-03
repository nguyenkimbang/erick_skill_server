import { createStore, combineReducers } from 'redux'
import productReducers from '../modules/products/products-reducers'
import orderReducers from '../modules/orders/orders-reducers'
import loginReducers from '../modules/login/login-reducers'

export default function configureStore(preloadedState, moreStore = {}, enhancer = null) {

  const rootReducer = combineReducers({
    ...moreStore,
    products: productReducers,
    orders: orderReducers,
    loginInfo: loginReducers
  });

  if (enhancer) {
    return createStore(rootReducer, preloadedState, enhancer)
  } 

  return createStore(rootReducer, preloadedState) 

}
