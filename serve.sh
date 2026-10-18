#!/usr/bin/env bash
# Local preview at http://127.0.0.1:4000 with live reload. Needs Homebrew Ruby (system Ruby 2.6 is too old for Jekyll 4).
set -euo pipefail
cd "$(dirname "$0")"
export PATH="/opt/homebrew/opt/ruby/bin:$(/opt/homebrew/opt/ruby/bin/gem environment gemdir)/bin:$PATH"
bundle config set --local path vendor/bundle >/dev/null
bundle install --quiet
exec bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
