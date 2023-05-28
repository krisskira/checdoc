from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken import views as rf_views

from .views import ProfileView, VideoView

urlpatterns_api_v1 = routers.DefaultRouter()
urlpatterns_api_v1.register('video', VideoView, 'video')

urlpatterns = [
    path('token/', rf_views.obtain_auth_token),
    path('profile/', ProfileView.as_view()),
    path('', include(urlpatterns_api_v1.urls))
]
