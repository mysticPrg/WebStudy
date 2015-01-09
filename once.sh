#!/bin/sh
docker run -i -t --rm -p 8123:8080 -v $(pwd):/home/suWebStudy mysticprg/web_study /bin/bash