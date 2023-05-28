from django.db import models
from .choices import PROGRAM_TYPE

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class VideoModel(models.Model):

    title = models.CharField(max_length=255)
    description = models.TextField()
    programType = models.CharField(max_length=100, choices=PROGRAM_TYPE)
    releaseYear = models.IntegerField()
    image_url   = models.ImageField(width_field='image_width', height_field='image_height')
    image_width = models.IntegerField(blank=True, null=True)
    image_height = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return '{}: {}'.format(self.title, self.releaseYear)
