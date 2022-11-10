from rest_framework import serializers
from .models import Topic, Room, Message, Review
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin']

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

    def get_isAdmin(self, obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    # room = serializers.SerializerMethodField(read_only=True)
    # related_room = RoomSerializer(many=False, read_only=True)

    class Meta:
        model = Message
        fields = '__all__'

    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data

    # def get_room(self, obj):
    #     room = obj.room
    #     serializer = RoomSerializer(room, many=False)
    #     return serializer.data

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    messages = serializers.SerializerMethodField(read_only=True)
    reviews = serializers.SerializerMethodField(read_only=True)
    host = serializers.SerializerMethodField(read_only=True)
    topic = serializers.SerializerMethodField(read_only=True)
    participants = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Room
        fields = '__all__'

    def get_messages(self, obj):
        messages = obj.message_set.all()
        serializer = MessageSerializer(messages, many=True)
        return serializer.data

    def get_reviews(self, obj):
        reviews = obj.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data

    def get_host(self, obj):
        host = obj.host
        serializer = UserSerializer(host, many=False)
        return serializer.data

    def get_topic(self, obj):
        topic = obj.topic
        serializer = TopicSerializer(topic, many=False)
        return serializer.data

    def get_participants(self, obj):
        participants = obj.participants
        serializer = UserSerializer(participants, many=True)
        return serializer.data