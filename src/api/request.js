/**
 * @file http 驱动
 * @author Yangholmes 2020-07-13
 */

define(function (require) {
    const axios = require('axios');

    class HttpRequest {
        constructor(baseUrl = '/') {
            this.baseUrl = baseUrl;
            this.queue = {};
        }
        getInsideConfig() {
            const config = {
                baseURL: this.baseUrl,
                timeout: 5e3
            };
            return config;
        }
        destroy(url) {
            delete this.queue[url];
        }
        interceptors(instance, url) {
            // 请求拦截
            instance.interceptors.request.use(config => {
                if (!Object.keys(this.queue).length) {
                    // 全局的 loading
                }
                this.queue[url] = true;
                return config;
            }, error => Promise.reject(error));
            // 响应拦截
            instance.interceptors.response.use(res => {
                this.destroy(url);
                const data = res.data;
                // console.log(res);
                if (data.code) {
                    return Promise.reject(data);
                }
                return data;
            }, error => {
                this.destroy(url);
                return Promise.reject(error);
            });
        }
        request(options) {
            const instance = axios.create();
            options = Object.assign(this.getInsideConfig(), options);
            this.interceptors(instance, options.url);
            return instance(options);
        }
    }

    return HttpRequest;
});
