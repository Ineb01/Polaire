from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, status
from .models import Company , CompanySerializer, Person


class CompaniesViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
        


# Create your views here.
def index(request):
    template = loader.get_template('profiles.html')
    context = {
        'companies': Company.objects.all(),
    }
    return HttpResponse(template.render(context, request))

def profile(request, company_id):
    company = Company.objects.get(pk=company_id)
    workers = Person.objects.filter(works_at = company_id)
    if(workers):
        worker = workers[0]
    else:
        worker = None
    template = loader.get_template('profile.html')

    context = {
        'company': company,
        'worker': worker,
    }
    return HttpResponse(template.render(context, request))