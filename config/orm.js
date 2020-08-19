//Importing connection

var connection = require("../config/connection.js");
// Object Relational Mapper (ORM)

//Configure ORM to complete mysql functions
var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table;

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function (table, colOne, burgerName) {
    var queryString = "INSERT INTO " + table + "("+ cols +")"+ "VALUES("
        queryString += value + ")"
    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function (table, id) {
    var queryString =
      "UPDATE " + table;
      queryString += " SET devoured = " + true;
      queryString += " WHERE id = " + id;
  

    connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
      });
  }
};

//Exporting ORM
module.exports = orm;
