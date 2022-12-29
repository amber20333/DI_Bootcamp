
-- CREATE TABLE students ( id int primary key serial , last_name VarChar  , first_name VarChar  , birth_date date );


-- INSERT INTO students (id , last_name , first_name , birth_date ) VALUES ( 1 , 'Marc','Benichou', '1998/11/02'), (2 , 'Cohen', 'Yoan', '2010/12/03'), (3 , 'Benichou', 'Lea', '1986/07/27'), (4 ,'Dux', 'Amelia', '1996/04/07'), (5, 'Grez', 'David', '2003/06/14'), (6 , 'Simpson', 'Omer', '1980/10/03') , (7 , 'Azerad' , 'Ambre','1998/09/04'); 
--  SELECT * from students ;
--  SELECT * from students where id= 2 ; 
-- SELECT first_name, last_name FROM students WHERE id = 2;

-- SELECT  first_name , last_name  FROM students WHERE last_name = 'Marc' and first_name = 'Benichou' ;

-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- SELECT first_name from students where first_name LIKE %A%;

-- SELECT first_name from students where first_name LIKE A%;


-- SELECT first_name from students where first_name LIKE %A;

-- SELECT first_name from students where first_name LIKE '%a_';


-- SELECT * from students where birth_dates >= '2000/01/01' ;