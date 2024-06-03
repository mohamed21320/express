import  mysql  from "mysql2";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test5',
  });
  connection.connect((err, res) => {

    if (err) {
      console.log(err);
    }
    else{
        console.log("successfully connected");
        
    }
  })
  export default connection;