var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var PORT = process.env.PORT || 3000;

var app = express();
var htmlRoutes = require('./app/controllers/htmlroutes.js');
var apiRoutes = require('./app/controllers/apiroutes.js');
var db = require("./app/models")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./app/public'));
app.use(htmlRoutes);
app.use(apiRoutes);

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log('Server listening on localhost: ' + PORT);
    });
});
