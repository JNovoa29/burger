-- create burgers database
CREATE DATABASE burgers_db;

USE burgers_db;

-- create a table with the fields id, burger_name = string, and devoured = boolean
CREATE TABLE burgers (
id INT(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN NOT NULL
);
