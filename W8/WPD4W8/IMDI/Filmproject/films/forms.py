from django import forms 
from .models import   Director , Film 


class AddFilmForm(forms.ModelForm):
    class Meta:
        model = Film
        exclude = '__all__'

class AddDirectorForm(forms.ModelForm):
    # film = forms.ModelMultipleChoiceField(queryset=Film.objects.all())
    class Meta:
        model = Director
        fields = '__all__'
