import string


user_string = input("write a string")
if len(user_string) > 10 :
    print("string too long ")
elif len(user_string) < 10 :
    print("string too short")
else :
    print((user_string[0], user_string[-1]))
# print the first and last characters of the given text."
#print("first char :" , user_string[0])
#print("first char :" , user_string[-1])
 

#3using loop construct the string character by character

new_string = ""
for x in user_string:
   user_string += x
   print(new_string)


# for i in range(len(user_string)):
#   print(user_string[:i+1])

 

