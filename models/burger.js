//Import the ORM to create functions that will interact with the db

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },
    insertOne: function(cols, vals, callBack) {
        orm.insertOne("burgers", cols, vals, function(res) {
            callBack(res);
        });
    },
    updateOne: function(objColVals, condition, callBack) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callBack(res);
        });
    }
};

//Export the db functions for the controller

module.exports = burger;