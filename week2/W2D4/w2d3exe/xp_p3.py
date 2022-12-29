from string import ascii_lowercase, ascii_uppercase
import random

all_letters = ascii_lowercase + ascii_uppercase

random_word = ""

for _ in range(5):
    random_l = random.choice(all_letters)
    random_word += random_l

print(random_word)