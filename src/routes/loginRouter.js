import {Router} from 'express';

import {login} from '../controllers';

const loginController = login;

const router = Router();

router.post('/', loginController.loginHandler);

export default router;
