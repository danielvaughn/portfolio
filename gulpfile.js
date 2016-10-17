/*** dependencies ***/

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');
var fileinclude = require('gulp-file-include');
var clean = require('gulp-clean');
var sass = require('gulp-sass');


/*** tasks ***/

gulp.task('connect', function () {
    connect.server({
        root: './.srv/',
        port: 9000,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('./src/css/*.css')
        .pipe(connect.reload());
});

gulp.task('javascript', function () {
    gulp.src('./src/**/*.js')
        .pipe(connect.reload());
});

gulp.task('jshint', function() {
    return gulp.src(['./src/js/**/*.js', '!./src/js/vendor/**/*.js'])
        .pipe(jshint({
            esnext: true
        }))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('copyfiles', function() {
    gulp.src('./src/mod-minutes/**/*').pipe(gulp.dest('./.srv/mod-minutes'));
    gulp.src('./src/img/**/*').pipe(gulp.dest('./.srv/img'));
    gulp.src('./src/js/**/*').pipe(gulp.dest('./.srv/js'));
    gulp.src('./src/*.pdf').pipe(gulp.dest('./.srv/'));
});

gulp.task('fileinclude', function() {
    gulp.src('./src/**/*.html')
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./.srv'));
});

gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', ['jshint', 'javascript', 'copyfiles']);
    gulp.watch(['./src/*.html'], ['html', 'copyfiles']);
    gulp.watch(['./src/css/*.css'], ['css', 'copyfiles']);
});

gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./.srv/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});

/*** default task ***/

gulp.task('default', function() {
    gulp.src('./.srv', {read: false}).pipe(clean({force: true}));

    runSequence(
        ['jshint'],
        ['sass'],
        ['watch'],
        ['copyfiles'],
        ['fileinclude'],
        ['connect']
    );
});
