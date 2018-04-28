var express = require('express')
var bodyparser = require('body-parser')

var app = express()
var PORT = process.env.PORT || 3000

app.listen(PORT, function (e) {
    if (e) throw e
});