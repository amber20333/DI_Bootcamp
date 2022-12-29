from django.shortcuts import render
from datetime import date
from django.urls import reverse
from .models import Post, Author
from .forms import CommentForm , CustomerUserCreationForm
from django.views.generic import ListView , DetailView , CreateView


class SignUpView(CreateView):
  
  template_name = 'registration/signup.html'
  form_class = CustomerUserCreationForm
#   success_url= 'login'


  def get_success_url(self):
    return reverse('login')

  



class HomepageView(ListView):
    
   model= Post
   template_name = 'homepage.html'
   context_object_name = 'posts'
   ordering= ['-date_created']

   def get_context_data(self, **kwargs) :
      context = super().get_context_data(**kwargs)
      context['time'] = date.today()
      return context 

   






# def homepage(request):

#     # render
#     # - request object
#     # - template_name -> html name ('homepage.html')
#     # - context -> dictionary of data

#     all_posts = Post.objects.all().order_by('-date_created') # All of the posts

#     context = {'time': date.today(), 'posts': all_posts}
#     return render(request, 'homepage.html', context)



   
class AuthorsView(ListView):
    
   model= Author
   template_name = 'authors.html'
   context_object_name = 'authors'
    


# def authors(request):
    
#     all_authors = Author.objects.all()
#     context = {'authors': all_authors}

#     return render(request, 'authors.html', context)


   
 

class AuthorsPostView(DetailView):
    
   model= Author
   template_name ='author_posts.html'
   context_object_name = 'author'
   
   def get_context_data(self, **kwargs ):
    context =  super().get_context_data(**kwargs)
    author = self.get_object()
    context['posts'] = author.posts.all()
    return context 




# Gets all posts of a specific author
# def author_posts(request, id):

#     author = Author.objects.get(id=id)
#     author_posts = author.posts.all()
    
#     context = {'author': author, 'posts': author_posts}

#     return render(request, 'author_posts.html', context)



class  PostDetailsView(DetailView):
    
   model= Post
   template_name ='post.html'
   context_object_name = 'post'
   
   def get_context_data(self, **kwargs ):
    context =  super().get_context_data(**kwargs)
    CommentForm = self.get_object()
    context['posts'] = CommentForm()
    return context 

   

def post_details(request, id):

    post = Post.objects.get(id=id)
    comments = post.comment_set.all()

    comment_form = CommentForm() # Empty form

    if request.method == 'POST':
    #II POST MODE
     filled_comment_form = CommentForm(request.POST)#filled form
     filled_comment_form.save()

    context = {'post': post, 'comments': comments, 'form': comment_form}

    return render(request, 'post.html', context)








# def post_details(request,id):
# # I GET MODE
#  post = Post.objects.get(id=id)
#  comment_form = CommentForm() #empty form

#  if request.method == 'POST':
#     #II POST MODE
#     filled_comment_form = CommentForm(request.POST)#filled form
#     filled_comment_form.save()

#     context = {'post':post , 'form': filled_comment_form }
#     return render (request , 'post.html', context )
 
# #  print(request.GET)
# #  print(request.POST)


#  context = {'post':post , 'form': comment_form}
#  return render (request , 'post.html', context )