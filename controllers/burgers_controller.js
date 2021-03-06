//Dependencies
const express = require("express");
const router = express.Router();

//Require burger.js model
const burger = require("../models/burger.js");

//Create all routes

router.get("/", function(req, res) {
    burger.listAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    burger.addOrder([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burger/:id", function(req, res) {
    var id = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    list.update({
        devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

//   router.delete("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     burger.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
  
module.exports = router;