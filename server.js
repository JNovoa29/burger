var express = require('express')
var bodyparser = require('body-parser')

var app = express()

app.use(express.static(process.cwd() + '/public'))
app.use(bodyparser.urlencoded({
    extended: false
}));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = process.env.PORT || 3000
app.listen(PORT, function (e) {
    if (e) throw e
    console.log("running on Port: " + PORT)
});