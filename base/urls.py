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

    path('messages/', views.getMessages, name='get-messages'),
    path('messages/create/<str:pk>/', views.createMessage, name='create-messages'),


    path('topics/', views.getTopics, name='get-topics'),
]