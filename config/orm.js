var config = require('./connection.js');

//connect to mysql db

// config.connect(function (e) {
//     if (e) throw e
//     console.log(r)
// });

//mysql
var orm = {
    selectAll: function (callback) {
        config.query('SELECT * FROM burgers', function (e, r) {
            if (e) throw e
            callback(r)
        })
    },

    insertOne: function (table, col, val, callback) {
        console.log(val)
        config.query('INSERT INTO '+table+' SET ?', {
                'burger_name': val,
                devoured: false
            },
            function (e, r) {
                if (e) throw e
                callback(r)
            })
    },

    updateOne: function (table, col, val, callback) {
        config.query('UPDATE burgers SET ? WHERE?', [{
            devoured: true
        }], [{
            id: id
        }], function (e, r) {
            if (e) throw e
            callback(r)
        })
    }
};

module.exports = orm;