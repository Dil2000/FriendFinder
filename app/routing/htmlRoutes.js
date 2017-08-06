// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.

var surveyQuestions = require("../data/surveyQuestions");
var waitListData = require("../data/waitListData");

module.export = function(app){

	app.get("/api/questions",function(req,res){
		res.json(surveyQuestions);
	});

	app.get("/api/waitlist",function(req,res){
		res.json(waitListData);
	})
}

app.post("/api/questions",function(req,res){
	if (surveyQuestions.length < 10){
		surveyQuestions.push(req.body);
		res.json(true);
	}
	else {
		waitListData.push(req.body);
		res.json(false);
	}
});