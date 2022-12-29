import psycopg2


HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '09041998'
DATABASE = 'menu'

connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )

cursor = connection.cursor()


#  create table menu (item_name varchar(50) not null, price smallint not null, unique(item_name));

class MenuItem :
 

 def __init__(self, name, price):
        self.name = name 
        self.price = price 

 def save(self):  #save items from the database.
     save_q= f"insert into menu (item_name, price) values ('{self.name}', {self.price});"
     cursor.execute(save_q)
     connection.commit()
print('item was added successfully.')
     

def delete(self):  #delete items from the database.
     del_q= f"delete from menu where item_name = '{self.name}';"
     cursor.execute(del_q)
     connection.commit()
    

def update( self ,name , price ): # update  items from the database.
      update_q = f"update menu set item_name ='{name}', price = {price} where item_name = '{self.name}'"
      cursor.execute(update_q)
      connection.commit()

def all(self): #method called all which will return a list of all our MenuItem objects.
        query = "select * from menu;"
        cursor.execute(query)
        results = cursor.fetchall()
        for item in results:
                print(item)

def get_by_name(self , name):
      get_item_q = f"select item_name from menu where item_name = '{name}';"
      cursor.execute(get_item_q)
      result = cursor.fetchall()
      if result:
            for item in result:
                return item
      else:
            return None
      


item = MenuItem('Burger', 35)
item.save()
item.delete()
item.update('Veggie Burger', 37)
item2 = MenuItem.get_by_name('Beef Stew')
items = MenuItem.all()

 

