# Generated by Django 3.2.8 on 2021-10-11 07:59

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0018_auto_20211010_1533'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='postal',
            field=models.IntegerField(validators=[django.core.validators.MinValueValidator(1000)]),
        ),
        migrations.AlterField(
            model_name='company',
            name='link_social_media',
            field=models.CharField(blank=True, max_length=400, null=True, validators=[django.core.validators.URLValidator()]),
        ),
        migrations.AlterField(
            model_name='company',
            name='mail',
            field=models.CharField(max_length=30, validators=[django.core.validators.EmailValidator()]),
        ),
        migrations.AlterField(
            model_name='company',
            name='phone',
            field=models.CharField(max_length=30, validators=[django.core.validators.RegexValidator(regex='^[+]?\\d*$')]),
        ),
    ]
