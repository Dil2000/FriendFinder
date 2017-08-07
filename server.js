
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

 	var newFriend = req.body;
	friendChoices.push(newFriend);

	//res.json(newFriend);
	console.log("Added new details");

	var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    // Here we take the result of the user"s survey POST and parse it.
    var userData = req.body;
    var userScores = userData.scores;

    // This variable will calculate the difference between the user"s scores and the scores of
    // each user in the database
    var totalDifference;
    console.log("user Data : " + userData.name);

    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < (friendChoices.length -1) ; i++) {
      var currentFriend = friendChoices[i];
      totalDifference = 0;

      // We then loop through all the scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
        console.log("best match : " + bestMatch.name + "   " + bestMatch.friendDifference);
      }

    }
    res.json(bestMatch);
});



app.listen(PORT, function() {
  console.log("Listening at PORT " + PORT);
});


