var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  src: './src/*.js',
  dist: './dist'
}

gulp.task('clean', function (cb) {
  del(['dist']).then(() => cb());
});

gulp.task('uglify', ['clean'], function () {
  return gulp.src(paths.src)
    .pipe(concat('countdown.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('oridinal', ['clean'], function () {
  return gulp.src(paths.src)
    .pipe(gulp.dest(paths.dist));
})

gulp.task('dist', ['uglify', 'oridinal'])