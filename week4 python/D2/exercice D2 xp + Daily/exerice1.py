my_fav_numbers = {7,4,9}

my_fav_numbers.add(1)
my_fav_numbers.add(2)

my_fav_numbers.remove(-1)

friend_fav_numbers = {3,2,1}

#our_fav_numbers = my_fav_numbers =+ friend_fav_numbers

our_fav_numbers = set.union(my_fav_numbers,friend_fav_numbers)
print(our_fav_numbers)