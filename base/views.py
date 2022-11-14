from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Room, Topic, Message, Review
from .serializers import RoomSerializer, UserSerializer, UserSerializerWithToken, TopicSerializer, MessageSerializer
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.db.models import Q

# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data

    try:
        user = User.objects.create(
            first_name = data['name'],
            username = data['email'],
            email = data['email'],
            password = make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User With This Email Already Exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    data = request.data
    serializer = UserSerializerWithToken(user, many=False)

    user.first_name=data['name']
    user.username=data['email']
    user.email=data['email']
    if data['password'] != '':
        user.password=make_password(data['password'])

    user.save()

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    user = User.objects.get(id=pk)
    user.delete()
    return Response('User has been deleted')

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserDetails(request,pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def updateUser(request, pk):
    user = User.objects.get(id=pk)
    data = request.data

    user.first_name=data['name']
    user.username=data['email']
    user.email=data['email']
    user.is_staff=data['isAdmin']

    serializer = UserSerializer(user, many=False)
    
    user.save()
    return Response(serializer.data)

@api_view(['GET'])
def getRooms(request):
    query = request.query_params.get('keyword')
    print('KEYWORD......',query)
    if query == None:
        query = ''
    rooms = Room.objects.filter(
        Q(name__icontains=query) |
        Q(topic__name__icontains=query) |
        Q(host__username__icontains=query)
        )
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getRoom(request, pk):
    room = Room.objects.get(id=pk)
    serializer = RoomSerializer(room, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteRoom(request, pk):
    room = Room.objects.get(id=pk)
    room.delete()
    return Response('Room has been deleted')

@api_view(['GET'])
def getTopics(request):
    topic = Topic.objects.all()
    serializer = TopicSerializer(topic, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getMessages(request):
    messages = Message.objects.all()[0:5]
    serializer = MessageSerializer(messages, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteMessage(request, pk):
    message = Message.objects.get(id=pk)
    message.delete()
    return Response('Message has been deleted')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createRoom(request):
    host = request.user
    data = request.data

    # create topic
    topic = Topic.objects.create(
        name=data['topic']
    )
    # create room
    room = Room.objects.create(
        host=host,
        topic=topic,
        name=data['name'],
        description=data['description']
    )
    

    serializer = RoomSerializer(room, many=False)

    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def editRoom(request, pk):
    room = Room.objects.get(id=pk)
    data = request.data

    room.name = data['name']
    room.description = data['description']

    room.save()

    serializer = RoomSerializer(room, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createMessage(request, pk):
    user = request.user
    data = request.data
    room = Room.objects.get(id=pk)

    message = Message.objects.create(
        user=user,
        room=room,
        body=data['post']
    )
    room.participants.add(user)

    serializer = MessageSerializer(message, many=False)

    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createRoomReview(request, pk):
    user = request.user
    data = request.data
    room = Room.objects.get(id=pk)

    alreadyExists = room.review_set.filter(user=user).exists()

    # check if review exists
    if alreadyExists:
        content = {'detail': 'Review already exists'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # if review has no rating
    elif data['rating'] == 0:
        content = {'detail': 'Please selecta rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # create Review
    else:
        review = Review.objects.create(
            user=user,
            room=room,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
        
        # set numReviews
        reviews = room.review_set.all()
        room.numReviews = len(reviews)

        # set rating
        total = 0
        for i in reviews:
            total += i.rating
            room.rating = total / len(reviews)

            room.save()

            return Response('Review Created')