
import  Router  from 'express';
import * as PC from './product.controller.js';
 
const router= Router()

router.get('/',PC.getProduct);
router.get('/getRevenueCategory',PC.getRevenueCategory);
router.get('/numberOfSold',PC.numberOfSold);
router.post('/',PC.addProduct);
router.put('/:id',PC.updateProduct);
router.delete('/:id',PC.deleteProduct);

export default router