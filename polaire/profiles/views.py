from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework import generics
from .models import Company, Person, Module
from .serializers import CompanySerializer, ModuleSerializer


class CompaniesViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class ModuleViewSetFiltered(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        company = self.kwargs['company']
        
        return Module.objects.filter(company=company)

class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    