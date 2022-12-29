my_toppings = ['mushrooms', 'olives', 'pineapple', 'onion', 'pepperoni']
list_of_toppings = []

while True:
    user_topping = input("choose topping for your pizza: ").lower()
    if user_topping in my_toppings:
        list_of_toppings.append(user_topping)
        print(f'okay we\'ll add {user_topping}')
        for topping in list_of_toppings:
            x = len(list_of_toppings) * 2.5
    elif user_topping == 'quit':
        if len(list_of_toppings) > 0:
            for topping in list_of_toppings:
                x = len(list_of_toppings) * 2.5
                print('your total is: ', x + 10)
                print('goodbye!')
                break
        else:
            print('your total is 10')
            print('goodbye!')
            break
    elif user_topping not in my_toppings:
        print('Sorry we don\'t have that..')

  

 