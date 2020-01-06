/*
* @Author: Christian Marquez
* @Date:   2019-07-12 10:34:57
* @Last Modified by:   gss
* @Last Modified time: 2019-07-25 10:29:09
*/

'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minify = require('gulp-minify-css'),
	concat = require('gulp-concat'),
 	rename = require('gulp-rename'),
 	uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	imagemin = require('gulp-imagemin'),
	del = require('del');

sass.compiler = require('node-sass');

var styleSrc = './app/scss/**/*.scss',
	imgSrc = './app/images/**/*',
	scriptSrc = './app/js/scripts.js',
	vendorSrc = './app/js/vendor/*.js',
	fontSrc = './app/fonts/*',
	imgDest = './assets/images',
	styleDest = './assets/css',
	scriptDest = './assets/js',
	fontDest = './assets/fonts';

gulp.task('sass', function () {
  	return gulp.src(styleSrc)
	    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	    .pipe(autoprefixer('last 2 versions'))
	    //.pipe(minify())
	    .pipe(gulp.dest(styleDest));
});

gulp.task('imagecompress', () =>
    gulp.src(imgSrc)
        .pipe(imagemin([
		    imagemin.gifsicle({interlaced: true}),
		    imagemin.jpegtran({progressive: true}),
		    imagemin.optipng({optimizationLevel: 10}),
		    imagemin.svgo({
		        plugins: [
		            {removeViewBox: true},
		            {cleanupIDs: false}
		        ]
		    })
		]))
        .pipe(gulp.dest(imgDest))
);

gulp.task('minify-js', function (done) {    
    return gulp.src([vendorSrc, scriptSrc])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(scriptDest));
    done();
});

gulp.task('clean-img', function (cb) {
	return del(imgDest,cb);
});

gulp.task('copy-font', function (done) {
	gulp.src(fontSrc)
		.pipe(gulp.dest(fontDest));
	 done();
});

gulp.task('watch', function () {	
	gulp.watch(imgSrc, gulp.series(['clean-img','imagecompress']));
	gulp.watch(styleSrc, gulp.series('sass'));
	gulp.watch(scriptSrc, gulp.series('minify-js'));
	gulp.watch(fontSrc, gulp.series('copy-font'));
});

gulp.task('default', gulp.series(['minify-js', 'sass', 'clean-img', 'imagecompress', 'copy-font']));
