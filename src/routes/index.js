
import {Router} from 'express';
import {v4 as uuidv4} from 'uuid';

import productRouter from './productRouter';
import odataRouter from './odataRouter';
import orderRouter from './orderRouter';
import loginRouter from './loginRouter';
import mockRouter from './mockRouter';

const router = Router();
router.get('/', async (req, res) => {
  const countTo = parseInt(req.query.countTo);
  let sampleIncreasementIndex = 0;
  const p =  new Promise((s, r) => {
    setTimeout(() => {
      
      const id =uuidv4();
      console.time(id + '::' + countTo);
      for (let x = 0; x < parseInt(countTo); x++) {
        sampleIncreasementIndex++;
      }
      console.timeEnd(id + '::' + countTo);
      s();
    }, countTo);

  })

  await p;
  
  res.send('Sample testing the CPU working. Counter:' + sampleIncreasementIndex);
});

router.use('/odata', odataRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/login', loginRouter);
router.use('/mock-project', mockRouter);

// add more bussiness router bellow, do not mixed router

export const unguardRouter = [
  '/api/login'
]

export default router;
