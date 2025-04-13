#!/bin/sh

command_arg=$1
shift

case $command_arg in
  copy) cp -R _site/. $1 ;;
  serve) bundle exec jekyll serve --host 0.0.0.0 --drafts ;;
  *) echo "Unsupported command $command_arg"
esac
