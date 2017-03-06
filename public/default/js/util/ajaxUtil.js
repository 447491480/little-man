/**
 * Created by W.J.Chang on 2014/10/14.
 */

define(function(require,exports) {
    var ajaxUtil = {};
    var commonUtil = require('util/commonUtil').commonUtil;
    var logUtil = require('util/logUtil').logUtil;

    var TIMEOUT = 30000;
    var LOADING_OFFSET = '300px';

    ajaxUtil.doAjaxPost = function(url,data) {
        var loading = layer.load(2,{shade:false,offset:LOADING_OFFSET});
        var def = $.Deferred();
        $.ajax({
            type: "POST",
            url: url,
            data:data,
            success: function (msg) {
                setTimeout(function() {
                    layer.close(loading);
                },200);

                logUtil.log('request url:' + url + '\n');
                logUtil.log('request args:' + JSON.stringify(data) + '\n');

                if(msg.status=='-999') {
                    window.location.href='./?_m=/admin/page/login';
                }

                def.resolve((msg));
            },
            timeout:TIMEOUT,
            error:function(msg) {
                setTimeout(function() {
                    layer.close(loading);
                },200);

                logUtil.log('request url:' + url + '\n');
                logUtil.log('request args:' + JSON.stringify(data) + '\n');

                commonUtil.toast('网络请求异常，请稍候重试');
                def.resolve(msg);
            }
        });
        return def.promise();
    };

    ajaxUtil.doAjaxGet = function(url,data) {
        var loading = layer.load(2,{shade:false,offset:LOADING_OFFSET});
        var def = $.Deferred();
        $.ajax({
            type: "GET",
            url: url,
            data:data,
            success: function (msg) {
                setTimeout(function() {
                    layer.close(loading);
                },200);

                logUtil.log('request url:' + url + '\n');
                logUtil.log('request args:' + JSON.stringify(data) + '\n');

                if(msg.status=='-999') {
                    window.location.href='./?_m=/admin/page/login';
                }

                def.resolve((msg));
            },
            timeout:TIMEOUT,
            error:function(msg) {
                setTimeout(function() {
                    layer.close(loading);
                },200);

                logUtil.log('request url:' + url + '\n');
                logUtil.log('request args:' + JSON.stringify(data) + '\n');

                commonUtil.toast('网络请求异常，请稍候重试');
                def.resolve(msg);
            }
        });
        return def.promise();
    };

    ajaxUtil.doAjaxPut = function(url,data) {
        var loading = layer.load(2,{shade:false,offset:LOADING_OFFSET});
        var def = $.Deferred();
        $.ajax({
            type: "PUT",
            url: url,
            data:data,
            success: function (msg) {
                setTimeout(function() {
                    layer.close(loading);
                },200);

                logUtil.log('request url:' + url + '\n');
                logUtil.log('request args:' + JSON.stringify(data) + '\n');

                if(msg.status=='-999') {
                    window.location.href='./?_m=/admin/page/login';
                }

                def.resolve((msg));
            },
            timeout:TIMEOUT,
            error:function(msg) {
                setTimeout(function() {
                    layer.close(loading);
                },200);

                logUtil.log('request url:' + url + '\n');
                logUtil.log('request args:' + JSON.stringify(data) + '\n');

                if(msg.status=='-999') {
                    window.location.href='./?_m=/admin/page/login';
                }

                commonUtil.toast('网络请求异常，请稍候重试');
                def.resolve(msg);
            }
        });
        return def.promise();
    };

    ajaxUtil.doAjaxDelete = function(url,data) {
        var loading = layer.load(2,{shade:false,offset:LOADING_OFFSET});
        var def = $.Deferred();
        $.ajax({
            type: "DELETE",
            url: url,
            data:data,
            success: function (msg) {
                setTimeout(function() {
                    layer.close(loading);
                },200);

                logUtil.log('request url:' + url + '\n');
                logUtil.log('request args:' + JSON.stringify(data) + '\n');

                if(msg.status=='-999') {
                    window.location.href='./?_m=/admin/page/login';
                }

                def.resolve((msg));
            },
            timeout:TIMEOUT,
            error:function(msg) {
                setTimeout(function() {
                    layer.close(loading);
                },200);

                logUtil.log('request url:' + url + '\n');
                logUtil.log('request args:' + JSON.stringify(data) + '\n');

                commonUtil.toast('网络请求异常，请稍候重试');
                def.resolve(msg);
            }
        });
        return def.promise();
    };

    ajaxUtil.doAjaxLoad = function(domNode,url,args) {
        var loading = layer.load(2,{shade:false,offset:LOADING_OFFSET});
        var def = $.Deferred();

        domNode.load(url,args,function(ret){
            setTimeout(function() {
                layer.close(loading);
            },200);

            logUtil.log('page url:' + url + '\n' + 'loaded');

            try{
                var retObj = JSON.parse(ret);
                if(retObj.status == -999) {
                    logUtil.log('页面过期');
                    window.location.reload();
                }

            } catch (e) {

            }

            def.resolve(ret);
        });
        return def.promise();
    };

    exports.ajaxUtil = ajaxUtil;
});