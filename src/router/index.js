/**
 * @file 路由实例
 * @author Yangholmes 2020-07-13
 */

define(function (require) {
    const Vue = require('vue');
    const VueRouter = require('vue-router');
    const routes = require('./routes');

    Vue.use(VueRouter);
    const router = new VueRouter({
        mode: 'history',
        routes
    });

    return router;
});
