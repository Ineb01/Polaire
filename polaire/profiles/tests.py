from django.test import TestCase

# Create your tests here.


from profiles.models import Company, CompanySerializer, Adress, Person
company = Company.objects.create(name="Testtest")
Adress.objects.create(company=company, street="Applestreet", house=12)
Person.objects.create(company=company, first_name="Tim")
serializer = CompanySerializer(instance=company) 
serializer.data
