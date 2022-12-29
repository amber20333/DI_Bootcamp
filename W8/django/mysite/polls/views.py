from django.shortcuts import render
from datetime import date


# Create your views here.
def homepage(request):

    # render 
    # -request object 
    # template_name -> html name ('homepage.html')
    # context -> dictionnary of data 
    
    context = {'time': date.today(), 'user':'Yossi'}
    return render(request,'homepage.html', context)