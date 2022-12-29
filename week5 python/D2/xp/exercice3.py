from xp import Dog
 
 

class PetDog(Dog):
      def __init__(self,name , age , weight ):
             super().__init__(name, age, weight)
             self.trained =  False
             
            

def train(self):
     print(f'{self.bark()} is training ')
     self.trained = True 
   
def play(self,*dogs) : 

   out = f'{self.names}  all play together'
  #  for dog in dogs : 
   out += f"{}"

     
 
def do_a_trick(self):
    if self.trained == True  :
         print(f"{self.name} does a barrel roll")
         print(f"{self.name}  stands on his back legs")
         print(f"{self.name} shakes your hand")
         print(f"{self.name} plays dead")
    else:
       print(f'Your dog {self.name} is not trained')

pet1 = PetDog('lola', 5, 14)
pet2 = PetDog('lala', 3, 11)
pet3 = PetDog('lili', 5, 12)
              
pet1.do_a_trick()
 
