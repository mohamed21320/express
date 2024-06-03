import { Router } from "express";
import * as CC from './customer.controller.js';
import { EmailMidlleware } from "../../middleware/emailExist.js";



  const router=  Router()

  router.get("/",CC.getCustomer );
  router.post("/",EmailMidlleware,CC.addCustomer );
  router.put("/:id",CC.updateCustomer);
  router.delete("/:id",CC.deleteCustomer);



  export default router