-- create burger database

CREATE DATABASE burgers_db;
USE burgers_db;

-- create the table burgers

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);