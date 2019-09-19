//Import MySQL Connection

var connection = require("../config/connection.js");

//Helper function for SQL syntax

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

//Helper function to convert object key/value pairs to SQL syntax

function objToSql(object) {
    var arr = [];

    //Loop through the keys and push key/value as a string into arr
    for (var key in object) {
        var value = object[key];
        //check to skip hidden properties

        if (Object.hasOwnProperty.call(object, key)) {
            //if string has spaces, add quotations

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    //translate array of strings to single coma-seperated string

    return arr.toString();
}

//Object for SQL statement functions

var orm = {
    selectAll: function(tableInput, callBack) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },
    insertOne: function(table, cols, vals, callBack) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            callBack(result);
        });
    },
    updateOne: function(table, objColVals, condition, callBack) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            callBack(result);
        });
    }
};

//Export orm object to the model

module.exports = orm;