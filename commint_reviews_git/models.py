# Django:
from django.contrib.auth.models import AbstractUser
from django.db import models


class GitUser(AbstractUser):
    birth_date = models.DateField(blank=True, null=True)
