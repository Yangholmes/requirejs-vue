/**
 * @file 入口
 * @author Yangholmes 2020-09-14
 */

define(function (require) {
    require('css!./index.css');
    return {
        name: '',
        template: require('text!./index.html'),
        data() {
            return {};
        }
    };
});
