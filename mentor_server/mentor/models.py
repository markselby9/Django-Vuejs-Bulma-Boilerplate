# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Mentor(models.Model):
  created = models.DateTimeField(auto_now_add=True)
  name = models.CharField(max_length=20, blank=True, default='')
  email = models.CharField(max_length=40, blank=True, default='')
  role = models.CharField(max_length=20, blank=True, default='')
  photo_url = models.CharField(max_length=20, blank=True, default='')
  self_intro = models.TextField()
  area1 = models.TextField()
  area2 = models.TextField()
  area3 = models.TextField()
  expectations = models.TextField()

  class Meta:
    ordering = ('created',)


class Profile(models.Model):
  user = models.OneToOneField(User)
  selected_mentor = models.ForeignKey('Mentor', on_delete=models.CASCADE, )

