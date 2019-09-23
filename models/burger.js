//Import the ORM to create functions that will interact with the db

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },
    createOne: function(name, callBack) {
        orm.createOne("burgers", [
          "burger_name", "devoured"
        ], [
          name, false
        ], callBack);
      },
      updateOne: function(burger, callBack) {
        var condition = "id=" + burger.id;
        orm.updateOne("burgers", {
          devoured: burger.devoured
        }, condition, callBack);
      }
}

//Export the db functions for the controller

module.exports = burger;