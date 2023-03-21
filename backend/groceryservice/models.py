from django.db import models

class Section(models.Model):
    name = models.CharField(max_length=100)
    order = models.IntegerField()

    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=100)
    section = models.ForeignKey(Section,on_delete=models.CASCADE)
    need = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.ManyToManyField(Item)