from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets

from django_filters.rest_framework import DjangoFilterBackend

from .serializers import VideoSerializer
from .models import VideoModel


# Create your views here.

class ProfileView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {
            'username': str(request.user.username),
            'email': str(request.user.email),
        }
        return Response(content)

class VideoView(viewsets.ModelViewSet):
    serializer_class = VideoSerializer
    queryset = VideoModel.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['programType']