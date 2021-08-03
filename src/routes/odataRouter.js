// / sample posts for routers
// / action: create the post, edit the post, update the post, delete the post
import {Router} from 'express';
import {odata as odataController} from '../controllers';

// copy style from .net odata
const router = Router();
router.get('/:tableName', odataController.getAll);
export default router;
