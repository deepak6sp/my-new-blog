var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var sass= require("gulp-sass");
var mincss = require("gulp-cssmin");
var rename = require('gulp-rename');
var uglify =  require('gulp-uglify');

var PATHS = {
    "source":{
    	html : '*.html',
    	js : './app/*.js',
    	css : './css/*/.css',
        scss : './scss/**/*.scss'
    },
    "destination":{
        css : "./css/",
        js : "./js/"
    },
    "bootstrap":{
        css : './node_modules/bootstrap/dist/css/bootstrap.min.css',
        js : './node_modules/bootstrap/dist/js/bootstrap.min.js'
    },
    "jquery":{
        js : './node_modules/jquery/dist/jquery.min.js'
    }

};

gulp.task('copy-css',function(){
    return gulp.src(PATHS.bootstrap.css)
    .pipe(gulp.dest(PATHS.destination.css));

});

gulp.task('copy-js',function(){
    return gulp.src([PATHS.bootstrap.js,PATHS.jquery.js])
    .pipe(gulp.dest(PATHS.destination.js));

});

gulp.task('sassify',['watch'],function(){
    return gulp.src(PATHS.source.scss)
        .pipe(sass())
        .pipe(mincss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(PATHS.destination.css))
        .pipe(browserSync.stream());

});

gulp.task('uglify', function() {
  return gulp.src(PATHS.source.js)
    .pipe(uglify())
    .pipe(rename({basename:"main",suffix: '.min'}))
    .pipe(gulp.dest(PATHS.destination.js));
});

gulp.task('watch',function(){
    gulp.watch(PATHS.source.html).on("change", browserSync.reload);
    gulp.watch(PATHS.source.scss,['sassify']).on("change", browserSync.reload);
    gulp.watch(PATHS.source.js,['uglify']).on("change", browserSync.reload);
});

gulp.task('serve', ['copy-css','copy-js','sassify','uglify','watch'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    
});

gulp.task("default",['serve'],function(){


});