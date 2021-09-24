from typing import Mapping
from django.db import models
from django.db.models.fields import CharField
from django.db.models.query_utils import PathInfo

class Address(models.Model):
    street = models.CharField(max_length=30)
    house = models.IntegerField()
    postal = models.IntegerField()
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=30, blank=True, null=True)
    country = models.CharField(max_length=30)

    def __str__(self):
        return self.street+" "+str(self.house)+", "+str(self.postal)+" "+self.city+", "+self.country
class Company(models.Model):
    COMPANY_TYPE = [
        ('EPU', 'Ein Personen Unternehmen'),
        ('KMU', 'Klein und Mittel Unternehmen'),
        ('SU', 'StartUp'),
    ]
    company_type = models.CharField(max_length=3, choices=COMPANY_TYPE, default='EPU')

    logo = models.CharField(max_length=128)
    name = models.CharField(max_length=30)
    phone = models.CharField(max_length=30)
    mail = models.CharField(max_length=30)

    BUSINESS = [
        ('Fotograf', 'Fotograf'),
        ('Visagist', 'Visagist'),
        ('Drohnenpilot', 'Drohnenpilot'),
        ('DJs', 'DJs'),
        ('Model', 'Model'),
        ('Catering', 'Catering'),
        ('Sonstige', 'Sonstige'),
    ]
    business = models.CharField(max_length=30, choices=BUSINESS, default='Sonstige')
    
    validated = models.BooleanField(default=False)
    link_social_media = models.CharField(max_length=400, blank=True, null=True)

    address = models.OneToOneField(
        Address,
        on_delete=models.CASCADE,
        verbose_name="address",
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.name

class Person(models.Model):
    
    TITLE_FIRST = [
        ('none', ''),
        ('Mag.', 'Magister'),
        ('Dr.', 'Doctor'),
        ('Ing.', 'Ingineur'),
        ('Dipl. Ing.', 'Diplomingineur'),
        ('Prof.', 'Professor'),
        ('Sonstiges', 'Very Important'),
    ]
    title_first = models.CharField(max_length=10, choices=TITLE_FIRST, default='none')
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    TITLE_LAST = [
      ('none', ''),
        ('BA', 'Bachelor of Arts, Bachelor of Education'),
        ('BEng', 'Bachelor of Engineering'),
        ('BSc', 'Bachelor of Science'),
        ('MBA', 'Master of Business Administration'),
        ('MSc', 'Master of Science'),
        ('LLB', 'Ingineur'),
        ('BSC', 'Diplomingineur'),
        ('LLM', 'Professor'),
        ('Sonstiges', 'Very Important'),
    ]

    title_last = models.CharField(max_length=10, choices=TITLE_LAST, default='none')
    
    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        verbose_name="Company",
    )

    SEX = [
        ('m', 'Male'),
        ('f', 'Female'),
        ('n', 'Not Spezified'),
    ]
    sex = models.CharField(max_length=10, choices=SEX, default='n')
    
    picture = models.CharField(max_length=128)

    phone = models.CharField(max_length=30)
    mail = models.CharField(max_length=40)

    def __str__(self):
        return self.first_name+" "+self.last_name



class Module(models.Model):
    content = models.CharField(max_length=1000)
    TYPE = [
        ('text', 'text'),
        ('gallery', 'gallery'),
        ('picture', 'picture'),
        ('sozial', 'sozial'),
        ('collage', 'collage'),
    ]
    type = models.CharField(max_length=10, choices=TYPE, default='o')
    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        verbose_name="Company",
    )
