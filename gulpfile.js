const gulp = require('gulp');
const path = require('path');
const nodemon = require('nodemon');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const del = require('del');
const webpack = require('webpack');
const config = require('./webpack/webpack.base.js');


gulp.task('nodemon', done => {
    nodemon({
        nodeArgs: ['--debug'],
        execMap: { js: 'node' },
        script: path.join(__dirname, 'dist/app'),
        ignore: ['*'],
        watch: [''],
        ext: 'noop'
    }).on('restart', () => {
        console.log('Restarted!');
    });
    done();
});


gulp.task('webpack', done => {
    webpack(config).watch(100,(err,stats) => {
        if (err) console.log(err);
        else console.log(stats.toString({colors: true}));
        nodemon.restart();
    });
    done();
});

gulp.task('build', done => {
    webpack(config, (err,stats) => {
        if (err) console.log(err);
        else console.log(stats.toString({colors: true}));
    });
});

gulp.task('default', ['nodemon', 'webpack'] ,done => {

});