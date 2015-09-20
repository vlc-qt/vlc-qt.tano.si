# VLC-Qt Web Page

This is main VLC-Qt web page repository.
Feel free to open a pull request if some content need updating.


## How to build

This web page is powered by [Jekyll](http://jekyllrb.com).
  1. Prepare the environment
  ```
  gem install bundler
  bundle install
  ```

  2. For development purposes, just serve Jekyll locally
  ```
  jekyll serve --watch
  ```

  3. Deployment can be made using `rake`
  ```
  bundle install --deployment
  bundle exec rake deploy
  ```
