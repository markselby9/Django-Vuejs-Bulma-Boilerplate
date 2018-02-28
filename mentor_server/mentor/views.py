from django.contrib.auth.models import User, Group
from rest_framework import viewsets, status
from rest_framework.decorators import detail_route
from rest_framework.response import Response

from mentor_server.mentor.serializers import *
from models import *


class UserViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows users to be viewed or edited.
  """
  queryset = User.objects.all().order_by('-date_joined')
  serializer_class = UserSerializer

  @detail_route(methods=['get'])
  def get_profile(self, request, pk=None):
    user = self.get_object()
    profile = Profile.objects.get(user=user)
    serializer = ProfileSerializer(profile)
    if profile:
      return Response(serializer.data)
    return Response(serializer.errors,
                    status=status.HTTP_400_BAD_REQUEST)


class GroupViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows groups to be viewed or edited.
  """
  queryset = Group.objects.all()
  serializer_class = GroupSerializer


class MentorViewSet(viewsets.ModelViewSet):
  queryset = Mentor.objects.all()
  serializer_class = MentorSerializer


class ProfileViewSet(viewsets.ModelViewSet):
  queryset = Profile.objects.all()
  serializer_class = ProfileSerializer
