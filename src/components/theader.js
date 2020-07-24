/**
 * @file 头部组件
 * @author Yangholmes 2020-07-14
 */

define(function (require) {
    require('css!style/components/theader');
    return {
        name: 'theader',
        template: require('text!template/components/theader.html'),
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        methods: {
            onClickLeft() {},
            onClickRight() {}
        }
    };
});
