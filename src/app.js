/**
 * @file
 * @author Yangholmes 2020-07-13
 */
/* eslint-disable no-undef */

requirejs.config({
    baseUrl: 'src',
    paths: {
        config: 'config',
        components: 'components',
        utils: 'utils',
        template: 'template',
        text: '/libs/text',
        axios: '/libs/axios.min',
        vue: '/libs/vue',
        'vue-router': '/libs/vue-router.min'
    },
    map: {
        '*': {
            css: '/libs/css.min.js'
        }
    },
    shim: {}
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['config', 'index']);
