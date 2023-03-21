from rest_framework import serializers

from .models import Section, Item, Recipe

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ("id", "name", "order")

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ("id", "name", "section", "need")

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ("id", "name", "ingredients")