
from game import Game 

# this will contain functions to show the main menu,
# handle user’s input, and show the game summary before exiting.

def get_user_menu_choice():
    menu = input(""" Menu:
    (a) Play a new game
    (b) Show scores
    (q) Quit
    """)
    return menu


def print_results(results):
    print(results)

    
def main():
     li = []  
     while True:
        x = get_user_menu_choice()
        if x == "a" or x == "b" or x == "q":
            if x == "a":
                a = Game()
                y = a.play()
                li.append(y)
            elif x == "b":
                print_results({"win" : li.count("win"), "loss" : li.count("loss"), "draw" : li.count("draw")})
            else:
                print_results(f""" Game results:
                You won {li.count("win")} times
                You lost {li.count("loss")} times
                You draw {li.count("draw")} times.
                Thank you for playing!!
                """)
                break
            
        else:
            print('invalid input')

main()