/**
 * @file
 * @author Yangholmes
 */

({
    baseUrl: '../tmp',
    paths: {
        config: 'config',
        components: 'components',
        utils: 'utils',
        template: 'template',
        text: '../libs/text',
        axios: '../libs/axios.min',
        vue: '../libs/vue.min',
        // 'vue-router': 'libs/vue-router.min'
        'vue-router': 'empty:'
    },
    map: {
        '*': {
            css: '../libs/css.min.js'
        }
    },
    shim: {
        app: {
            // deps: ['css!/css/game/app.css']
        }
    },

    name: 'app',
    out: '../dist/app.js',

    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    optimize: 'none'
});
