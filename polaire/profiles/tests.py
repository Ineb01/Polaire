from django.test import TestCase

# Create your tests here.


from profiles.models import Company, CompanySerializer, Address, Person
company = Company.objects.create(name="Testtest")
Address.objects.create(company=company, street="Applestreet", house=12)
Person.objects.create(company=company, first_name="Tim")
serializer = CompanySerializer(instance=company) 
serializer.data
