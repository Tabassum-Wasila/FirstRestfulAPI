var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to my restful API");
    });
  }
  
  module.exports = appRouter;