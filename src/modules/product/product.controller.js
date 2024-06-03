
import connection from './../../../db/models/connectionDb.js';

////    getProduct    //////////
export const getProduct= (req,res,next)=>{
    const quary= `select * from product`
    connection.execute(
       quary,(err,result)=>{
        if(err){
            res.status(500).send({msg:"server error",err})
        }
        else{
            res.status(200).send(result)
        }
       }

        
    )
}

////    getRevenueCategory    //////////
export const getRevenueCategory= (req,res,next)=>{
const {category} = req.body
    const quary= `SELECT SUM(unitPrice) AS RevenueCategory FROM product WHERE category="${category}"`
    connection.execute(
       quary,(err,result)=>{
        if(err){
         return   res.status(500).send({msg:"server error",err})
        }
        else{

          return  res.status(201).json({msg:"done",result})   
        }
       }
    )
}

////    numberOfSold    //////////
export const numberOfSold= (req,res,next)=>{
    
    const quary= `SELECT productName,quantity FROM product RIGHT JOIN talabe ON talabe.productID=product.id`;
    connection.execute(
       quary,(err,result)=>{
        if(err){
         return   res.status(500).send({msg:"server error",err})
        }
        else{

          return  res.status(201).json({msg:"done",result})   
        }
       }
    )
}



////    addProduct    //////////
export const addProduct= (req,res,next)=>{
const {productName,category,unitPrice} = req.body
    const quary=` insert into product(productName,category,unitPrice) values ("${productName}","${category}",${unitPrice})`
    connection.execute(
       quary,(err,result)=>{
        if(err){
            res.status(500).send({msg:"server error",err})
        }
            console.log(result);
            if (!result.affectedRows) {
                return res.status(400).json({msg:"failed",err})
            }
          return  res.status(200).send({msg:"done",result})
       }
    )
}

////    updateProduct    //////////
export const updateProduct= (req,res,next)=>{
    const {productName,category} = req.body
    const {id} = req.params
        const quary=`update product set productName="${productName}",category="${category}" where id="${id}" `
        connection.execute(
           quary,(err,result)=>{
            if(err){
                res.status(500).send({msg:"server error",err})
            }
                console.log(result);
                if (!result.affectedRows) {
                    return res.status(400).json({msg:"failed",err})
                }
              return  res.status(200).send({msg:"done",result})
           }
        )
    }
    
    ////    deleteProduct    //////////
export const deleteProduct= (req,res,next)=>{
    const {id} = req.params
        const quary=`delete from product where id="${id}"`
        connection.execute(
           quary,(err,result)=>{
            if(err){
                res.status(500).send({msg:"server error",err})
            }
                console.log(result);
                if (!result.affectedRows) {
                    return res.status(400).json({msg:"failed",err})
                }
              return  res.status(200).send({msg:"done",result})
           }
        )
    }



    