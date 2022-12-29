import random

def compare(user_num: int):
    computer_num = random.randint(1, 100)
    if user_num == computer_num:
        print('SUCCESS')
        return True
    else:
        print(f"User: {user_num}, Computer: {computer_num}")
        return False

i = 0
while not compare(10):
    i += 1

print(f"Iterations: {i}")

