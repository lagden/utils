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
		.src('es6/**/*.js')
		.pipe(xo().on('error', handleError))
		.pipe(sourcemaps.init())
		.pipe(babel({
			modules: 'amd',
			experimental: true
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
}

function watch() {
	gulp.watch('es6/**/*.js', ['script']);
}

gulp.task('script', script);
gulp.task('default', ['script']);
gulp.task('watch', ['default'], watch);
