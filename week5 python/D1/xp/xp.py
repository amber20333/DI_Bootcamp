from itertools import groupby
from operator import itemgetter


# #exercice.1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age


# cat1 = Cat('Jerry', 22)
# cat2 = Cat('Tom', 11)
# cat3 = Cat('Leo', 7)


# cats = [cat1,cat2,cat3]
# oldest_cat=cats[0]

# for cat in cats:
#     if oldest_cat.age < cat.age:
#      oldest_cat=cat

#      print(oldest_cat)
        
        
# oldest_cat_fonction = lambda cat1,cat2: cat1 if cat1.age>cat2.age else cat2

# print(oldest_cat.name)
        






# #exercice2

# class Dog:
   
#  def __init__(self ,dog_name , dog_height):
#             self.name = dog_name
#             self.height = dog_height


# def bark(self):
#     print(f"{self.name} goes wolf ")


# def jump(self):
#  x = self.height*2 
#  print(f"{self.name} jump {x} cm high!")


# def __str__(self):
#     return f"s{self.name} , {self.height}"

# davids_dog = Dog('rex', 50)
 
# string_dog = str(davids_dog)

# print(davids_dog)
# davids_dog.bark()
# davids_dog.jump()


# sarahs_dog = Dog('Teacup', 20)



# print(sarahs_dog)
# sarahs_dog.bark()
# sarahs_dog.jump()  

# bigger_dog = sarahs_dog.name if sarahs_dog.height > davids_dog.height else davids_dog.name
# print(bigger_dog)



#exercice3

class Song:
    def __init__(self,  lyrics):
        self.lyrics = lyrics

def sing_me_a_song(self):
 for line in self.lyrics:
    print(line)
    
stairway= Song(["Theres a lady who's sure","all that glitters is gold", "and shes buying a stairway to heaven"]).sing_me_a_song()



#exercice4

 

class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

def add_animal(self, new_animal):
   if new_animal not in self.animals :
      self.animals.append(new_animal)
   else:
         print(f'{new_animal} already exists')
 
         


def get_animals(self):
    for animal in self.animals:
      print(animal)

def sell_animal(self , animal_sold):
   if animal_sold in self.animals:
    #    del animal_sold
      self.animals.remove(animal_sold)
   else:
            print(f'{animal_sold} not in zoo')

            

def sort_animals(self):

    sorted(self.animals)
    # ou  self.animals.sort()

new_dict = {}
x = [list(word) for letter, word in groupby(self.animals, key=itemgetter(0))]

for index, word in enumerate(x):
     if len(word) < 2:
        word = "".join(word)
     new_dict[index + 1] = word
     print(new_dict)
    
     


     def get_groups(self):
        d = self.sort_animals()
        for animal in d.values():
            print(animal)


ramat_gan_safari = Zoo('Ramat gan')
ramat_gan_safari.add_animal('monkey')
ramat_gan_safari.add_animal('tiger')
ramat_gan_safari.add_animal('goose')
ramat_gan_safari.add_animal('snake')
ramat_gan_safari.add_animal('epple')
ramat_gan_safari.add_animal('elephant')
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal('monkey')
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()