 
 


brand = {'name': 'zara', 'creation_date': 1975, 'creator_name': 'Amancio Ortega Gaona ','type_of_clothes':'men, woman, children, home','internationale_competitors':'gap ,h&m,Benetton','number_stores':7000,'major_colors': {'France':'blue','Spain':'red','US':'pink,green'}  }

print(type(brand))

brand["number_stores"] = 2
print(brand)

# 4. print(f"Zaras clients are")

# 5.
brand["country_creation"]='Spain'

# 6.
if "international_competitors" in brand:
 brand.update({"international_competitors": "desigual"})

#  7.
brand.pop("creation_date")
print(brand)

# or
# keysToRemove = ["creation_date"]
# for key in keysToRemove:
#     del brand[key]

# 8.Print the last international competitor.
brand["international_competitors"][-1]
 
#9.Print the major clothes colors in the US.

# 10. Print the amount of key value pairs (ie. length of the dictionary).

# 11. Print the keys of the dictionary.

print(brand.keys())

# 12. Create another dictionary called more_on_zara with the following details:

more_on_zara = {
 'creation_date': 1975 ,
'number_stores': 10000,
}

# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.

brand.update(more_on_zara)
print(brand)

# 14. Print the value of the key :number_stores. What just happened ?

brand.keys(['number_stores']) 