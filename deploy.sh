#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build:modern

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'vanderen.me' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:jvanderen1/jvanderen1.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jvanderen1/personal-website.git master:gh-pages

cd -