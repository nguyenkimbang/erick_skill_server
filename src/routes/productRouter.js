// / sample posts for routers
// / action: create the post, edit the post, update the post, delete the post
import {Router} from 'express';

import {products} from '../controllers';

const productController = products;

const router = Router();

router.post('/', productController.productValidator, productController.createProduct);

// another way to write the middlware. DO NOT WRITE LIKE THIS.
router.get('/', async (req, res, next) => {
  // check permission here.
  await next();
}, productController.getProducts);

// note: the line
router.get('/forbidden', function(req, res, next) {
  const err = new Error(`${req.ip} tried to access /Forbidden`);
  err.statusCode = 403;
  next(err);
});


router.get('/:productId', productController.getProductById);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);
export default router;
