from django.conf.urls import patterns, url
from views import UserGetCacheView, UserSetCacheView

urlpatterns = patterns('',
    url(r'^get/name/', UserGetCacheView.as_view(), name='get_name'),
    url(r'^set/name/(?P<user_name>[a-zA-Z0-9]+)$', UserSetCacheView.as_view(), name='set_name'),
)
