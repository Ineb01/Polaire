from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Company, Person, Module
from .models.serializers import CompanySerializer, ModuleSerializer


class CompaniesViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer