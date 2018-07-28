const gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');

const config = {
	shape: {
		spacing: {
			padding: 1
		}
	},
	mode: {
		css: {
			sprite: 'sprites.svg',
			render: {
				css: {
					template: './gulp/tasks/template.css'
				}
			}
		}
	}
}

gulp.task('CreateSprite', function () {
	return gulp.src('./App/assets/icons/*.svg')
	.pipe(svgSprite(config))
	.pipe(gulp.dest('./App/temp/sprite/'));
});

gulp.task('copySpriteCss',['CreateSprite'], function () {
	return gulp.src('./App/temp/sprite/css/*.css')
	.pipe(rename('_sprite.css'))
	.pipe(gulp.dest('./App/assets/styles/modules/'));
});

gulp.task('copySpriteGraphic',['CreateSprite'], function () {
	return gulp.src('./App/temp/sprite/css/**/*.svg')
	.pipe(gulp.dest('./App/assets/icons/sprites/'));
})

gulp.task('icons', ['CreateSprite','copySpriteCss','copySpriteGraphic']);
