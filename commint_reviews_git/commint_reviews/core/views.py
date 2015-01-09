from django.core.cache import cache

from annoying.decorators import render_to
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers


@render_to('index.html')
def home(request):
    return {}


class UserSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)


class UserGetCacheView(APIView):
    serializer_class = UserSerializer

    def get(self, request):
        data = cache.get('usersName')
        if data is None:
            return Response({'status': 'error',
                            'error': 'User name has no set'},
                            status=status.HTTP_403_FORBIDDEN)
        serializer = self.serializer_class({'name': data})
        return Response({'status': 'ok',
                         'name': serializer.data['name']},
                        status=status.HTTP_200_OK)


class UserSetCacheView(APIView):
    def get(self, request, user_name):
        cache.set('usersName', user_name, 86400)
        return Response({'status': 'ok'},
                        status=status.HTTP_200_OK)
