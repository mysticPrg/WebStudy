#!/bin/sh
docker build --tag mysticprg/web_study .
docker run -d -p 8080:8080 --name web_study -v $(pwd):/home/WebStudy mysticprg/web_study
docker rmi $(docker images -f "dangling=true" -q)