from django.urls import path
from  films.views import  FilmList , add_Film , add_Director


urlpatterns = [
    path('homepage', FilmList, name='homepage'),
    path('add_film', add_Film , name='add_film'),
    path('add_director', add_Director , name='add_director')
     
]



# from  films.views import FilmListView , AddFilm , AddDirector


# urlpatterns = [
#     path('homepage', FilmListView.as_view(), name='homepage'),
#     path('add_film', AddFilm.as_view(), name='add_film'),
#     path('add_director', AddDirector.as_view(), name='add_director')