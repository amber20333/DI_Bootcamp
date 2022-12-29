from django.shortcuts import render , redirect 
from .forms import  AddFilmForm , AddDirectorForm
from .models import Country,  Category , Director , Film
from django.views.generic import ListView , DetailView , CreateView
from django.urls import reverse_lazy


# Create your views here.

# class FilmListView(ListView):
#     model = Film     
#     template_name = 'homepage.html'
#     context_object_name = 'films' 


def FilmList(request):
    
    all_Film= Film.objects.all()
    context = {'films': all_Film}

    return render(request, 'homepage.html', context)   
    


# class AddFilm(CreateView):
#     model = Film
#     form_class = AddFilmForm
#     template_name = 'addFilm.html'

    # ou :
    # form_class = AddFilmForm
    # template_name = 'add_film.html'
    # success_url = reverse_lazy('add_director')


def add_Film(request):

    film_form = AddFilmForm()
    context = {'form':film_form}
    
    if request.method == 'POST':
        filled_form = AddFilmForm(request.POST)
        if filled_form.is_valid():
            filled_form.save() 
            return redirect('./homepage')
        else:
            context['errors'] = filled_form.errors
   
    return render(request, 'film/addFilm.html', context)

    


# class AddDirector(CreateView):
#     model = Director
#     form_class = AddDirectorForm
#     template_name = 'addDirector.html'
     

    
    

def add_Director(request):

    director_form = AddDirectorForm()
    context = {'form':director_form}
    
    if request.method == 'POST':
        filled_form = AddDirectorForm(request.POST)
        if filled_form.is_valid():
            filled_form.save()
        else:
            context['errors'] = filled_form.errors
    
    return render(request, 'director/addDirector.html ', context)

    

 