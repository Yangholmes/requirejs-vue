/**
 * @file 应用入口
 * @author Yangholmes 2020-07-13
 */

define(function (require) {
    // require('css!style/app.css');
    const Vue = require('vue');
    const router = require('root/router/index');

    let vue = new Vue({
        name: 'index',
        router
    });

    vue.$mount('#app');
    window.app = vue;
});
