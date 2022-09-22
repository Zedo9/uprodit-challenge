#!/bin/bash

REPO_PATH="${PROJECT_HOME}/uprodit-vue/"

cd "${REPO_PATH}" && git pull origin main || :
git reset --hard origin/main
git push -f github main
exit 0
