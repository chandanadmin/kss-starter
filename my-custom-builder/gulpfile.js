'use strict';

var gulp = require('gulp');

var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var sourcemaps  = require('gulp-sourcemaps');
var sync        = require('browser-sync');
var sassLint    = require('gulp-sass-lint');
var eslint      = require('gulp-eslint');
var babel       = require('gulp-babel');
var rename      = require('gulp-rename');
var imagemin    = require('gulp-imagemin');
var path        = require('path');
var del         = require('del');
var runSequence = require('run-sequence');
var kss         = require('kss');

gulp.task('styleguide', function() {
  return kss({
    source: 'src',
    destination: 'out',
    builder: '.',
    namespace: 'style-guide/',
    'extend-drupal8': true,
    // The css and js paths are URLs, like '/misc/jquery.js'.
    // The following paths are relative to the generated style guide.
    css: [
      path.relative(
        __dirname + '/src',
        __dirname + '/css/global.css'
      )
    ],
    js: [
    ],
    homepage: 'style-guide.md',
    title: 'Style Guide'
  });
});

//=======================================================
gulp.task('default', function(callback) {
  runSequence(
    ['styleguide'],
    callback
  );
});
