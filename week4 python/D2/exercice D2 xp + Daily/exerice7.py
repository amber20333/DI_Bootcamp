 
from cgi import print_arguments


user_favorite_fruit =  (input("what is your favorite fruits and separate with space  "))
print(user_favorite_fruit.split(" ,"))
 
user_input = input("write a name of any fruit")

if user_input in user_favorite_fruit :
    print("You chose one of your favorite fruits! Enjoy!")
else :
    print("You chose a new fruit. I hope you enjoy")
