#!/bin/sh

if [ -z "$1" ]; then
  docker-compose -f docker-compose.yml up -d
else
  if [ "$1" = "start" ]; then
    if [ -z "$2" ]; then
      docker-compose -f docker-compose.yml up -d
    else
      if [ -z "$3" ]; then
        docker-compose -f docker-compose.yml -f .docker/docker-compose-${2}.yml up -d
      else
        docker-compose -f docker-compose.yml -f .docker/docker-compose-${2}.yml up -d --${3}
      fi
    fi
  else
    docker-compose -f docker-compose.yml $1
  fi
fi
