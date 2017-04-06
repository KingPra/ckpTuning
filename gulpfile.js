/**
 * Purpose of a gulp file is to describe 'tasks'
 * that convert from 'developer mode' to 'productioin mode'. Things
 * like converting Sass => CSS, removing comments, merging
 * files, etc
  */

  // Step 1: import gulp
  let gulp = require('gulp');
  let sass = require('gulp-sass');
  let browser = require('gulp-browser');

  // Step 2: create default tasks
  gulp.task('default', ['html', 'css', 'js']);

  // Step 3: create subtasks
  gulp.task('html', function () {
      return gulp.src('index.html')
        .pipe(gulp.dest('docs/'));
  });

  gulp.task('css', function () {
      // Convert style.scss into style.css
      // Copy to docs/ 
      return gulp.src('scss/style.scss')
        .pipe(sass()) // requires gulp-sass
        .pipe(gulp.dest('docs/'));
  });

  gulp.task('js', function () {
      // Copy js file into docs/
      return gulp.src('js/app.js')
        .pipe(browser.browserify()) // makes require work
        .pipe(gulp.dest('docs/'));
  });

  gulp.task('watch', ['default'], function () {
   gulp.watch('*.html',['html']); //watches all html files
   gulp.watch('scss/*.scss', ['css']);
   gulp.watch('js/*/*.js', ['js']);
});