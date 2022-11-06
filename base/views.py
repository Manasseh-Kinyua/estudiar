from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def getRoutes(request):
    routes = [
        'api/rooms',
        'api/rooms/:id',
    ]
    return JsonResponse(routes, safe=False)

def getRooms(request):
    rooms = [
        'room1',
        'room2',
        'room3',
    ]
    return JsonResponse(rooms, safe=False)