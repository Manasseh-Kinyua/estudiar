from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name='get-routes'),
    path('rooms/', views.getRooms, name='get-rooms'),
    path('rooms/<str:pk>/', views.getRoom, name='get-room'),
]