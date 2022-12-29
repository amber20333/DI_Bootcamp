from django import forms 
from .models import Comment 
from django.contrib.auth.models import User 
from django.contrib.auth.forms import UserCreationForm , UsernameField

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment 
        fields = '__all__'

class CustomerUserCreationForm(UserCreationForm):
    class meta :
        model = User
        fields = ("username",)
        field_class = {'username':UsernameField}
      


    
# class CommentForm(forms.Form):
    
# comment = forms.CharField(max_length=300)
# email = forms.EmailField()