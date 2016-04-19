var gulp = require("gulp");
var browserSync = require('browser-sync').create();

var PATHS = {
	html : '*.html',
	js : './js/*.js',
	css : './css/*/.css'

};

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(PATHS.html).on("change", browserSync.reload);
});

gulp.task("default",['serve'],function(){


});