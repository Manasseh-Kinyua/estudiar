from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Room
from .serializers import RoomSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/rooms',
        'api/rooms/:id',
    ]
    return Response(routes)

@api_view(['GET'])
def getRooms(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getRoom(request, pk):
    room = Room.objects.get(id=pk)
    serializer = RoomSerializer(room, many=False)
    return Response(serializer.data)