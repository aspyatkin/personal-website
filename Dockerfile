FROM ruby:2.6.9-alpine

WORKDIR /app
COPY entrypoint.sh Gemfile Gemfile.lock 404.html _config.yml favicon.ico robots.txt index.md impressum.md about.md .
COPY .gpg ./.gpg
COPY .ssh ./.ssh
COPY _data ./_data
COPY _drafts ./drafts
COPY _includes ./_includes
COPY _posts ./_posts
COPY _sass ./_sass
COPY assets ./assets

ENV JEKYLL_ENV="production"

RUN apk add --no-cache --virtual .deps g++ gcc make musl-dev && \
	gem install bundler -v 2.0.2 && \
	bundle install && \
	bundle exec jekyll build && \
	apk del .deps

RUN addgroup johndoe && adduser --disabled-password --gecos "" --ingroup johndoe --no-create-home johndoe && chown -R johndoe:johndoe .
USER johndoe
ENTRYPOINT ["/bin/sh", "entrypoint.sh"]
