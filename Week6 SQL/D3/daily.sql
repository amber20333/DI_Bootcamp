-- create table Customer(id serial PRIMARY KEY, first_name VarChar, last_name VarChar NOT NULL );

-- create table Customer_profile (
-- id serial PRIMARY KEY , isLoggedIn boolean DEFAULT false , customer_id int , 
-- FOREIGN KEY (customer_id) REFERENCES customer(id));


-- insert into Customer(first_name, last_name) values ('john','Doe'),
-- ('Jerome', 'Lalu') ,('Lea', 'Rive');


--3
-- insert into Customer_profile (isLoggedIn ,customer_id )
-- select 'false', id from customer where first_name ILIKE 'Jerome';

-- insert into Customer_profile (isLoggedIn ,customer_id )
-- select 'true', id from customer where first_name ILIKE 'John';

--4

-- SELECT customer.first_name , customer_profile.isLoggedIn
-- FROM customer
-- INNER JOIN customer_profile ON customer.id = customer_profile.id


-- SELECT customer.first_name , customer_profile.isLoggedIn
-- FROM customer
-- left JOIN customer_profile
-- ON customer.id = customer_profile.id


-- SELECT  count(*) 
-- from customer 
-- join customer_profile
-- on customer_id = customer_profile.customer_id 

 




 
 
 
 
 
 
 
 

-- --part2

-- Create table Book (book_id SERIAL PRIMARY KEY, title NOT NULL VarChar, author NOT NULL VarChar);

-- insert into Book (title , author ) values (('Alice In Wonderland','Lewis Carroll')
-- ('Harry Potter', 'J.K Rowling') ('To kill a mockingbird', 'Harper Lee');
						 
-- create table Student (student_id SERIAL PRIMARY KEY, name VarChar NOT NULL UNIQUE, age  INTEGER,CHECK (Age<=15))					 

--insert into Student (name , age ) Values ('John', 12 ), ('Lera' ,11),('Patrick', 10),('Bob', 14);

--Create table Library (
-- book_id integer not null,
-- 	student_id integer not null,
-- 	PRIMARY KEY(book_id,student_id),
-- 	FOREIGN KEY (book_id) references Book(book_id) ON UPDATE DELETE CASCADE    ,
-- 	FOREIGN KEY (student_id) references Student(student_id) ON UPDATE DELETE CASCADE    ,
-- 	borrowed_date date ) ;


-- insert into Library (book_id , student_id , borrowed_date)
-- values
-- 	(
--         (select book_id from Book where title='Alice In Wonderland'),
-- 	  (select student_id from student where name='John'),
-- 	  '15/02/2022'),


-- 	  ((select book_id from Book where title='To kill a mockingbird'),
-- 	  (select student_id from student where name='Bob'),
-- 	  '03/03/2021'),


-- 	  ((select book_id from Book where title='Alice In Wonderland'),
-- 	  (select student_id from student where name='Layer'),
-- 	  '23/05/2021'),


-- 	  ((select book_id from Book where title='Harry Potter'),
-- 	  (select student_id from student where name='Bob'),
-- 	  '12/08/2021');


--Select all the columns from the junction table
select * from library join book
on library.book_id = book.book_id
join student on library.student_id = student.student_id;
--Select the name of the student and the title of the borrowed books
select s.name,b.title from Student s
join Library l on s.student_id=l.student_id
join Book b on l.book_id=b.book_id;
--Select the average age of the children, that borrowed the book Alice in Wonderland
select s.age from Student s
join Library l on s.student_id=l.student_id
join Book b on l.book_id=b.book_id
where b.title='Alice In Wonderland';
--Delete a student from the Student table, what happened in the junction table ?
delete from student where student.name='Layer';
--ON remarque qu'il est supprimer au niveau de la library.
  