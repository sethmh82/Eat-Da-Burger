// VARIABLES
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");

var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();

var PORT = process.env.PORT || 3000;

// EXPRESS
var app = express();
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// EXPRESS HANDLEBARS
var exphand = require("express-handlebars");
app.engine("handlebars", exphand({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTES
var burgerRoutes = require("./controllers/burgers_controllers.js");
app.use(burgerRoutes);

// PORT LISTENER APP.LISTEN
db.sequelize.sync().then(function() {
    app.listen(PORT, function() { console.log("App listening on PORT " + PORT); });
});