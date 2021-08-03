import React from 'react'
import { Route, Switch, matchPath } from 'react-router-dom';

import ProductsContainer from './modules/products/products-component';
import OrderDetailContainer from './modules/orders/components/order-detail-container';
import OrderListContainer from './modules/orders/components/order-list-container';

import LoginContainer from './modules/login/components/login-container';

import CustomerViewMasterLayout from './components/master-layout/customer-view-master-layout'

export const Routes = [
  {
    path: '/products',
    component: ProductsContainer,
    loadDataFn: { fnName: 'initProducts', storeName: 'products' },
    masterLayout: CustomerViewMasterLayout
  },
  {
    path: '/orders/:order_id',
    component: OrderDetailContainer,
    loadDataFn: { fnName: 'initOrderDetail', storeName: 'orders' },
  },
  {
    path: '/orders',
    component: OrderListContainer,
    loadDataFn: { fnName: 'initOrderList', storeName: 'orders' },
  },
  {
    path: '/login',
    component: LoginContainer
  }
];

export const getParams = (location) => {
  const matches = Routes
  .map(route => matchPath(location.pathname, route))
  .filter(x => x)


  if (matches.length > 0) return { params: matches[0].params, query: location.query};

  return {};
}

export const renderRouter = () => (
  <div>
    <Switch>
      {Routes.map((x, index) => <Route key={index} path={x.path} component={x.component} />)}
    </Switch>
  </div>
)

