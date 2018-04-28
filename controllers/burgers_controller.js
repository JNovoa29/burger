var express = require('express');
var burger = require('./burger.js');
var router = express.Router();

//redirect
router.get('/', function(req, res) {
    res.redirect('/index')
});

//render
router.get('/index', function(req, res) {
    burger.selectAll(function(d) {
        var hbs = {burger: d}
        res.render('index', hbs)
    })
});

//create
router.post('/burger/create', function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/index')
    })
});

//devour
router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id), function() {
        res.redirect('/index')
    }
});

module.exports = router;
