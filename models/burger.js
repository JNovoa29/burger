var orm = require('./orm.js');

//call orm functions
var burger = {
    selectAll: function(cb){
        orm.selectAll(function(r) {
            cb(r)
        });
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(r) {
            cb(r)
        });
    },
    updateOne: function(id, cb) {
        orm.updateOne(id, function(r) {
            cb(r)
        })
    }
};

module.exports = burger;