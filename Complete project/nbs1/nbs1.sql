CREATE DATABASE IF NOT EXISTS nbs1;
USE nbs1;
ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'root';

CREATE TABLE IF NOT EXISTS employees (empno int, name VARCHAR(20), salary INT, department VARCHAR(20));

INSERT INTO employees VALUE (101, "Matt", 2000, "IT");
INSERT INTO employees VALUE (102, "Brad", 2000, "HR");
INSERT INTO employees VALUE (103, "Neil", 2000, "Sales");
INSERT INTO employees VALUE (103, "Phil", 2000, "IT");