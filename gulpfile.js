'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const xo = require('gulp-xo');
const babel = require('gulp-babel');

function handleError(err) {
	if (err) {
		this.emit('end');
	}
}

function script() {
	return gulp
		.src('src/**/*.js')
		.pipe(xo().on('error', handleError))
		.pipe(sourcemaps.init())
		.pipe(babel({
			modules: 'umd',
			experimental: true
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
}

function watch() {
	gulp.watch('src/**/*.js', ['script']);
}

gulp.task('script', script);
gulp.task('default', ['script']);
gulp.task('watch', ['default'], watch);
