/**
 * Created by W.J.Chang on 2014/10/14.
 */

define(function (require, exports) {
    var ajaxUtil = {};
    var commonUtil = require('util/commonUtil').commonUtil;
    var logUtil = require('util/logUtil').logUtil;

    var TIMEOUT = 30000;
    var LOADING_OFFSET = '300px';
    var LOADING_LAYER = null;

    ajaxUtil.doAjax = function(url,data,method,hasLoading) {
        hasLoading = hasLoading || true;
        method = method || "GET";
        if(hasLoading) {
            startLoading();
        }

        var def = $.Deferred();
        $.ajax({
            type: method,
            url: url,
            data: data,
            success: function (msg) {
                setTimeout(function () {
                    if(hasLoading) {
                        doneLoading();
                    }
                }, 200);

                logUtil.log('request url:' + url + '\n');
                logUtil.log('request args:' + JSON.stringify(data) + '\n');

                if (msg.status == '-999') {
                    window.location.reload();
                }

                def.resolve((msg));
            },
            timeout: TIMEOUT,
            error: function (msg) {
                setTimeout(function () {
                    if(hasLoading) {
                        doneLoading();
                    }
                }, 200);

                logUtil.log('request url:' + url + '\n');
                logUtil.log('request args:' + JSON.stringify(data) + '\n');

                commonUtil.toast('网络请求异常，请稍候重试');
                def.resolve(msg);
            }
        });
        return def.promise();
    };

    ajaxUtil.doAjaxPost = function (url, data,isLoading) {
        isLoading = isLoading || true;
        var def = $.Deferred();
        ajaxUtil.doAjax(url,data,"POST",isLoading).done(function(ret) {
            def.resolve(ret);
        });

        return def.promise();
    };

    ajaxUtil.doAjaxGet = function (url, data, isLoading) {
        isLoading = isLoading || true;
        var def = $.Deferred();
        ajaxUtil.doAjax(url,data,"",isLoading).done(function(ret) {
            def.resolve(ret);
        });

        return def.promise();
    };

    ajaxUtil.doAjaxPut = function (url, data, isLoading) {
        isLoading = isLoading || true;
        var def = $.Deferred();
        ajaxUtil.doAjax(url,data,"PUT",isLoading).done(function(ret) {
            def.resolve(ret);
        });

        return def.promise();
    };

    ajaxUtil.doAjaxDelete = function (url, data, isLoading) {
        isLoading = isLoading || true;
        var def = $.Deferred();
        ajaxUtil.doAjax(url,data,"DELETE",isLoading).done(function(ret) {
            def.resolve(ret);
        });

        return def.promise();
    };

    ajaxUtil.doAjaxLoad = function (domNode, url, args,isLoading) {
        isLoading = isLoading || true;
        if(isLoading) {
            startLoading();
        }
        var def = $.Deferred();

        domNode.load(url, args, function (ret) {
            setTimeout(function () {
                if(isLoading) {
                    doneLoading();
                }
            }, 200);

            logUtil.log('page url:' + url + '\n' + 'loaded');

            try {
                var retObj = JSON.parse(ret);
                if (retObj.status == -999) {
                    logUtil.log('页面过期');
                    window.location.reload();
                }

            } catch (e) {
                doneLoading();
            }

            def.resolve(ret);
        });
        return def.promise();
    };

    function startLoading() {
        // LOADING_LAYER = layer.load(2, {shade: false, offset: LOADING_OFFSET});
        Pace.start();
    }

    function doneLoading() {
        // layer.close(LOADING_LAYER);
        Pace.stop();
    }

    exports.ajaxUtil = ajaxUtil;
});