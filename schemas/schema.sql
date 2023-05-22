DROP DATABASE IF EXISTS get_pics_db;
CREATE DATABASE get_pics_db;

USE get_pics_db;

CREATE TABLE pics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE,
  url VARCHAR(300),
  description VARCHAR(300)
)