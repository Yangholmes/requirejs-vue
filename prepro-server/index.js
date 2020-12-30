/**
 * @file 试生产服务
 * @author Yangholmes
 */

const portDetector = require('./portDetector');

const path = require('path');

const argv = require('yargs').argv;
const dir = path.join(__dirname, '..');

const express = require('express');
const history = require('connect-history-api-fallback');
const {createProxyMiddleware} = require('http-proxy-middleware');

const proxymap = require('./proxy-map');

const app = express();

Object.keys(proxymap).forEach(url => {
    const proxy = createProxyMiddleware(proxymap[url]);
    app.use(url, proxy);
});

app.use(history({
    index: '/index.html'
}));

app.use('/', express.static(dir));

const port = argv.port || 8080;

portDetector(port).then(p => {
    app.listen(p, () => {
        console.log('pre-pro server launch, listen to port: ' + p);
    });
}).catch(err => {
    throw new Error(err);
});


