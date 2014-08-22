'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Fonts
gulp.task('fonts', function() {
  return gulp.src('app/**/*.{eot,svg,ttf,woff}')
    .pipe($.flatten())
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe($.size());
});
