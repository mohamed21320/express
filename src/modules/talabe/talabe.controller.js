
import connection from './../../../db/models/connectionDb.js';

export const getOrder = (req, res) => {
    const quary = `select * from talabe`
    connection.execute(quary,(err,result) => {
        if (err) {
         return   res.status(400).send({ msg: " error", err })
        }
        return res.status(201).send({ msg: "success", result })
        
    })
}

//  addOrder///////
export const addOrder = (req, res,next) => {
    const {customerId,orderDate,totalAmount,productID, quantity,unitPrice} = req.body
    const quary = `insert into talabe (customerId,orderDate,totalAmount,productID,quantity,unitPrice) values ("${customerId}","${orderDate}","${totalAmount}","${productID}","${quantity}","${unitPrice}")`
    connection.execute(quary,(err,result) => {
        if (err) {
         return  res.status(400).send({ msg: " error", err })
        }if (!result.affectedRows) {
            return  res.status(400).send({ msg: " fail to added", err })
        }
        return res.status(201).send({ msg: "success", result })
        
    })
}

//  averageOrder///////

export const averageOrder = (req, res) => {
    const{id}=req.params
    const quary = `SELECT AVG(totalAmount) AS AvergValue FROM talabe WHERE id=${id};`
    connection.execute(quary,(err,result) => {
        if (err) {
         return   res.status(400).send({ msg: " error", err })
        }
        return res.status(201).send({ msg: "success", result })
        
    })
}

////    haveNotOrder    //////////
export const haveNotOrder= (req,res,next)=>{
    
    const quary= `SELECT * FROM customer LEFT JOIN talabe ON customer.id=talabe.customerId`;
    connection.execute(quary,(err,result) => {
        if (err) {
         return   res.status(400).send({ msg: " error", err })
        }
        return res.status(201).send({ msg: "success", result })
        
    })
}

////    top10Customer    //////////
export const top10Customer= (req,res,next)=>{
    
    const quary= `SELECT customerId,totalAmount FROM talabe ORDER BY totalAmount DESC LIMIT 10`;
    connection.execute(quary,(err,result) => {
        if (err) {
         return   res.status(400).send({ msg: " error", err })
        }
        return res.status(201).send({ msg: "success", result })
        
    })
}

////    atLeast5Order    //////////

export const atLeast5Order= (req,res,next)=>{
// const{id} = req.params
    const quary= `SELECT DISTINCT customerId, COUNT(orderDate) FROM talabe GROUP BY customerId;`;
    connection.execute(quary,(err,result) => {
        if (err) {
         return  res.status(400).send({ msg: " error", err })
        }
        
        return res.status(201).send({ msg: "success", result })
        
    })
}

////    totalAmountForCustomer    //////////

export const totalAmountForCustomer= (req,res,next)=>{
    // const{id} = req.params
        const quary= `SELECT DISTINCT customerId, SUM(totalAmount) FROM talabe GROUP BY customerId`;
        connection.execute(quary,(err,result) => {
            if (err) {
             return  res.status(400).send({ msg: " error", err })
            }
            
            return res.status(201).send({ msg: "success", result })
            
        })
    }

////    earlistOrder    //////////
export const earlistOrder= (req,res,next)=>{
    
    const quary= `SELECT * FROM talabe ORDER BY id DESC LIMIT 1;`;
    connection.execute(quary,(err,result) => {
        if (err) {
         return   res.status(400).send({ msg: " error", err })
        }
        return res.status(201).send({ msg: "success", result })
        
    })
}

//  updateOrder///////
export const updateOrder = (req, res,next) => {
    const{id}=req.params
    const {customerId} = req.body
    const quary = `update talabe set customerId="${customerId}" where id="${id}"`
    connection.execute(quary,(err,result) => {
        if (err) {
         return  res.status(400).send({ msg: " error", err })
        }if (!result.affectedRows) {
            return  res.status(400).send({ msg: " fail to added", err })
        }
        return res.status(201).send({ msg: "success", result })
        
    })
}

// delete order
export const deleteOrder = (req, res,next) => {
    const{id}=req.params
    const quary = `delete from talabe where id="${id}"`
    connection.execute(quary,(err,result) => {
        if (err) {
         return  res.status(400).send({ msg: " error", err })
        }if (!result.affectedRows) {
            return  res.status(400).send({ msg: " fail to added", err })
        }
        return res.status(201).send({ msg: "success", result })
        
    })
}