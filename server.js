// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Style Sheets and images
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/images"));

// Add other javascripts
//app.use(express.static(path.join(__dirname, '/app/routing')));



// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/servey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/servey.html"));
});



// Connecting the javascripts
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);




var friendChoices = require("./app/data/friends");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

// Get Json data from javascripts
app.get("/app/data/friends",function(req,res){
	res.json(friendChoices);
});

app.listen(PORT, function() {
  console.log("Listening at PORT " + PORT);
});


// // Add new Tables
// app.post("/api/data/friends", function(req, res) {
//   var friendChoices = req.body;
//   table.id = reservation.id.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });
