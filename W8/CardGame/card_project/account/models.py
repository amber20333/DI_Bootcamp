from django.db import models
from django.db.models.deletion import PROTECT , CASCADE

# Create your models here.
 


class Profile(models.Model):
user_Name = models.OneToOneField(  , on_delete=models.CASCADE)
type = models.ForeignKey('Topic', on_delete=PROTECT, default=1)
image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, **options)
number_of_points = models.IntegerField(default=0)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    topic = models.ForeignKey('Topic', on_delete=PROTECT, default=1)
    score = models.IntegerField(default=0)
    coins = models.IntegerField(default=200)
    can_sell = models.BooleanField(default=True)

    # def __str__(self):
    #     return f'{self.user_name}'

class Topic(models.Model):
    topic = models.CharField(max_length=4)

    def __str__(self):
        return self.topic