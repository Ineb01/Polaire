from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Company, Person
from .models.serializers import CompanySerializer


class CompaniesViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer