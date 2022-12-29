from django.db import models


"""create table person (
    id serial primary key,
    first_name varchar(50),
    last_name varchar(100),
    birthdate date, 
    address varchar(200)
)"""

class Person(models.Model):

    # No need to create id
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=100)
    birthdate = models.DateField()
    address = models.CharField(max_length=200)

class Post(models.Model):

    title = models.CharField(max_length=100)
    text = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True) # it automatically 
    #                                           assigns the current time to the field
    author = models.ForeignKey(to=Person, on_delete=models.CASCADE)
