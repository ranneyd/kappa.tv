'use strict';

// Less configuration
const gulp = require('gulp');
const less = require('gulp-less');
// esLint configuration
const eslint = require('gulp-eslint');

gulp.task('less', function() {
    gulp.src('css/*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['less'], function() {
    gulp.watch('css/*.less', ['less']);
});

gulp.task('dev', function() {
	// Got waaaay too many errors on the other js files.
	return gulp.src('js/main.js')
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('dev-watch', function() {
	gulp.watch('js/main.js', ['dev']);
});
