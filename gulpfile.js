var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync')

var dayName = 'Day2-Events'

gulp.task('sass', function(){
    gulp.src(dayName + '/sass/main.sass')
        .pipe(sass({includePaths: [dayName + '/scss']}))
        .pipe(gulp.dest(dayName + '/css'))
})

// detect change in css 
gulp.task('browser-sync', function(){
    browserSync.init([ dayName + "/css/*.css", dayName + "/*.html"], {
        server: {
            baseDir : './' + dayName
        }
    })
})

// run first time

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch(dayName + "/sass/*.sass", ['sass']);
});
