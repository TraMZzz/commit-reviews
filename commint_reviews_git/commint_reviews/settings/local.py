"""Development settings and globals."""
from os.path import join, normpath
from .base import *


DEBUG = True
TEMPLATE_DEBUG = DEBUG
ALLOWED_HOSTS = [
    '127.0.0.1',
    '.localhost',
]
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
NOREPLY_EMAIL = 'noreply@contracts.local'
SITE_BASE_URL = 'http://127.0.0.1:8081/'
