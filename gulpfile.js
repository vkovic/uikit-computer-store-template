var gulp = require('gulp'),
    clean = require('gulp-clean'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    tildeImporter = require('node-sass-tilde-importer'),
    include = require('gulp-include'),
    server = require('gulp-webserver');

//
// Clean
//
// Remove previous dist folder if exists
//
gulp.task('clean', function () {
    return gulp.src('dist', {read: false, allowEmpty: true})
        .pipe(clean());
});

//
// HTML
//
// Compile pug templates into html
//
gulp.task('html', function () {
    return gulp.src('src/templates/pages/*.pug')
        .pipe(pug({
            basedir: 'src/templates',
            pretty: true
        }))
        .pipe(gulp.dest('dist'));
});

//
// Images
//
// Copy images to dist
//
gulp.task('images', function () {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/images'));
});

//
// Sass
//
// Compile scss files into css
//
gulp.task('styles', function () {
    return gulp.src('src/sass/style.scss')
        .pipe(sass({importer: tildeImporter}))
        .pipe(prefix())
        .pipe(gulp.dest('dist/styles'));
});

//
// Scripts
//
// Compile js files and XXX TODO
//
gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(include({
            extensions: 'js',
            hardFail: true,
            includePaths: [
                __dirname + '/node_modules',
                __dirname + '/src/js'
            ]
        }))
        //.pipe(jsmin())
        .pipe(gulp.dest('dist/scripts'));
});

//
// Web server
//
// Run server from dist directory and open browser
//
gulp.task('server', function () {
    gulp.src('dist').pipe(server({open: true}));
});

//
// Compile project
//
// Compile project by combining tasks above
//
gulp.task('build',
    gulp.series(
        'clean',
        gulp.parallel('html', 'images', 'styles', 'scripts'),
        'server'
    )
);