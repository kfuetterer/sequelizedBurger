var db = require("../models");

module.exports = function(app){
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      var hbsObject = {
        burgers: results
      };
      res.render("index", hbsObject);
    });
  });

  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function(results) {
      res.redirect("/");
    });
  });

  app.put("/:id", function(req, res) {
    db.Burger.update(
      {
        devoured: true
      },{
        where: {
          id: req.params.id
        }
      }).then(function(results) {
        res.redirect("/");
      });
  });
};