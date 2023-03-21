from django.urls import path, include
from rest_framework import routers
from .views import SectionCRUDView, ItemCRUDView, ItemsListView, RecipeCRUDView

urlpatterns = [
    path("section/", view=SectionCRUDView.as_view(), name="sectionList"),
    path("section/<int:id>", view=SectionCRUDView.as_view(), name="sectionDetail"),
    path("item/", view=ItemCRUDView.as_view(), name="itemList"),
    path("item/<int:id>", view=ItemCRUDView.as_view(), name="itemDetail"),
    path("items/", ItemsListView.as_view(), name="itemFiltered"),
    path("recipe/", view=RecipeCRUDView.as_view(), name="recipeList"),
    path("recipe/<int:id>", view=RecipeCRUDView.as_view(), name="recipeDetail"),
]