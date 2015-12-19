var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	html5Lint = require('gulp-html5-lint');

var path = 'app/js/**/*.js';

gulp.task('default', ['watch']);

gulp.task('watch', function() {
	gulp.watch(path, ['jshint']);
});

gulp.task('jshint', function() {
	return gulp.src(path)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('html5-lint', function() {
	gulp.src('app/index.html')
	.pipe(html5Lint());
});
