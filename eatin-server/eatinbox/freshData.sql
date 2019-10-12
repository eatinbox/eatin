DROP DATABASE eatinbox;
DROP USER 'eatinboxuser'@'localhost';
CREATE DATABASE eatinbox CHARACTER SET UTF8;
CREATE USER eatinboxuser@localhost IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON eatinbox.* TO eatinboxuser@localhost;
FLUSH PRIVILEGES;