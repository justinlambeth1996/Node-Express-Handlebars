//Dependencies
const mysql = require("mysql");

//Creating connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "",
    database: "burgers_db"
  });
  
  //Console.log connection res
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
    console.log(port);
  });
  
  //Exporting connection
  module.exports = connection;
  