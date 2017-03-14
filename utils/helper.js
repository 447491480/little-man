/**
 * Created by chang on 2017/2/14.
 */
var moment = require('moment');
var uuidV1 = require('uuid/v1');
var uuidV4 = require('uuid/v4');
var md5 = require('md5');

module.exports = {
    genTimeBaseUUID : function(){
        return uuidV1();
    },

    genRandomBaseUUID : function () {
        return uuidV4();
    },

    getCurrentDate : function (fmt) {
        fmt = fmt || "YYYY-MM-DD HH:mm:ss";
        return moment().format(fmt);
    },

    md5 : function(msg) {
        return md5(msg);
    },

    parse : function(msg) {
        return JSON.parse(JSON.stringify(msg));
    }
};