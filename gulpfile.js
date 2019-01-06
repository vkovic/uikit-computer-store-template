var gulp = require('gulp'),
    clean = require('gulp-clean'),
    include = require('gulp-include'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    server = require('gulp-webserver'),
    tildeImporter = require('node-sass-tilde-importer');

// Remove previous dist folder if exists
gulp.task('clean', function () {
    return gulp.src('dist', {read: false, allowEmpty: true})
        .pipe(clean());
});

// Compile pug templates into HTML
gulp.task('html', function () {
    return gulp.src('src/templates/pages/*.pug')
        .pipe(pug({
            basedir: 'src/templates',
            pretty: true
        }))
        .pipe(gulp.dest('dist'));
});

// Copy images to dist
gulp.task('images', function () {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/images'));
});

// Compile scss files into css
gulp.task('styles', function () {
    return gulp.src('src/sass/style.scss')
        .pipe(sass({importer: tildeImporter}))
        .pipe(gulp.dest('dist/styles'));
});

// Compile js files
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
        .pipe(gulp.dest('dist/scripts'));
});

// Run server from dist directory and open browser
gulp.task('server', function () {
    gulp.src('dist').pipe(server({open: true}));
});

// Compile project by combining tasks above
gulp.task('build',
    gulp.series(
        'clean',
        gulp.parallel('html', 'images', 'styles', 'scripts'), // Parallel tasks
        'server'
    )
);