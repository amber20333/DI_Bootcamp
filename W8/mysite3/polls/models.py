from django.db import models


"""create table person (
    id serial primary key,
    first_name varchar(50),
    last_name varchar(100),
    birthdate date, 
    address varchar(200)
)"""

class Author(models.Model):

    # No need to create id
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=100)
    birthdate = models.DateField()
    address = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name + ' ' + self.last_name 

    
class Post(models.Model):

    title = models.CharField(max_length=100)
    text = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True) # it automatically 
    #                                           assigns the current time to the field
    author = models.ForeignKey(to=Author, on_delete=models.CASCADE, related_name='posts')
# one to many relationship one person could have many post 
    
    def __str__(self):
        return self.title + f' by {self.author.first_name}'
    
# one to one model picture , associated with Person/ author

class Picture(models.Model):

    image = models.URLField()
    author = models.OneToOneField(Author,on_delete=models.CASCADE)


class Category(models.Model):
    # many to many 
    name = models.CharField(max_length=100)
    posts = models.ManyToManyField(Post, related_name='categories')
     

    def __str__(self):
        return self.name
    
class Email(models.Model):
        Author = models.OneToOneField(Author,on_delete=models.CASCADE)
        email = models.CharField(max_length=100)

class Address(models.Model):
        name = models.CharField(max_length=100)
        author = models.ManyToManyField(Author,related_name='categories')
        address = models.CharField(max_length=100)

        
class Comment(models.Model):
     
     comment = models.TextField()
     email = models.EmailField()
     created_at =models.DateTimeField(auto_now_add=True)
     post = models.ForeignKey(Post,on_delete=models.CASCADE)

     def __str__(self):
          return f"{self.post.title}, {self.created_at}"