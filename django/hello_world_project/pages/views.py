from django.shortcuts import render, HttpResponse

# Create your views here.

def homePageView(request):
    return HttpResponse("Hello, kese ho.. my first project")