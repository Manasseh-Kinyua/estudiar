from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),
    path('users/', views.getUsers, name='users'),
    path('users/profile/', views.getUserProfile, name='user-profile'),
    path('users/profile/update/', views.updateUserProfile, name='user-profile-update'),
    path('users/delete/<str:pk>/', views.deleteUser, name='user-delete'),
    path('users/update/<str:pk>/', views.updateUser, name='user-update'),
    path('users/details/<str:pk>/', views.getUserDetails, name='user-details'),


    path('rooms/create/', views.createRoom, name='create-room'),
    path('rooms/edit/<str:pk>/', views.editRoom, name='edit-room'),
    path('rooms/', views.getRooms, name='get-rooms'),
    path('rooms/<str:pk>/', views.getRoom, name='get-room'),
    path('rooms/delete/<str:pk>/', views.deleteRoom, name='delete-room'),

    path('messages/', views.getMessages, name='get-messages'),
    path('messages/create/<str:pk>/', views.createMessage, name='create-messages'),
    path('messages/delete/<str:pk>/', views.deleteMessage, name='delete-messages'),


    path('topics/', views.getTopics, name='get-topics'),

    path('reviews/create/<str:pk>/', views.createRoomReview, name='create-review'),
]