-- create burger database

CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;
DROP TABLE IF EXISTS burgers;
-- create the table burgers

CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name varchar(60) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);