# Generated by Django 3.2.7 on 2021-09-21 17:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0012_auto_20210921_1642'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='address',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='profiles.address', unique=True, verbose_name='address'),
        ),
        migrations.AlterField(
            model_name='module',
            name='company',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='profiles.company', verbose_name='Company'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='person',
            name='company',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='profiles.company', verbose_name='Company'),
            preserve_default=False,
        ),
    ]