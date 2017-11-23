// Gulpfile
var gulp = require('gulp'); 
//var size = require('gulp-size');
var size = require('gulp-filesize');
var path = require('path');
var foreach = require('gulp-foreach');
var through = require('through2');
var imageop = require('gulp-image');
var clean = require('gulp-clean');


gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});

gulp.task('getpath', function() {
  const s = size();
  gulp.src(["images/**/*.jpg", "images/**/*.png", "images/**/*.gif"].concat([]))
  .pipe(size());
});
gulp.task('optimizepng', function() {
    gulp.src(["./all/**/*.png","!./all/**/*-logo-*.png"]).pipe(imageop({
            pngquant: true,
			optipng: false,
			zopflipng: false,
			jpegRecompress: false,
			jpegoptim: false,
			mozjpeg: false,
			guetzli: true,
			gifsicle: false,
			svgo: false,
			concurrent: 10
        })).pipe(gulp.dest("./public/"));
});
gulp.task('optimizejpg', function() {
    gulp.src(["./uae/2_lrg/*.jpg"]).pipe(imageop({
            pngquant: false,
			optipng: false,
			zopflipng: false,
			jpegRecompress: false,
			jpegoptim: false,
			mozjpeg: true,
			guetzli: false,
			gifsicle: false,
			svgo: false,
			concurrent: 10
        })).pipe(gulp.dest("./uae_minimized/2_lrg/"));
});

gulp.task('rminactive', function() {
    return gulp.src('test/**', {read: false})
        .pipe(clean());
});