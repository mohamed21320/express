
import { Router } from 'express';
import * as OC from './talabe.controller.js';

const router = Router();

router.get('/',OC.getOrder);
router.post('/',OC.addOrder);
router.get('/averageOrder/:id',OC.averageOrder);
router.get('/haveNotOrder',OC.haveNotOrder);
router.get('/top10Customer',OC.top10Customer);
router.get('/atLeast5Order',OC.atLeast5Order);
router.get('/totalAmountForCustomer',OC.totalAmountForCustomer);
router.get('/earlistOrder',OC.earlistOrder);
router.put('/:id',OC.updateOrder);
router.delete('/:id',OC.deleteOrder);



export default router