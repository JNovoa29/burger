var orm = require('../config/orm.js');

//call orm functions
var burger = {
    selectAll: function(callback){
        orm.selectAll(function(r) {
            if(callback) callback(r);
        });
    },
    insertOne: function(col, val, callback) {
        console.log(val)
        orm.insertOne('burgers', col, val, function(r) {
            if(callback) callback(r);
        });
    },
    updateOne: function(id, callback) {
        orm.updateOne('burgers', id, function(r) {
           callback(r);
        })
    }
};

module.exports = burger;