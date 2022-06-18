#!make
UNAME := $(shell uname)
TESTVAR := gold
build:
	@echo ${TESTVAR}
	@echo $$env $$lol;
run:
	@echo ${UNAME}
