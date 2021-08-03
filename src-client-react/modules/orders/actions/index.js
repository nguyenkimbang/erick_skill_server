import * as BaseWrappedFn from '../../../redux/base-wrapped'

import requestAddToCard from './requestAddToCard'
import displayLoadingIndicator from './displayLoadingIndicator'
import removeProductFromCart from './removeProductFromCart'
import requestBuyMore from './requestBuyMore'
import searchMoreProduct from './searchMoreProduct'
import updateValue from './updateValue'
import fetchOrderItem from './fetchOrderItem';
import fetchMyOrderList from './fetchMyOrderList';

const prefix = 'ORDER_MODULE::'

const actionClasses = {
  requestAddToCard: new requestAddToCard(),
  displayLoadingIndicator: new displayLoadingIndicator(),
  removeProductFromCart: new removeProductFromCart(),
  requestBuyMore: new requestBuyMore(),
  searchMoreProduct: new searchMoreProduct(),
  updateValue: new updateValue(),
  fetchOrderItem: new fetchOrderItem(),
  fetchMyOrderList: new fetchMyOrderList()
}

export const reducer = (state, action, immuableState) => BaseWrappedFn.reducer(actionClasses, prefix, state, action, immuableState);
export const createActionByName = (name) => BaseWrappedFn.createActionByName(actionClasses, prefix, name);
export const createWrapActions = () => BaseWrappedFn.createWrapActions(actionClasses, prefix);