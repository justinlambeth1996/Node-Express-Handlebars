//Importing connection

const connection = require("./connection.js");
// Object Relational Mapper (ORM)

//Configure ORM to complete mysql functions
var orm = {
    selectAll: function(table, colToSearch, valOfCol) {
      var queryString = "";
      connection.query(queryString, [], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function() {
      var queryString = "";
      console.log(queryString);
      connection.query(queryString, [], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function() {
      var queryString =
        "";
  
      connection.query(
        queryString,
        [],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
//Exporting ORM
module.exports = orm;
