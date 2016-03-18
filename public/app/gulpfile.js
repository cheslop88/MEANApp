'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    maps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate');


gulp
/* Concat scripts into 1 file */
.task('concatScripts', function(){
	gulp.src([
		'js/app.js',
		'js/services/*.js',
		'js/routes/*.js',
		'js/controllers/*.js', 
		'js/directives/*.js',
		'js/index.js'])
	/* Add in any missing angular include variables before minification */
	.pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
	.pipe(maps.init())
	/* Concat to main.js */
	.pipe(concat("main.js"))
	.pipe(gulp.dest('js'))
})
/* Minify the created concatScripts file */
.task('minifyScripts', function(){
	gulp.src('js/main.js')
	.pipe(uglify())
	/* Create a min files of main.js */
	.pipe(rename('main.min.js'))
	.pipe(gulp.dest('js'))
})
/* Sass compile */
.task('compileSass', function(){
  return gulp.src('css/scss/*.scss')
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./min'))
      .pipe(gulp.dest('css/compiled'));
})
/* Minify CSS output */
.task('minify-css', function() {
  return gulp.src('css/compiled/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/compiled/min/'));
})
/* Watch Sass */
.task('watchSass', function(){
  gulp.watch('css/scss/*.scss', ['compileSass']);
})
/* Default build task */
.task("build", ['concatScripts', 'minifyScripts', 'compileSass', 'minify-css'])
  .task("default", ['build']);
   

