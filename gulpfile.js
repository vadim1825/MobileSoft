var gulp = require('gulp');

var sass = require('gulp-sass');

var uglifycss = require('gulp-uglifycss');

var watch = require('gulp-watch');




gulp.task('sass', function () {
  return gulp.src('develop/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('develop/css'));
});

gulp.task('css', function () {
  gulp.src('develop/css/main.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('production/css'));
});

gulp.task('watch', function(){
  gulp.watch('develop/scss/main.scss', ['sass']);
  gulp.watch('develop/css/main.css', ['css']);
});

gulp.task('default', ['sass', 'css', 'watch']);