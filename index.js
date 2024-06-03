import express from 'express'
import customerRouter from './src/modules/customer/customer.routes.js';
import connection from './db/models/connectionDb.js';
import productRouter from './src/modules/product/product.routes.js';
import orderRouter from './src/modules/talabe/talabe.routes.js';

const app = express()
app.use(express.json())
const port= process.env.PORT||3000

app.use("/product",productRouter)
app.use("/customer",customerRouter)
app.use("/order",orderRouter)

app.use("/",(req,res,next)=>{
 return res.send({msg:"hellllo"})
    })


app.use("*",(req,res,next)=>{
res.send({msg:"404 not founded"})
})


app.listen(port, () => {
    console.log(`server is turn...`)
})