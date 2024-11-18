CREATE TABLE `actors` (
   `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `first_name` varchar(20) NOT NULL,
   `last_name` varchar(20) DEFAULT NULL,
   `dob` char(10) DEFAULT NULL,
   PRIMARY KEY (`movieid`)
);
