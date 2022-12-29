import requests
import random
import psycopg2

# url = 'https://restcountries.com/v2/all'
url = 'https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population'
# API = requests.get(url).json()

data = requests.get(url).json()
for i in range(10):
   rnd = random.randint(0,250)
   name = data[rnd]['name']['common']
   capital = data[rnd]['capital'][0]
   subregion = data[rnd]['subregion']
   flag = data[rnd]['flag']
   population = data[rnd]['population']
   print(name , capital, subregion , flag,  population)
 
 
  


HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '09041998'
DATABASE = 'daily'

connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )

# create the functionality which will write 10 random countries to your database.

cursor = connection.cursor() # Cursor for running queries
 
q = f"INSERT INTO countries(name_countries,countries_capital,countries_subregion,countries_population) values ('{name}','{capital}','{subregion}',{population});"

cursor =cursor.execute(q) # run query
for i in range(10):
     cursor

connection.commit() # make the update 

connection.close()