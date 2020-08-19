//Dependencies
const mysql = require("mysql");

var connection;
//Creating connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { 
  connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "burgers_db"
});
};

  
  //Console.log connection res
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);

  });
  
  //Exporting connection
  module.exports = connection;
  