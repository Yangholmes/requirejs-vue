/**
 * @file 路由表
 * @author Yangholmes 2020-07-13
 */

define(function (require) {
    return [
        {
            path: '/home',
            name: 'home',
            component: require('view/home/index')
        }
    ];
});
