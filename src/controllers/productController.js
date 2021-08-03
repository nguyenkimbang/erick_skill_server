// note: should not implement the bussiness logic here.
// refer orderController
import models from '../database/models';

// this is sample of middleware for the pre-creating new products
export const productValidator = async (req, res, next) => {
  // apply the common validation like json validator for request.body
  next();
};

export const createProduct = async (req, res) => {
  try {
    const products = await models.products.create(req.body);
    return res.status(201).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

export const getProducts = async (req, res) => {
  // pls note:: this is the async function, error throw here do no cacth in global
  try {
    const products = await models.products.findAll({
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
    return res.status(200).json({products});
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const {productId} = req.params;
    const product = await models.products.findOne({
      where: {product_id: productId},
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
    if (product) {
      return res.status(200).json({product});
    }
    return res.status(404).send('products with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const {productId} = req.params;
    const [updated] = await models.products.update(req.body, {
      where: {product_id: productId},
    });
    if (updated) {
      const updatedproducts = await models.products.findOne({where: {product_id: productId}});
      return res.status(200).json({products: updatedproducts});
    }
    throw new Error('products not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const {productId} = req.params;
    const deleted = await models.products.destroy({
      where: {product_id: productId},
    });
    if (deleted) {
      return res.status(204).send('products deleted');
    }
    throw new Error('products not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
