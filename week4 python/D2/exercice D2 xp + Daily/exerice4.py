# Integers and floats are two different kinds of numerical data.
# An integer (more commonly called an int) is a number without a decimal point. A float is a floating-point number,
# which means it is a number that has a decimal place.


#2 using raneg 

li = []
for i in range(1,6):
  li.append(i)
  li[0] = 1.5 
li.insert(2, 2.5)
li.insert(4, 3.5)
li.insert(6, 4.5)

print(li)


#3
float_list = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] 
print(float_list)
