/**
 * @file app 配置
 * @author Yangholmes 2020-09-14
 */

define(function (require) {
    const app = require('config/app');

    let title = document.getElementsByTagName('title');
    if (!title.length) {
        title = document.createElement('title');
        document.head.appendChild(title);
    }
    else {
        title = title[0];
    }
    title.innerText = app.title || '';
});
