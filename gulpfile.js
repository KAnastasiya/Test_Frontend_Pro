const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
const browserSync = require('browser-sync');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const del = require('del');
const reload = browserSync.reload;
const plugins = require('gulp-load-plugins')();
const webpack = require('webpack-stream');
const named = require('vinyl-named');

// Production-директория
const publicDir = './public';

// Разметка (pug to html)
gulp.task('pug', () => {
  gulp
    .src('./src/index.pug')
    .pipe(plugins.plumber({ errorHandler: plugins.notify.onError() }))
    .pipe(plugins.pug( { pretty: true } ))
    .pipe(gulp.dest(publicDir));
});

// Стили (styl to css)
gulp.task('styl', function() {
  gulp
    .src('./src/style.styl')
    .pipe(plugins.plumber({ errorHandler: plugins.notify.onError() }))
    .pipe(plugins.stylus({ 'include css': true }))
    .pipe(plugins.autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(plugins.cssnano())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest(publicDir));
});

// Скрипты (es6 to js)
gulp.task('js', () => {
  gulp
  .src('./src/script.js')
  .pipe(plugins.plumber({
    errorHandler: plugins.notify.onError(err => ({
      title: 'Webpack',
      message: err.message
    }))
  }))
  .pipe(named())
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(plugins.rename({suffix: '.min'}))
  .pipe(gulp.dest(publicDir));
});

// Оптимизация изображений
gulp.task('img', () => {
  gulp
  .src('./src/img/*')
  .pipe(plugins.imagemin([
    imageminJpegRecompress({
      loops: 4,
      min: 50,
      max: 80,
      quality: 'high',
      strip: true,
      progressive: true
    }),
    imageminPngquant({ quality: '50-80' }),
    plugins.imagemin.svgo({removeViewBox: true})
  ]))
  .pipe(gulp.dest(publicDir + '/img/'));
});

// Обновление браузера
gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: publicDir,
      index: 'index.html'
    },
    notify: false
  });
});

// Очистка production-директории
gulp.task('clean', () => {
  return del(publicDir);
});

// Задача gulp
gulp.task('default', gulpsync.sync(['clean', 'img', 'pug', 'styl', 'js', 'browser-sync']), () => {
  gulp.watch('./src/img/*', ['img']).on('change', reload);
  gulp.watch(['./src/*.pug', './src/blocks/**/*.pug'], ['pug']).on('change', reload);
  gulp.watch(['./src/*.styl', './src/blocks/**/*.styl', './src/common/*.styl'], ['styl']).on('change', reload);
  gulp.watch('./src/script.js', ['js']).on('change', reload);
});
