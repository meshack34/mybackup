# Generated by Django 4.0.4 on 2022-05-25 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EmployeeApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recruiters',
            fields=[
                ('RecruiterId', models.AutoField(primary_key=True, serialize=False)),
                ('CompanyName', models.CharField(max_length=500)),
                ('PhoneNumber', models.CharField(max_length=250)),
                ('Email', models.EmailField(max_length=254)),
                ('County', models.CharField(max_length=500)),
                ('JobTitle', models.CharField(max_length=500)),
                ('Requirements', models.CharField(max_length=500)),
                ('NumberofDevelopers', models.CharField(max_length=250)),
                ('DateOfApplication', models.DateField()),
                ('FileName', models.CharField(max_length=500)),
            ],
        ),
    ]