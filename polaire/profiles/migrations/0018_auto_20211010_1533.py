# Generated by Django 3.2.8 on 2021-10-10 15:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
        ('profiles', '0017_auto_20211010_1445'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='logo',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='images.image', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='person',
            name='picture',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='images.image', verbose_name='Image'),
        ),
    ]
