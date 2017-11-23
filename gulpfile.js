// Gulpfile
var gulp = require('gulp'); 
//var size = require('gulp-size');
var size = require('gulp-filesize');
var path = require('path');
var foreach = require('gulp-foreach');
var through = require('through2');
var imageop = require('gulp-image');
var clean = require('gulp-clean');


gulp.task('getpath', function() {
  const s = size();
  gulp.src(["images/**/*.jpg", "images/**/*.png", "images/**/*.gif"].concat([]))
  .pipe(size());
});
gulp.task('optimizepng', function() {
    gulp.src(["./images/**/*.png"]).pipe(imageop({
            pngquant: true,
            guetzli: true,
			concurrent: 10
        })).pipe(gulp.dest("./public/"));
});
gulp.task('optimizejpg', function() {
    gulp.src(["./images/*.jpg", "./images/*.jpeg"]).pipe(imageop({
			mozjpeg: true,
			concurrent: 10
        })).pipe(gulp.dest("./public/"));
});

gulp.task('optimizegif', function() {
    gulp.src(["./images/*.gif"]).pipe(imageop({
			gifsicle: true,
        })).pipe(gulp.dest("./public/"));
});