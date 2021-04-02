# Generated by Django 3.1.7 on 2021-04-02 11:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('phone', models.CharField(max_length=30)),
                ('mail', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('phone', models.CharField(max_length=30)),
                ('mail', models.CharField(max_length=30)),
                ('adress', models.CharField(max_length=30)),
                ('country', models.CharField(max_length=30)),
                ('validated', models.BooleanField(default=False)),
                ('link_social_media', models.CharField(max_length=400)),
                ('reference', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='profiles.person', verbose_name='first person of contact')),
            ],
        ),
    ]
