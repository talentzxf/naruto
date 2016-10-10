var gulp = require('gulp');
var clean = require('gulp-clean')
var browserify = require('browserify')
var babelify = require('babelify')

gulp.task('clean', function(){
    return gulp.src('dst/', {read: false})
    .pipe(clean())
});

gulp.task('browserify', function(){
    'use strict'
    var b = browserify("./src/naruto.js")
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
    return b.pipe(gulp.dest('./build/Chakra.js'));
})


gulp.task('default',['clean', 'browserify']);