# Generated by Django 4.1.3 on 2022-11-30 10:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_rename_person_author_picture'),
    ]

    operations = [
        migrations.RenameField(
            model_name='picture',
            old_name='person',
            new_name='author',
        ),
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to='polls.author'),
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('posts', models.ManyToManyField(related_name='categories', to='polls.post')),
            ],
        ),
    ]