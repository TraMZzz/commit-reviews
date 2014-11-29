# Hack for barista
# put from production import * to settings_local.py on production
try:
    from .settings_local import *
except ImportError:
    print "*** settings_local not found ***"
