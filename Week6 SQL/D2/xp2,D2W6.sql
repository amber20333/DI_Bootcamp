select * from customer;

select first_name, last_name from customer as full_name;

select distinct create_date from customer;

select * from customer order by first_name desc;

-- Write a query to get the -- film ID, title, description, year of release and -- rental rate in ascending order according to their rental rate.

select film_id, title, description, release_year, rental_rate from film order by rental_rate;

-- Write a query to get the address, and the phone number of all -- customers living in the Texas district, these details -- can be found in the “address” table.

select address, phone from address where district = 'Texas';

select * from film where film_id = 15 or film_id = 150;

select film_id, title, description, length, rental_rate from film where title = 'Gladiator'; 
select title from film; select film_id, title, description, length, rental_rate from film where title ilike 'Gl%';

select title , rental_rate from film order by rental_rate limit 10;  

--11

-- Write a query which will join the data in the customer table and the -- payment table. You want to get -- the amount and the date of every payment made -- by a customer, ordered by their id (from 1 to…).

select customer.customer_id, customer.first_name, payment.amount, payment.payment_date from customer inner join payment on payment.customer_id = customer.customer_id order by customer.customer_id;

-- select film.film_id, film.title, inventory.film_id -- from film -- inner join inventory on inventory.film_id = film.film_id;

select title, film_id from film where film_id not in (select film_id from inventory);

select city.city, city.country_id, country.country, country.country_id from city inner join country on country.country_id = city.country_id;

 


 






