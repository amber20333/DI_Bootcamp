from django.shortcuts import render
from .models import Listing
# Create your views here.

def index(request):
    listing = Listing.objects.all()
    context = {
        'listings': listing
}
    return render(request , 'listings/listings.html',context)

def listing(request):
   
   return render(request , 'listings/listing.html' )



def search(request):
    return render(request , 'listings/search.html')