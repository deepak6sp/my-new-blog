var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var sass= require("gulp-sass");
var mincss = require("gulp-cssmin");
var rename = require('gulp-rename');
var uglify =  require('gulp-uglify');
var nodemon = require('gulp-nodemon');

var PATHS = {
    "source":{
    	html : '*.html',
    	js : './app/*.js',
        scss : './scss/**/*.scss'
    },
    "destination":{
        css : "./public/css/",
        js : "./public/js/"
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

gulp.task('sassify',function(){
    return gulp.src(PATHS.source.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(mincss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(PATHS.destination.css))
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

gulp.task('nodemon', function (cb) {
    
    var started = false;
    
    return nodemon({
        script: 'server.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true; 
        } 
    });
});

gulp.task('serve', ['nodemon','sassify','uglify','watch'], function () {

    // Serve files from the root of this project
    browserSync.init('null',{
        /*
        server: {
            baseDir: "./"
        },
        */
        proxy: "http://localhost:5000",
        port:7000
    });

     
});

gulp.task('vendor',['copy-css','copy-js']);

gulp.task("default",['serve']);