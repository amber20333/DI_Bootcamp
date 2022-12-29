import



# exercice 1 pets 

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    



# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    


# all_cats = [Bengal("Bengal",2) , Chartreux( "chartreux", 3) , Siamese("siamese", 5) ]
 
 
 
# sara_pets =  Pets(all_cats)

# sara_pets.walk()


# exercice2 : Dogs 

class Dog ():
  
  def __init__(self, name, age , weight):
            self.name = name 
            self.age = age 
            self.weight = weight 

def bark(self):
      return f'{self.name} is just barking'
      
def run_speed(self):
      speed = self.weight/self.age*10
      return f' the dogs running speed is {speed} '

def fight(self, other_dog):
      if other_dog.run_speed()*other_dog.weight >  (self.run_speed()*self.weight):
       return f" the {other_dog} won the fight "
      else:
       return f" the {self.name} won the fight "

dog1 = Dog('lucky', 4, 15)
dog2 = Dog('joey', 3, 13)
dog3 = Dog('sss', 9, 4)

dog1.fight(dog2)

 