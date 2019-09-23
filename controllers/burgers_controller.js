//Dependencies
var express = require("express");
var router = express.Router();

//Import the model to use db functions
var burger = require("../models/burger.js");

//Create routes and logic
router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

router.get("/burgers", function (req, res) {
    burger.selectAll(function(burgerData) {
        res.render("index", { burger_data: burgerData });
      });
});
// router.get("/jq/burgers", function (req, res) {
//     burger.selectAll(function(burgerData) {
//         res.json(burgerData)
//       });
// });

router.post("/burgers/create", function(req, res) {
    burger.createOne(req.body.burger_name, function(result) {
        res.redirect("/burgers");
    });
});

// router.put("/burgers/:id", function(req, res) {
//     burger.updateOne(req.params.id, function(result) {
//         res.sendStatus(200);
//     });
// });

router.post("/burgers/change/:id", function(req, res) {
    var data = {
        id: req.params.id,
        devoured: req.body.devoured
    }
    burger.updateOne(data, function(result) {
       // res.sendStatus(200);
       res.redirect("/burgers")
    });
});

//Export the routes for server.js to use
module.exports = router;