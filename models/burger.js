var orm = require("../config/orm");

var burger = {
    listAll: function(cb) {
        orm.create("burgers", function(res) {
            cb(res);
        });
    },

    //Adds customer order
    addOrder: function(col, val, cb) {
        orm.addOrder("orders", col, val, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;