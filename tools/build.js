/**
 * @file
 * @author Yangholmes
 */

({
    baseUrl: '../',
    paths: {
        root: 'tmp',
        template: 'template',
        style: 'css',
        text: 'libs/text',
        axios: 'libs/axios.min',
        vue: 'libs/vue.min',
        // 'vue-router': 'libs/vue-router.min'
        'vue-router': 'empty:'
    },
    map: {
        '*': {
            css: 'libs/css.min'
        }
    },
    shim: {
        app: {
            // deps: ['css!/css/game/app.css']
        }
    },

    name: 'tmp/app.js',
    out: '../dist/app.js',

    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    optimize: 'none'
});
