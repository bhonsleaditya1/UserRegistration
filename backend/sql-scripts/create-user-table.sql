drop database userdb; 
drop user 'admin'@'localhost';

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';

create database userdb;
use userdb;

create table Users(
    id int NOT NULL AUTO_INCREMENT,
    firstName varchar(50),
    lastName varchar(50),
    email varchar(50) NOT NULL,
    password varchar(256) NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    UNIQUE(email),
    PRIMARY KEY(id)
);