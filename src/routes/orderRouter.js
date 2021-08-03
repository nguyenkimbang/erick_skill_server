// / sample posts for routers
// / action: create the post, edit the post, update the post, delete the post
import {Router} from 'express';

import {orders} from '../controllers';

const orderController = orders;

const router = Router();

//
router.get('/', orderController.getOrderByCustomerIdHandler);
router.post('/', orderController.orderValidator, orderController.createOrderHandler);
router.get('/:order_id', orderController.getOrderByIdHandler);
router.post('/:order_id/products', orderController.addProductToOrderHandler);
router.delete('/:order_id/products/:product_id', orderController.removeProductFromOrderHandler);
router.put('/:order_id/products/:product_id', orderController.updateProductForOrderHandler);

export default router;
