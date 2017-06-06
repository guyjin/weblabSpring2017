var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("css/*.css", ['css']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
})

gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .on('error', gutil.log)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("css"));
});

gulp.task('css', function() {
    return gulp.src("css/*.css")
        .pipe(browserSync.stream());
});

gulp.task('default');