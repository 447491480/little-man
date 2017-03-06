/**
 * Created by chang on 14/11/1.
 */
layui.define([],function(exports) {
    var isDebug = true;
    var logUtil = {};

    logUtil.log = function(msg) {
        if(isDebug) {
            console.log(msg);
        }
    };

    logUtil.error = function(msg) {
        if(isDebug) {
            console.log(msg);
        }
    };

    exports('logUtil',logUtil);
});