var gulp = require('gulp')
var webpackStream = require('webpack-stream')
var usemin = require('gulp-usemin')
var md5 = require('md5')
var uglify = require('gulp-uglifyjs')
var inline = require('gulp-inline')
var clean = require('gulp-clean')

gulp.task('build-js', ['clean'], function() {
    return gulp.src('src/js/bundle.js')
        .pipe(uglify('bundle.js'))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('clean', function () {  
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('build-usemin', ['clean'], function() {
    return gulp.src('src/index.html')
        .pipe(
            usemin({
                jsAttributes : {
                    id: 'load-js',
                    'load-js': 'js/bundle.js',
                    hash: md5((new Date()).getTime())
                },
                js: [uglify]
            })
        )
        .pipe(gulp.dest('dist/'))
})

gulp.task('build-inline', ['build-usemin'], function() {
    return gulp.src('dist/index.html')
        .pipe(
            inline({
                base: 'dist/'
            })
        )
        .pipe(gulp.dest('dist/'))
})

gulp.task('build', ['clean', 'build-inline', 'build-js']);