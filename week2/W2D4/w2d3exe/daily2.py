from translate import Translator

translator= Translator(from_lang="french",to_lang="english")

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
translation = {}

for french_w in french_words:
    translation[french_w] = translator.translate(french_w)

print(translation)
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
