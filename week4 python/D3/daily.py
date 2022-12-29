:user_word = input("write a word : ")
index = user_word.index("")
print(index)

new_dict = {user_word[i]: index for i in range(len(user_word))}
print ("Created dictionary:",new_dict)

 