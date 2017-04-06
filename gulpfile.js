/**
 * Purpose of a gulp file is to describe 'tasks'
 * that convert from 'developer mode' to 'productioin mode'. Things
 * like converting Sass => CSS, removing comments, merging
 * files, etc
  */

  // Step 1: import gulp
  const gulp = require('gulp');
  const sass = require('gulp-sass');
  const browser = require('gulp-browser');
  const imagemin = require('gulp-imagemin')

  // Step 2: create default tasks
  gulp.task('default', ['html', 'css', 'js', 'images']);

  // Step 3: create subtasks
  gulp.task('html', () => {
      return gulp.src('index.html')
        .pipe(gulp.dest('docs/'));
  });

  gulp.task('css', () => {
      // Convert style.scss into style.css
      // Copy to docs/ 
      return gulp.src('scss/style.scss')
        .pipe(sass()) // requires gulp-sass
        .pipe(gulp.dest('docs/'));
  });

  gulp.task('js', () => {
      // Copy js file into docs/
      return gulp.src('js/app.js')
        .pipe(browser.browserify()) // makes require work
        .pipe(gulp.dest('docs/'));
  });

  gulp.task('images', () => {
    return gulp.src('images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('docs/images'))
  });

  gulp.task('watch', ['default'], () => {
  gulp.watch('*.html',['html']); //watches all html files
  gulp.watch('scss/*.scss', ['css']);
  gulp.watch('js/*/*.js', ['js']);
  gulp.watch('js/*.js', ['js']);
  gulp.watch('images/*', ['images']);
});