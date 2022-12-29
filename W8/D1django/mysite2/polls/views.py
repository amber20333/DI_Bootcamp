from django.shortcuts import render
from datetime import date
from .models import Post, Person

# Create your views here.
def homepage(request):

    # render
    # - request object
    # - template_name -> html name ('homepage.html')
    # - context -> dictionary of data

    all_posts = Post.objects.all().order_by('-date_created') # All of the posts

    context = {'time': date.today(), 'posts': all_posts}
    return render(request, 'homepage.html', context)


def authors(request):
    pass








def profile(request):
    
    context = {'name': 'Yoss', 'gender': 'M', 'items': ['banana','eggs','tv']}
    
    return render(request, 'user_profile.html', context)
