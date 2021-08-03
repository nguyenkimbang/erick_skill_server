import {
  getOrderByCustomerId,
  requestNewOrder,
  requestAddProductToOrder,
  requestRemoveProductFromOrder,
  requestUpdateProductForOrder,
  getOrderById
} from '../services/orderServices';

// this is sample of middleware for the pre-creating new products
export const orderValidator = async (req, res, next) => {
  // apply the common validation like json validator for request.body
  next();
};

export const createOrderHandler = async (req, res) => {
  try {
    const newOrderItem = await requestNewOrder(req.body);
    // note: if use MCV here, use the newOrderItem as data model for view-engine.
    // if not MCV, just return the response API as json. DO NOT HANDLE BUSINESS LOGIC AT CONTROLLER LAYER
    return res.status(201).json(newOrderItem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getOrderByCustomerIdHandler = async (req, res) => {
  res.status(200).json(await getOrderByCustomerId(req.query))
}

export const getOrderByIdHandler = async (req, res) => {
  const order = await getOrderById({ order_id: req.params.order_id });
  return res.status(200).json(order);
};

export const addProductToOrderHandler = async (req, res) => {
  const order_id = req.params.order_id;
  const updateStatus = await requestAddProductToOrder({ ...req.body, order_id });
  return res.status(200).json(updateStatus);
};

export const removeProductFromOrderHandler = async (req, res) => {
  const order_id = req.params.order_id;
  const product_id = req.params.product_id;

  const updateStatus = await requestRemoveProductFromOrder({ product_id, order_id });
  return res.status(200).json(updateStatus);
};

export const updateProductForOrderHandler = async (req, res) => {
  const order_id = req.params.order_id;
  const product_id = req.params.product_id;

  const updateStatus = await requestUpdateProductForOrder({ product_id, order_id, ...req.body });
  return res.status(200).json(updateStatus);
};
