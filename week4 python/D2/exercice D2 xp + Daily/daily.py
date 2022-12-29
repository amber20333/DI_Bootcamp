
# Challenge 1 

# user_number = int(input("write a number"))
# user_lenght = int(input("write a lenght"))

# for i in range(1,user_lenght+1):
#     print(user_number*i)

# challenge2

from traceback import print_list


user_word = input("write a word : ")
# user_word = set(user_word)
user_word = list(dict.fromkeys(user_word))
user_word = ''.join(user_word)
print(user_word) 

 