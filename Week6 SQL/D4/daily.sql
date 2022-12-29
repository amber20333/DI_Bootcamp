
-- create table orders (ID serial primary key, order_date date not null);

--  create table items (ID serial primary key, order_id smallint, name varchar(50), 
--   price real not null, foreign key (order_id) references orders(ID));


 
-- create function total_price (num integer) 
-- returns integer 
-- begin select  sum(price * qty) from items   );
-- end;
-- language plpgsql;



