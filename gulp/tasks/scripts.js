'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    source = require('vinyl-source-stream');

var task = function(name) {
  return require(name)({debug: true})
    .add('./app/scripts/main.jsx')
    .transform(require('reactify'))
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('.tmp/scripts/'));
};

// Browserify
gulp.task('browserify', function() {
  return task('browserify');
});

gulp.task('watchify', function() {
  return task('watchify');
});

gulp.task('scripts', ['browserify']);
