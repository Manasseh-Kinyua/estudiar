from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='get-routes'),
    path('rooms/', views.getRooms, name='get-rooms'),
]