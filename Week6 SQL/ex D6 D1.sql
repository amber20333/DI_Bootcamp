-- create table finances(
-- id int primary key,date date,
-- electricity float,water float
-- ,paid_by VarChar(50));

-- insert into finances (id , date , electricity , water , paid_by)
-- VALUES  
-- ( 2,'1992-09-03', 5.5 , 9 , 'Yael'),
-- ( 3,'1991-11-03', 5.5 , 8 , 'Yoeol'),
-- ( 4,'1997-08-03', 5.5 , 9 , 'Yaeel'),
-- ( 5 ,'1991-11-03', 5.5 , 8 , 'Yoiel');

-- SELECT * FROM finances;
-- SELECT date from finances;
-- SELECT water , paid_by from finances;

-- ex class :SELECT * from finances;
-- SELECT electricity from finances;
-- SELECT electricity ,water from finances;

-- SELECT id , date , paid_by from finances where id=1;
-- select * from finances where id=1 or id=2;

-- ex class :select  max(water) From finances ;
-- select min(electricity) FROM finances ;
-- select avg(electricity) from finances where paid_by != 'yossi';


-- select paid_by , sum(water), sum(electricity) from finances group by paid_by;
-- select paid_by , sum(water + electricity) as total_sum from finances  group by paid_by;



