

 
   
# user_age = int(input("what is your age ?"))


# if user_age < 3:
#             print("Free ticket")
# elif user_age in range(3, 13):
#             print("You must pay 10$")
# elif user_age > 12:
#             print("You must pay 15$")


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8} 

# for key, value in family.items():
# 	print(value)

# new_list = list(family.items())
# print(new_list)
# new_list = [('rick', 43), ('beth', 13), ('morty', 5), ('summer', 8)]

 

new_list = [] 
for key, val in family.items(): 
    new_list.append([key, val]) 
print(new_list)

 
# if  new_list < 3:
#             print("Free ticket")
# elif new_list in range(3, 13):
#             print("You must pay 10$")
# elif new_list > 12:
#             print("You must pay 15$")
 