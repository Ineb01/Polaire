# Generated by Django 3.2.7 on 2021-09-24 19:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0013_auto_20210921_1723'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='address',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='profiles.address', verbose_name='address'),
        ),
    ]
