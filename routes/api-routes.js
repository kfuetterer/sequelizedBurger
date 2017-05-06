var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
  db.Burgers.findAll({}).then(function(results) {
    var hbsObject = {
      burgers: results
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.Burgers.create({
    burger_name: req.body.burger_name,
    devoured: false
  }).then(function(results) {
    res.end();
  });
});

router.put("/:id", function(req, res) {
  db.Burgers.update(
    {
      devoured: true
    },{
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.end();
    })
});

module.exports = router;