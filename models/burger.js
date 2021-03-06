var orm = require("../config/orm");

var burger = {
    listAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    addOrder: function(col, val, cb) {
        orm.addOrder("orders", col, val, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;