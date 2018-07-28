const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function () {
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'App'
		}
	});

	watch('./App/index.html', function () {
		browserSync.reload();
	})

	watch('./App/assets/styles/**/*.css', function () {
		gulp.start('cssInject');
	})

});
gulp.task('cssInject',['styles'], function () {
	return gulp.src('./App/assets/styles/styles.css')
	.pipe(browserSync.stream());
})

