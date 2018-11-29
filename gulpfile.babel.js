const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');

gulp.task('default', () =>
  gulp
    .src('./src/index.js')
    .pipe(babel({
      presets: ['@babel/env', '@babel/react']
    }))
    .pipe(minify())
    .pipe(gulp.dest('dist'))
);
