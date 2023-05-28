from django.contrib import admin
from django.contrib import admin

from rest_framework.authtoken.admin import TokenAdmin

from .models import VideoModel
from .forms import VideoForm

# Register your models here.

TokenAdmin.raw_id_fields = ['user']

@admin.register(VideoModel)
class VideoAdmin(admin.ModelAdmin):
    form = VideoForm
