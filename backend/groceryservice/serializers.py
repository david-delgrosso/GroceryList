from rest_framework import serializers

from .models import Section, Item

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ("name", "order")

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ("name", "section")
