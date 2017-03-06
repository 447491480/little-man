/**
 * Created by W.J.Chang on 2014/10/14.
 */

layui.define(['commonUtil','logUtil','layer'],function(exports) {
    var ajaxUtil = {};
    var commonUtil = layui.commonUtil;
    var logUtil = layui.logUtil;
    var $ = layui.jquery;

    var TIMEOUT = 30000;

    function log(url,data) {
        logUtil.log('request url:' + url + '\n');
        logUtil.log('request args:' + JSON.stringify(data) + '\n');
    }

    ajaxUtil.doAjaxPost = function(url,data) {
        NProgress.start();
        var def = $.Deferred();
        $.ajax({
            type: "POST",
            url: url,
            data:data,
            success: function (msg) {
                NProgress.done();
                log(url,data);
                try{
                    if(msg.status == -999) {
                        logUtil.log('页面过期');
                        window.location.reload();
                    }

                } catch (e) {

                }
                def.resolve(msg);
            },
            timeout:TIMEOUT,
            error:function(msg) {
                NProgress.done();
                log(url,data);
                commonUtil.toast('网络请求异常，请稍候重试');
                def.resolve(msg);
            }
        });
        return def.promise();
    };

    ajaxUtil.doAjaxGet = function(url,data) {
       NProgress.start();
        var def = $.Deferred();
        $.ajax({
            type: "GET",
            url: url,
            data:data,
            success: function (msg) {
                NProgress.done();
                log(url,data);
                try{
                    if(msg.status == -999) {
                        logUtil.log('页面过期');
                        window.location.reload();
                    }

                } catch (e) {

                }
                def.resolve(msg);
            },
            timeout:TIMEOUT,
            error:function(msg) {
                NProgress.done();
                log(url,data);
                commonUtil.toast('网络请求异常，请稍候重试');
                def.resolve(msg);
            }
        });
        return def.promise();
    };

    ajaxUtil.doAjaxPut = function(url,data) {
       NProgress.start();
        var def = $.Deferred();
        $.ajax({
            type: "PUT",
            url: url,
            data:data,
            success: function (msg) {
                NProgress.done();
                log(url,data);
                try{
                    if(msg.status == -999) {
                        logUtil.log('页面过期');
                        window.location.reload();
                    }

                } catch (e) {

                }
                def.resolve(msg);
            },
            timeout:TIMEOUT,
            error:function(msg) {
                NProgress.done();
                log(url,data);
                commonUtil.toast('网络请求异常，请稍候重试');
                def.resolve(msg);
            }
        });
        return def.promise();
    };

    ajaxUtil.doAjaxDelete = function(url,data) {
       NProgress.start();
        var def = $.Deferred();
        $.ajax({
            type: "DELETE",
            url: url,
            data:data,
            success: function (msg) {
                NProgress.done();
                log(url,data);
                try{
                    if(msg.status == -999) {
                        logUtil.log('页面过期');
                        window.location.reload();
                    }

                } catch (e) {

                }
                def.resolve((msg));
            },
            timeout:TIMEOUT,
            error:function(msg) {
                NProgress.done();
                log(url,data);
                commonUtil.toast('网络请求异常，请稍候重试');
                def.resolve(msg);
            }
        });
        return def.promise();
    };

    ajaxUtil.doAjaxLoad = function(domNode,url,args) {
       NProgress.start();
        var def = $.Deferred();

        domNode.load(url,args,function(ret){
            NProgress.done();

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

    ajaxUtil.ajaxGetPage = function(url,data) {
        NProgress.start();
        var def = $.Deferred();
        $.ajax({
            type: "GET",
            url: url,
            data:data,
            success: function (msg) {
                NProgress.done();
                try{
                    if(msg.status == -999) {
                        logUtil.log('页面过期');
                        window.location.reload();
                    }

                } catch (e) {

                }
                def.resolve(msg);
            },
            timeout:TIMEOUT,
            error:function(msg) {
                NProgress.done();
                commonUtil.toast('网络请求异常，请稍候重试');
                def.resolve(msg);
            }
        });
        return def.promise();
    };

    exports('ajaxUtil', ajaxUtil);
});