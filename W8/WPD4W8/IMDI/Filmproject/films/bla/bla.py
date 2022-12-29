from urllib import Request, urlopen

request = Request('http://intergalacticdb.me/api/characters')

response_body = urlopen(request).read()
print (response_body)