var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//Serve static for the app from the public dir

app.use(express.static("public"));

//Parse app body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars

var exhbs = require("express-handlebars");

app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access

var routes = require("./controllers/burgers_controller.js");
app.use(routes)

//Start server to listen to client requests

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
