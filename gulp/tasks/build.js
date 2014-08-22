'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

// Build
gulp.task('html', ['styles','scripts'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets = $.useref.assets({searchPath: '{.tmp,app}'});

  return gulp.src('app/*.html')
      .pipe(assets)
      .pipe(jsFilter)
      .pipe($.uglify())
      .pipe(jsFilter.restore())
      .pipe(cssFilter)
      .pipe($.csso())
      .pipe(cssFilter.restore())
      .pipe(assets.restore())
      .pipe($.useref())
      .pipe(gulp.dest('dist'))
      .pipe($.size());
});

gulp.task('extras', function () {
    return gulp.src(['app/*', '!app/*.html'], { dot: true })
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['html', 'images', 'fonts', 'extras']);
