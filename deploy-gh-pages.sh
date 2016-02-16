#!/bin/bash

cd dist
git init
git config user.name "SimonBaumannPro"
git config user.email "simon.baumann@orange.com"
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" master:gh-pages