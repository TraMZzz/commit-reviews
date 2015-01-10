#
# constants
#


SHELL=/bin/bash

PROJECT_NAME=commint_reviews
BIND_TO=0.0.0.0
RUNSERVER_PORT=8000
MAILSERVER_PORT=1025
SETTINGS=commint_reviews_git.commint_reviews.settings
PYTHONPATH=$(CURDIR)
MANAGE= PYTHONPATH=$(PYTHONPATH) DJANGO_SETTINGS_MODULE=$(SETTINGS) django-admin.py
TEST_OPTIONS=--settings=commint_reviews_git.commint_reviews.settings.test
TEST=$(MANAGE) test $(TEST_OPTIONS)

APPS_FOR_TEST=core

-include Makefile.def

#
# end of constants

# targets

run:
	@echo Starting $(PROJECT_NAME)...
	$(MANAGE) runserver $(BIND_TO):$(RUNSERVER_PORT)

mailserver:
	python -m smtpd -n -c DebuggingServer $(BIND_TO):$(MAILSERVER_PORT)

syncdb:
	@echo Syncing...
	$(MANAGE) syncdb --noinput
	$(MANAGE) migrate
	$(MANAGE) loaddata $(PROJECT_NAME).json
	@echo Done

initproject: syncdb
	$(MANAGE) migrate

shell:
	@echo Starting shell...
	$(MANAGE) shell

testcoverage:
	mkdir -p tests/coverage/modules
	TESTING=1 $(MANAGE) test_coverage $(TEST_OPTIONS) $(TEST_APP)

test:
	$(TEST) $(APPS_FOR_TEST)

collectstatic:
	@echo Collecting static
	$(MANAGE) collectstatic --noinput
	@echo Done

clean:
	@echo Cleaning up...
	find ./$(PROJECT_NAME) | grep '\.pyc$$' | xargs -I {} rm {}
	@echo Done

manage:
ifndef CMD
	@echo Please, spceify -e CMD=command argument to execute
else
	$(MANAGE) $(CMD)
endif

only_migrate:
ifndef APP_NAME
	@echo Please, specify -e APP_NAME=appname argument
else
	@echo Starting of migration of $(APP_NAME)
	$(MANAGE) migrate $(APP_NAME)
	@echo Done
endif

migrate:
ifndef APP_NAME
	@echo "You can also specify -e APP_NAME='app' to check if new migrations needed for some app"
	$(MANAGE) migrate
else
	@echo Starting of migration of $(APP_NAME)
	$(MANAGE) schemamigration $(APP_NAME) --auto
	$(MANAGE) migrate $(APP_NAME)
	@echo Done
endif

init_migrate:
ifndef APP_NAME
	@echo Please, specify -e APP_NAME=appname argument
else
	@echo Starting init migration of $(APP_NAME)
	$(MANAGE) schemamigration $(APP_NAME) --initial
	$(MANAGE) migrate $(APP_NAME)
	@echo Done
endif

sass:
	sass --watch commint_reviews_git/static/css --sourcemap=none

#
# end targets
