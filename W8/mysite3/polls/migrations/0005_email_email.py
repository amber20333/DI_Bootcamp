# Generated by Django 4.1.3 on 2022-11-30 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0004_email_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='email',
            name='email',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
