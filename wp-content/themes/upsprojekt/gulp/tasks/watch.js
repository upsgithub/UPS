var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('browsersync-init', function(){
  browserSync.init({
    notify: false,
    proxy: 'localhost:8080/ups-projekt/UPS/',
    port: 8443,
    open: true
  });
});

gulp.task('watch-php', function () {
  watch('./**/*.php', function() {
    browserSync.reload();
  });
});

gulp.task('watch-css', function() {
  watch('./assets/css/**/*.css', gulp.series('styles', 'cssInject'), function() {
    browserSync.reload();
  });
});

gulp.task('watch-js', function(){
  watch('./assets/js/*.js', function() {
    browserSync.reload();
  });
});
gulp.task('watch', gulp.parallel('browsersync-init', 'watch-php', 'watch-css', 'watch-js'), function() {
  
});

gulp.task('cssInject', function() {
  return gulp.src('./temp/css/styles.css')
    .pipe(browserSync.stream());
});