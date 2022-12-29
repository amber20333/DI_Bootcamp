users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
number_user= [0,1,2,3,4]

print(users)
 
for item in zip(users):
    print(item)

for item in enumerate(users):
    print(item)

# (0, 'Mickey')
# (1, 'Minnie')
# (2, 'Donald')
# (3, 'Ariel')
# (4, 'Pluto')

new_dict = {users[i]: number_user[i] for i in range(len(users))}
print ("Created dictionary:",new_dict)

# Created dictionary: {'Mickey': 0, 'Minnie': 1, 'Donald': 2, 'Ariel': 3, 'Pluto': 4}

# new_dict = {v: k for k, v in new_dict.items()}
# print(new_dict)

# {0: 'Mickey', 1: 'Minnie', 2: 'Donald', 3: 'Ariel', 4: 'Pluto'}

sorted_list = sorted(new_dict)
print(sorted_list)
# ['Ariel', 'Donald', 'Mickey', 'Minnie', 'Pluto']

sorted_value = sorted(new_dict.keys())
print(sorted_value)

# sorted_value = ['Ariel', 'Donald', 'Mickey', 'Minnie', 'Pluto']
# number_user= [0,1,2,3,4]

new_dict_sort = {sorted_value[i]: number_user[i] for i in range(len(sorted_value))}
print ("new dictionary sort :",new_dict_sort)

# Created dictionary: {'Ariel': 0, 'Donald': 1, 'Mickey': 2, 'Minnie': 3, 'Pluto': 4}

# 4.

# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
# The characters, which names start with the letter “m” or “p”.
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

 

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
number_user= [0,1,2,3,4]

check = 'm'

print("The original list : " + str(users))

res = [idx for idx in users if idx.lower().startswith(check.lower())]
print("The list of matching first letter : " + str(res))


 