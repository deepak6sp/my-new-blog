var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var sass= require("gulp-sass");
var mincss = require("gulp-cssmin");
var rename = require('gulp-rename');
var uglify =  require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var htmlreplace = require('gulp-html-replace');
 

var PATHS = {
    "source":{
    	html : '*.html',
    	js : './app/*.js',
        scss : './scss/**/*.scss'
    },
    "destination":{
        css : "./css/",
        minifycss : "./public/minifycss/",
        js : "./js/",
        minifyjs : "./public/minifyjs/"
    },
    "bootstrap":{
        js : './node_modules/bootstrap/dist/js/bootstrap.min.js'
    },
    "jquery":{
        js : './node_modules/jquery/dist/jquery.min.js'
    }

};


gulp.task('copy-js',function(){
    return gulp.src([PATHS.bootstrap.js,PATHS.jquery.js])
    .pipe(gulp.dest(PATHS.destination.minifyjs));

});

gulp.task('html-replace', function() {
  gulp.src('./index.html')
    .pipe(htmlreplace({
        'css': 'main.min.css',
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('minifycss',function(){
    return gulp.src(PATHS.destination.css+"*.css")
        .pipe(mincss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(PATHS.destination.minifycss));
});

gulp.task('sassify',['minifycss'],function(){
    return gulp.src(PATHS.source.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(PATHS.destination.css))
});

/* using webpack instead of uglify*/
/*
gulp.task('uglify', function() {
  return gulp.src(PATHS.source.js)
    .pipe(uglify())
    .pipe(rename({basename:"main",suffix: '.min'}))
    .pipe(gulp.dest(PATHS.destination.js));
});
*/
gulp.task('watch',function(){
    gulp.watch(PATHS.source.html).on("change", browserSync.reload);
    gulp.watch(PATHS.source.scss,['sassify']).on("change", browserSync.reload);
    gulp.watch("*.js").on("change", browserSync.reload);
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

gulp.task('serve', ['sassify','watch'], function () {

    // Serve files from the root of this project
    browserSync.init('null',{
        
        server: {
            baseDir: "./"
        }
        /*
        proxy: "http://localhost:5000",
        port:7000
        */
        
        
    });

     
});

gulp.task('vendor',['copy-js']);

gulp.task('production',['minifycss','uglify','html-replace']);

gulp.task("default",['serve']);