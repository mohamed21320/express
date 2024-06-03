
import connection from './../../../db/models/connectionDb.js';

export const getCustomer=(req, res,next) => {
    const quary = "SELECT * FROM customer"
    connection.execute(quary,
    (err, result) => {
        if (err) {
            res.send({ msg: "err",err})
        }else{
            res.send(result)
        }
    }
        
    );
  }
//   addCustomer//////////
export const addCustomer=(req, res,next) => {
    const {firstName,lastName,email,phone} = req.body;
    const quary = `insert into customer (firstName,lastName,email,phone) values("${firstName}","${lastName}","${email}","${phone}")`
   connection.execute(quary,
    (err, result) => {
        if (err) {
            res.send({ msg: "err",err})
        }
        console.log(result);
        if (!result.affectedRows) {
            return res.status(400).send({ msg:"failed" ,err})
        }
        return res.status(200).send({ msg:"success",result})
    }
        
    );
  }


///////     updateCustomer////////
export const updateCustomer=(req, res,next) => {
    const {id}=req.params;
    const {firstName}=req.body;
    const quary = `update customer set firstName="${firstName}" where id ="${id}"`
    connection.execute(quary,
    (err, result) => {
        if (err) {
            res.send({ msg: "err",err})
        }if (!result.affectedRows) {
            return res.status(400).send({ msg: "fail to added",err })
        }
        return res.status(201).send({ msg: "success", result })
    }
        
    );
  }

  ///////     deleteCustomer////////
export const deleteCustomer=(req, res,next) => {
    const {id}=req.params;
    const quary = `delete from customer where id = "${id}"`
    connection.execute(quary,
    (err, result) => {
        if (err) {
            res.send({ msg: "err",err})
        }if (!result.affectedRows) {
            return res.status(400).send({ msg: "fail to removed",err })
        }
        return res.status(201).send({ msg: "success", result })
    }
        
    );
  }