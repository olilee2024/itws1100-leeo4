CREATE TABLE `movies` (
   `movieid` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `title` varchar(100) NOT NULL,
   `year` char(4) DEFAULT NULL,
   PRIMARY KEY (`movieid`)
);


CREATE TABLE `movies_actors` (
   `actorid` int(10) unsigned NOT NULL, 
   `movieid` int(10) unsigned NOT NULL,
   PRIMARY KEY (`actorid`, `movieid`)
);

INSERT INTO movie_actors
VALUES (1,1),
(2,2)
(3,2)
(8,2)
(4,3)
(6,4)
(7,5)
(10,6)
(11,7)
(12,8)
(5,9)
(4,10)
(1,10)
(7,10)
(9,11)
(10,11)
(3,12);


-- CREATE TABLE `actors` (
--    `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
--    `last_name` varchar(40) NULL,
--    `first_names` varchar(40) NULL,
--    `dob` date NULL
--    PRIMARY KEY (`actorid`)
-- );
