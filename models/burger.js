var orm = require('../config/orm.js');

//call orm functions
var burger = {
    selectAll: function(cb){
        orm.selectAll(function(r) {
            cb(res)
        });
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(r) {
            cb(res)
        });
    },
    updateOne: function(id, cb) {
        orm.updateOne(id, function(r) {
            cb(res)
        })
    }
};

module.exports = burger;