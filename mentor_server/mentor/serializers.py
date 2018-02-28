from django.contrib.auth.models import User, Group
from models import *
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = User
    fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.ModelSerializer):
  class Meta:
    model = Group
    fields = ('url', 'name')


class MentorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Mentor
    fields = ('id', 'name', 'email', 'role', 'photo_url', 'self_intro', 'area1', 'area2', 'area3', 'expectations')


class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = Profile
    fields = ('id', 'user', 'selected_mentor')

  def create(self, validated_data):
    """
    Overriding the default create method of the Model serializer.
    """
    user_data = validated_data.pop('user')
    # user = UserSerializer.create(UserSerializer(), validated_data=user_data)
    profile, created = Profile.objects.update_or_create(user=user_data,
                                                        selected_mentor=validated_data.pop('selected_mentor'))
    return profile
