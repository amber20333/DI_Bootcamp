from accounts.models import Profile
from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE, PROTECT
import random
from django import forms

# Create your models here.

class Card(models.Model):
    
    title = models.CharField(max_length=50,  default=1)
    card_type = models.CharField(max_length=2)
    rarity = models.IntegerField(default=0)
    price = models.IntegerField(default=50)
    quantity = models.IntegerField(default=1)
    owners = models.ManyToManyField('accounts.Profile', on_delete=CASCADE)


class Deck(models.Model):
 pass


class Transaction(models.Model):
    trade_sender = models.ForeignKey('accounts.Profile', on_delete=CASCADE, related_name='my_offer')
    trade_reciever = models.ForeignKey('accounts.Profile', related_name='offer_target',  on_delete=CASCADE, null=True)
    card = models.ForeignKey(Card, on_delete=CASCADE, related_name='card1', default=1)
    choice = models.CharField( max_length=10) 
    trade_choice = models.BooleanField(null=True)
    timestamp = models.DateTimeField(auto_now=True)