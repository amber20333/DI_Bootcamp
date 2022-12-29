--1--Get a list of all film languages.


-- select film.title ,film.description, language.name  
-- from film
-- inner join language
-- on film.language_id = language.language_id ;



--2 Get a list of all films joined with their languages /Try your query with different joins

-- Select film.title, description, language.name
-- from film 
-- left join language
-- on film.film_id = language.language_id ;


-- Select film.title, description, language.name
-- from  language
-- left join film
-- on language.language_id = film.film_id   ;



 

--3 Create a new table called new_film with the following columns : id, name. Add some new films to the table
-- create table new_film (id serial , name VarChar) ;
--insert into new_film (name) values ('Shrek'),('Lalaland'),('Twilight');


--4 
-- create table customer_review (review_id serial primary key not null, film_id smallint references new_film(id) on delete cascade,language_id smallint references language(language_id) on delete cascade, title varchar(20) not null, score smallint not null, check (score between 1 and 10), review_text text not null, last_update date not null);


--5 
-- insert into customer_review (film_id, language_id, title, score, review_text, last_update) values (3, 1, 'lion king review', 8, 'gooood','2021/08/03');

 
--6 we dont see the review 
-- delete from new_film where name = 'Shrek';


--exercice2 

--1 

-- select * from language ;

-- update film set language_id = 1 where title like'A%';

--2 custumer_adress_id_fkey / when we insert into the costumer table it updates the payment and rental tables;

--3 drop table customer_review; it's an easy step, the table does not affect other tables.

--4 
-- select count(rental_date) from rental where return_date is null; 

--5
-- select payment.amount, rental.rental_id from payment inner join rental on rental.rental_id = payment.rental_id where rental.return_date is null order by amount desc limit 30;



--6

-- select film.title, film.film_id, film_actor.film_id from film inner join film_actor on film.film_id = film_actor.actor_id where film.description like '%Sumo%' and film_actor.actor_id = 1




--select film.title, film_category.film_id, film_category.category_id from film inner join film_category on film.film_id = film_category.film_id where film.length < 60 and film.rating = 'R' and film_category.category_id = 6; 



--select film.title from film join inventory on film.film_id = inventory.film_id join rental on inventory.inventory_id = rental.inventory_id join customer on rental.customer_id = customer.customer_id where customer.first_name = 'Matthew' and rental.return_date between '2005/07/28' and '2005/08/01' and film.rental_rate > 4;



-- select film.title from film join inventory on film.film_id = inventory.film_id join rental on inventory.inventory_id = rental.inventory_id join customer on rental.customer_id = customer.customer_id where film.description like '%Boat%' and customer.first_name = 'Matthew' and customer.last_name = 'Mahan' and film.replacement_cost > 18 ;