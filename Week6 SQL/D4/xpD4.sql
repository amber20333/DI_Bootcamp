--1
-- select first_name as first , last_name as last  from employees ;

--2
-- select distinct department_id from employees ;

--3
-- select * from employees order by first_name Desc ;

--4 
-- select first_name , last_name , salary , (salary*0.15) AS PF  from employees ;

--5
-- select employee_id  , first_name , last_name , salary  from employees order by salary asc  ;

--6
-- select sum(salary ) from employees ;

--7 
--  select max(salary) , min(salary) from employees ;

--8
-- select avg(salary) from employees ;

--9
-- select count(employee_id) from employees ;

--10
-- select upper(first_name) from employees ; 

--11 
-- select SUBSTRING(first_name,1,3),last_name from employees;

--12 
-- select first_name ||' '|| last_name from employees ;


--13 
-- select first_name , last_name , LENGTH( first_name ||' '|| last_name) from employees ;


--14
-- select firstn_name from employees where first_name SIMILAR to '%0|1|2|3|4|5|6|7|8|9%';
  
  
--15 
-- select * from employees limit 10 ;

--Exercice 2 
 
--1 
-- select first_name, last_name  , salary  from employees where salary  BETWEEN 10000 AND 15000;

--2 to review 
-- select first_name, last_name ,  hire_date from employees where TO_CHAR(hire_date,'YYY')  LIKE '%87';
 
--3
-- select * from employees where first_name ilike '%c%' and first_name ilike '%e%' ;


--4 to review 
--all the employees who don’t work as Programmers or Shipping Clerks, and who
-- don’t receive a salary equal to $4,500, $10,000, or $15,000.

-- select emp.last_name,job.job_title,emp.salary from employees emp  join jobs  job   on emp.job_id=job.job_id
-- where (job.job_title!='Programmer' or job.job_title!='Shipping Clerk')
-- and(emp.salary!=4500 or emp.salary!=10000 or emp.salary!=15000);

--5 *
-- select last_name from employees where length(last_name)= 6 ;

-- --6
-- select last_name from employees where last_name ilike '__e%' ;

--7
-- select employees.job_id , jobs.job_title 
-- from employees
-- join jobs
-- on employees.job_id = jobs.job_id ;


--8
-- select * from employees where last_name ilike 'JONES ' or last_name ilike 'BLAKE' or last_name ilike 'SCOTT' or last_name ilike'KING'  or last_name ilike 'FORD';

 






