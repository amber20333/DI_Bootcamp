from django.contrib import admin
from .models import Post , Author, Picture , Category , Email  , Address




# Register your models here.

admin.site.register(Post)
admin.site.register(Author)
admin.site.register(Picture)
admin.site.register(Category)
admin.site.register(Email)
admin.site.register(Address)