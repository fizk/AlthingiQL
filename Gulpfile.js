const gulp = require('gulp');
const sass = require('gulp-sass');
const moduleImporter = require('sass-module-importer');

gulp.task('sass', () => {
    return gulp.src(['./src/client/**/*.scss'])
        .pipe(sass({
            importer: moduleImporter()
        }).on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets'));
});


gulp.task('default', ['sass']);

gulp.task('sass:watch', () => {
    gulp.watch(['./src/client/**/*.scss'], ['sass']);
});
