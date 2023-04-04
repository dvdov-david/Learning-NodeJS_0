CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE employee(
    id INT(11) not NULL AUTO_INCREMENT,
    name Varchar(45) default NULL,
    salary int DEFAULT NULL,
    primary key (id)
); 

DESCRIBE employee;

INSERT INTO employee VALUES
(1,'Joe',1000),
(2,'Henry',2000),
(3,'Sam',2500),
(4,'Max',1500);
