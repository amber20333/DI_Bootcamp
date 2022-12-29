prices = []
num_of_members = input('how many family members? ')
counter = 0
while counter < int(num_of_members):
    counter += 1
    family_age = int(input("What is your age? "))
    if 12 > family_age > 3:
        prices.append(10)
    elif family_age > 12:
        prices.append(15)
print(sum(prices))

# 11. 4
num_of_people = int(input('how many people? '))
allowed_people = []
counter = 0
while counter < num_of_people:
    counter += 1
    person_name = input('What is your name? ')
    person_age = int(input(f'okay {person_name} how old are you? '))
    if person_age < 16 or person_age > 21:
        allowed_people.append(person_name)
print(allowed_people)


num_of_people = int(input('how many people? '))
allowed_people = []
counter = 0
while counter < num_of_people:
    counter += 1
    person_name = input('What is your name? ')
    person_age = int(input(f'okay {person_name} how old are you? '))
    if person_age < 16 or person_age > 21:
        allowed_people.append(person_name)
print(allowed_people)