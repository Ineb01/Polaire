from django.shortcuts import render
from django.http import HttpResponse
from profiles.models import Company, Person
from django.template import loader

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def profile(request, company_id):
    company = Company.objects.get(pk=company_id)
    workers = Person.objects.filter(works_at = company_id)
    if(workers):
        worker = workers[0]
    else:
        worker = None
    template = loader.get_template('index.html')

    context = {
        'company': company,
        'worker': worker,
    }
    return HttpResponse(template.render(context, request))