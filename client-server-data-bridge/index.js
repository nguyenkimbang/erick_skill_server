import models from '../src/database/models'

import { getOrderById, getOrderByCustomerId } from '../src/services/orderServices'
import { initState as orderInitState } from '../src-client-react/modules/orders/orders-reducers'

export const initOrderDetail = async (params) => {
  console.log('params: ', params)
  
  const orderDetail = await getOrderById({ order_id: params.order_id })

  return { ...orderInitState, orderDetail, isOrderDetailFetched: true}
}

export const initOrderList = async (params, authenticatedUser) => {
  console.log('authenticatedUser', authenticatedUser)
  const orders = await getOrderByCustomerId({ customer_id: authenticatedUser.id })

  return { ...orderInitState, userOrders: orders, isUserOrderListFetched: true};
}

// do not use this way - import DB models. Correct sample is: import service as sample of Orders
export const initProducts = async () => {
  const products = await models.products.findAll({
    limit: 10,
    include: [
      {
        model: models.stocks,
        as: 'stocks',
        include: [
          {
            model: models.stores,
            as: 'store',
          },
        ],
      },
      {
        model: models.brands,
        as: 'brand',
      },
    ],
  });

  return { isFetching: true, products }
}

