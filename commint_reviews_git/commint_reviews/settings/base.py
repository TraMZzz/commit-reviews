"""Common settings and globals."""
from os.path import abspath, basename, dirname, join, normpath
from sys import path

# Absolute filesystem path to the Django project directory:
DJANGO_ROOT = dirname(dirname(abspath(__file__)))

# Absolute filesystem path to the top-level project folder:
SITE_ROOT = dirname(DJANGO_ROOT)

SITE_NAME = basename(DJANGO_ROOT)

# Add our project to our pythonpath, this way we don't need to type our project
# name in our dotted import paths:
path.append(DJANGO_ROOT)

DEBUG = True
TEMPLATE_DEBUG = DEBUG

ADMINS = (
    # ('Your Name', 'your_email@example.com'),
)

MANAGERS = ADMINS


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': join(SITE_ROOT, 'db.sqlite3'),
    }
}


TIME_ZONE = 'America/Chicago'

LANGUAGE_CODE = 'en-us'

SITE_ID = 1

USE_I18N = True

USE_L10N = True

### Static and media ###

MEDIA_ROOT = normpath(join(SITE_ROOT, 'static_root', 'media'))
MEDIA_URL = '/media/'

STATIC_ROOT = normpath(join(SITE_ROOT, 'static_root', 'static'))
STATIC_URL = '/static/'

STATICFILES_DIRS = (
    normpath(join(SITE_ROOT, 'static')),
)

ADMIN_MEDIA_PREFIX = '/media/admin/'


# List of finder classes that know how to find static files in
# various locations.
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
)

# Make this unique, and don't share it with anybody.
SECRET_KEY = 'j0ee6taz(y5dqbfp3)dh*+7as@pbs_w25%arj4-ds#j5%zf!nj'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'social.apps.django_app.middleware.SocialAuthExceptionMiddleware',
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.debug',
    'django.core.context_processors.i18n',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'django.core.context_processors.request',
    'django.contrib.messages.context_processors.messages',
    'social.apps.django_app.context_processors.backends',
)

ROOT_URLCONF = 'commint_reviews_git.commint_reviews.urls'
WSGI_APPLICATION = 'commint_reviews_git.commint_reviews.wsgi.application'

TEMPLATE_DIRS = (
    normpath(join(SITE_ROOT, 'templates')),
)

AUTHENTICATION_BACKENDS = (
    'social.backends.github.GithubOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',
    'django.contrib.admindocs',
    'social.apps.django_app.default',
    'core',
    'tastypie',
)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}

AUTH_USER_MODEL = 'core.GitUser'

INTERNAL_IPS = ('127.0.0.1',)

SOCIAL_AUTH_GITHUB_KEY = 'fc607d0af41f7385d726'
SOCIAL_AUTH_GITHUB_SECRET = '9775875fe02b88b0da0583e899979638703b16ad'

SOCIAL_AUTH_USER_MODEL = AUTH_USER_MODEL
SOCIAL_AUTH_LOGIN_REDIRECT_URL = '/'
SOCIAL_AUTH_NEW_USER_REDIRECT_URL = '/'
SOCIAL_AUTH_CREATE_USERS = True
SOCIAL_AUTH_SLUGIFY_USERNAMES = True
SOCIAL_AUTH_RAISE_EXCEPTIONS = False
LOGIN_ERROR_URL = '/'
SOCIAL_AUTH_DEFAULT_USERNAME = 'JohnDoe'

SOCIAL_AUTH_PIPELINE = (
    'social.pipeline.social_auth.social_details',
    'social.pipeline.social_auth.social_uid',
    'social.pipeline.social_auth.auth_allowed',
    'social.pipeline.social_auth.social_user',
    'social.pipeline.user.get_username',
    'social.pipeline.user.create_user',
    'social.pipeline.social_auth.associate_user',
    'social.pipeline.social_auth.load_extra_data',
    'social.pipeline.user.user_details',
)

# Tastypie settings
API_LIMIT_PER_PAGE = 1000
TASTYPIE_ALLOW_MISSING_SLASH = True
TASTYPIE_DEFAULT_FORMATS = ['json', ]
TASTYPIE_ABSTRACT_APIKEY = False
