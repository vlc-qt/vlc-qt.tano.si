# VLC-Qt Web Page
[![Homepage][web-img]][web]
[![License][license-img]][license]

This is main VLC-Qt web page repository.
Feel free to open a pull request if some content needs updating.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Bower](http://bower.io/)
* [Jekyll](http://jekyllrb.com/)


## Installation

* `git clone https://github.com/vlc-qt/vlc-qt.tano.si.git`
* change into the new directory
* `bower install`
* `bundle install`


## Running / Development

* `jekyll serve --watch`
* visit the page at [http://localhost:4000](http://localhost:4000).

### Deploying

* checkout latest tag/stable code on server
* `bundle install --deployment`
* `bundle exec rake deploy`


[web]: https://vlc-qt.tano.si
[license]: https://github.com/vlc-qt/vlc-qt.tano.si/blob/master/LICENSE.md

[web-img]: https://img.shields.io/badge/web-vlc--qt.tano.si-green.svg
[license-img]: https://img.shields.io/github/license/vlc-qt/vlc-qt.tano.si.svg
