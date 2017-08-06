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

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/servey.html"));
});







var friendChoices = require("./app/data/friends");

// Get Json data from json
app.get("/api/friends",function(req,res){
	res.json(friendChoices);
});

app.post("/api/friends", function(req, res) {
	// var newFriend = {
 //      name: "abra kadabra",
 //      photo: "djkjfkds",
 //      scores: [1,2,3,4,5,1,2,3,4,5]
 //    }
 	var newFriend = req.body;

	friendChoices.push(newFriend);
	res.json(newFriend);
	console.log("Add");

});


app.listen(PORT, function() {
  console.log("Listening at PORT " + PORT);
});


