
import connection from './../../db/models/connectionDb.js';


export const EmailMidlleware = (req,res,next) => {
    const { email } = req.body;
    connection.execute(`select email from customer where email="${email}"`,(err, result) => {
        if (err) {
            res.send({ msg: "err",err})
        }if (result.length) {
            return res.status(400).send({ msg: "Email already exist", err})
        }
        next()
       })
}
