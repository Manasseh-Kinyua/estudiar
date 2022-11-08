from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name='get-routes'),
    path('users/profile/', views.getUserProfile, name='user-profile'),
    path('rooms/', views.getRooms, name='get-rooms'),
    path('rooms/<str:pk>/', views.getRoom, name='get-room'),
]