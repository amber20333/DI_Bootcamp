CREATE DATABASE famous ; 
CREATE TABLE actors (id SERIAL int primary key, first_name VarChar(50) , last_name VarChar(100) , age date , number_oscars smallint) ; 
INSERT INTO actors ( first_name , last_name , age , number_oscars ) VALUES ('Matt','Damon','1970/10/08', 5), ('George',' Clooney','1961/05/06', 2), ('Angelina','Jolie','1975/06/04', 1), ('Jennifer','Aniston','1969/02/11', 0);
SELECT COUNT(first_name) FROM actors;
INSERT INTO actors (first_name , last_name , age , number_oscars ) VALUES (null,null,null,null)