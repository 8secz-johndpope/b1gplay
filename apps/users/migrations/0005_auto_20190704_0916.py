# Generated by Django 2.1.10 on 2019-07-04 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_profile_account_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='user',
        ),
        migrations.AddField(
            model_name='profile',
            name='affiliation',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='profile',
            name='height',
            field=models.DecimalField(decimal_places=2, max_digits=3, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='media_house',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='profile',
            name='position',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='profile',
            name='time_to_run_40m',
            field=models.DecimalField(decimal_places=2, max_digits=4, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='vertical_leap',
            field=models.DecimalField(decimal_places=2, max_digits=3, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='wingspan',
            field=models.DecimalField(decimal_places=2, max_digits=3, null=True),
        ),
        migrations.DeleteModel(
            name='Account',
        ),
    ]
