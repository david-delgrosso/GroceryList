from rest_framework import generics, status
from rest_framework.mixins import CreateModelMixin, ListModelMixin
from rest_framework.response import Response
from rest_framework.request import Request

from .models import Section, Item
from .serializers import SectionSerializer, ItemSerializer


class SectionCRUDView(
    CreateModelMixin, ListModelMixin, generics.RetrieveUpdateDestroyAPIView
):
    serializer_class = SectionSerializer
    lookup_field = "id"
    queryset = Section.objects.all()

    def get(self, request, *args, **kwargs):
        return (
            self.retrieve(request, *args, **kwargs)
            if "id" in kwargs
            else self.list(request, *args, **kwargs)
        )

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ItemCRUDView(
    CreateModelMixin, ListModelMixin, generics.RetrieveUpdateDestroyAPIView
):
    serializer_class = ItemSerializer
    lookup_field = "id"
    queryset = Item.objects.all()

    def get(self, request, *args, **kwargs):
        return (
            self.retrieve(request, *args, **kwargs)
            if "id" in kwargs
            else self.list(request, *args, **kwargs)
        )

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ItemsListView(generics.ListAPIView):
    serializer_class = ItemSerializer

    def get_queryset(self):
        section_id = self.request.query_params.get("id")
        queryset = Item.objects.filter(section=section_id)
        return queryset
