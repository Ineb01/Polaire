# Generated by Django 3.2.3 on 2021-09-02 15:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0008_module'),
    ]

    operations = [
        migrations.AlterField(
            model_name='module',
            name='company',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='profiles.company', verbose_name='Company'),
        ),
    ]
