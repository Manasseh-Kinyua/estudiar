from django.contrib import admin
from .models import Topic, Room, Message, Review

# Register your models here.

admin.site.register(Topic)
admin.site.register(Room)
admin.site.register(Message)
admin.site.register(Review)