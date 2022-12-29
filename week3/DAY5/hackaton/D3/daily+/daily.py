from googletrans import Translator 
 
translator = Translator()

# translate a french text to english  word

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
 

 

 
translations = translator.translate(french_words, dest="en")
for translation in translations:
    print(f"{translation.origin} ({translation.src} ){translation.text} ({translation.dest})")

    
