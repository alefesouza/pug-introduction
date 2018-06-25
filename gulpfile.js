const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', () => gulp.src('src/**/[!_]*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('dist')));

gulp.task('default', () => {
    gulp.watch('src/**/*.pug', ['pug']);
});