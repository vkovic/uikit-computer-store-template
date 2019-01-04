var gulp = require('gulp'),
    pug = require('gulp-pug'),
    //server = require('gulp-server-livereload'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    tildeImporter = require('node-sass-tilde-importer');

// HTML
gulp.task('html', function () {
    return gulp.src('src/templates/pages/*.pug')
        .pipe(pug({
            basedir: 'src/templates',
            pretty: true
        }))
        .pipe(gulp.dest('dist'));
});

// // start the server
// gulp.task('webserver', function () {
//     gulp.src('.')
//         .pipe(server({
//             defaultFile: 'index.html',
//             livereload: true,
//             open: false
//         }));
// });

// Sass
gulp.task('sass', function () {
    return gulp.src('src/sass/index.scss')
        .pipe(sass({
            importer: tildeImporter
        }).on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});
//
// gulp.task('sass:watch', function () {
//     gulp.watch('./assets/sass/**/*.scss', ['sass']);
// });
//
// // deafult taks to run all other tasks
// gulp.task('default', ['sass', 'sass:watch', 'webserver']);
