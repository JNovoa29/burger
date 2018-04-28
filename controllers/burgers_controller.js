var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

//redirect
router.get('/', function(req, res) {
    res.redirect('/index')
});

//render
router.get('/index', function(req, res) {
    burger.selectAll(function(d) {
        var hbs = {burger: d}
        console.log(hbs)
        res.render('index', hbs)
    })
});

//create
router.post('/burger/create', function(req, res) {
    console.log(req.body.burger_name)
    burger.insertOne('burger_name', req.body.burger_name, function(d) {
        res.redirect('/index')
    })
});

//devour
router.put('/burger/eat/:id', function (req, res) {
    burger.updateOne({'devoured': req.body.devoured}, function(d) {
        res.redirect('/index')
    })
});

module.exports = router;
