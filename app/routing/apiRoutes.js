const friendsData = require("../data/friends");
const survey = require("../data/survey");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.get("/api/surveyquestions", function(req, res) {
    res.json(survey);
  });

  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
    res.json(true);
  });

  app.post("/api/clear", function(req, res) {
    friendsData.length = 0;

    res.json({ ok: true });
  });
};
