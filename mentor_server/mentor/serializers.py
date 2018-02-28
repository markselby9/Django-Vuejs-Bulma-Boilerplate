from django.contrib.auth.models import User, Group
from models import Mentor
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = User
    fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Group
    fields = ('url', 'name')


class MentorSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Mentor
    fields = ('id', 'name', 'email', 'role', 'photo_url', 'self_intro', 'area1', 'area2', 'area3', 'expectations')
