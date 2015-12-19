var gulp = require('gulp'),
	jshint = require('gulp-jshint');

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
