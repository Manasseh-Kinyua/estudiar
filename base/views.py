from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

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
    rooms = [
        'room1',
        'room2',
        'room3',
    ]
    return Response(rooms)