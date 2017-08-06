// // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

// // A POST routes /api/friends. This will be used to handle incoming survey results. 
// // This route will also be used to handle the compatibility logic.




// var friends = require("../data/friends");

// module.export = function(app){

// 	app.get("/api/friends",function(req,res){
// 		res.json(friends);
// 		console.log("friends" + json(friends));
// 	});


// 	app.post("/api/friends", function(req, res) {
// 		var newFriend = {
//           name: "abra kadabra",
//           photo: "djkjfkds",
//           scores: [1,2,3,4,5,1,2,3,4,5]
//         }


// 		friends.push(newFriend);
// 		res.json(newFriend);
// 		console.log("Add");
// 	});
// }




// 	