import  mysql  from "mysql2";

const connection = mysql.createConnection("mysql://u0c3vil1dfmxw6iw:z3SI73unTqwev1svKKwA@bt5c0hvdfwy9sqtebwo5-mysql.services.clever-cloud.com:3306/bt5c0hvdfwy9sqtebwo5");
  connection.connect((err, res) => {

    if (err) {
      console.log(err);
    }
    else{
        console.log("successfully connected");
        
    }
  })
  export default connection;