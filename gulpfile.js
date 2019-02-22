
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    server = require('browser-sync'),
    prefix = require('gulp-autoprefixer'),
    minify = require('gulp-csso'),
    rename = require('gulp-rename');


gulp.task('sass', function(){
    return gulp.src(['sass/**/*.sass', 'sass/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(prefix(['last 12 versions','> 1%','ie 8'], {cascade: true}))
    .pipe(gulp.dest('css/'));
});

gulp.task('server', function(){
	server.init({
		server: ""
	});
});

gulp.task('build', function(){
	return gulp.src(['css/*.css'])
	.pipe(minify())
  	.pipe(rename({
		suffix: ".min"
  	}))
	.pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']);
});


gulp.task('default', ['server','watch']);
