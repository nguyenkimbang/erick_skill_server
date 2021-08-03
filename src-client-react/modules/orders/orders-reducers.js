import { fromJS } from "immutable";

import { reducer } from './actions'

export const initState = {
  isOrderDetailFetched: false,
  orderDetail: null,
  isUserOrderListFetched: false,
  userOrders: [],
  cartItemCounter: 0,
  showLoadingIndicator: false, 
  //should declare by models bussiness
  searchMoreProductViewModel: {
    searchText: '',
    productsResult: []
  }
}

function orderReducer(state = initState, action) {
  const immuableState = fromJS(state);
  const newState = immuableState.toJS();
  reducer(newState, action, immuableState);

  return newState;
}

export default orderReducer
