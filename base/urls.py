from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),
    path('users/', views.getUsers, name='users'),
    path('users/profile/', views.getUserProfile, name='user-profile'),


    path('rooms/create/', views.createRoom, name='create-room'),
    path('rooms/', views.getRooms, name='get-rooms'),
    path('rooms/<str:pk>/', views.getRoom, name='get-room'),
]