/**
 * @file gulp 脚本
 * @author Yangholmes
 */

const {src, dest, parallel} = require('gulp');
const watch = require('gulp-watch');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
// const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const replace = require('gulp-replace');

function onError(err) {
    gutil.log(gutil.colors.red('[Error]'), err.toString());
}

function start() {
    return nodemon({
        script: './prepro-server/index.js'
    });
}

function goLess(path) {
    return src(path)
        .pipe(less({}))
        .on('error', onError) // may be some less grammar errors, will occur gulp error
        .pipe(autoprefixer({
            remove: false,
            grid: 'autoplace', // 支持 IE10-11，自动补充IE写法
            // browsers: ['last 2 versions', 'ie > 9'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(dest('src'));
}

function watchLess() {
    let styleSrc = ['src/**/*.less'];
    return watch(styleSrc, {ignoreInitial: false}, function (file) {
        console.log(`${file.path} has changed`);
        goLess(styleSrc);
    });
}

function copyTmp() {
    return src(['src/**/*'])
        .pipe(dest('tmp'));
}

function goBabel(path) {
    return src(path, {
        ignore: '**/*.min.js'
    }).pipe(babel())
    .pipe(dest('tmp'));
}

function goUglify(path) {
    return src(path, {
        ignore: '**/*.min.js'
    }).pipe(uglify())
        .on('error', onError)
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('dist/src'));
}

function compatible() {
    let jsSrc = ['tmp/**/*.js'];
    // let jsSrc = ['libs/vue-router.min.js'];
    return goBabel(jsSrc);
}

function minify() {
    let jsSrc = ['dist/app.js'];
    return goUglify(jsSrc);
}

const copyDist = parallel(
    () => src('index.html')
        .pipe(replace('data-main="/src/app"', 'data-main="/src/app.min"'))
        .pipe(dest('dist')),
    () => src('libs/**/*')
        .pipe(dest('dist/libs')),
    () => src('assets/**/*')
        .pipe(dest('dist/assets'))
);

exports.default = parallel(watchLess, start);
exports.compatible = compatible;
exports.copyTmp = copyTmp;
exports.minify = minify;
exports.copyDist = copyDist;
