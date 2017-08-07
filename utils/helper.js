/**
 * Created by chang on 2017/2/14.
 */
const moment = require('moment');
const uuidV1 = require('uuid/v1');
const uuidV4 = require('uuid/v4');
const md5 = require('md5');

module.exports = {
    uuid: function (dna) {
        dna = dna || '';
        return uuidV4().substr(9,27) +  '-'+ uuidV1().substr(24,12) + '-' + md5(dna).substr(0,5)
    },

    uuidV1: function () {
        return uuidV1();
    },

    uuidV4: function () {
        return uuidV4();
    },

    now: function (fmt) {
        fmt = fmt || "YYYY-MM-DD HH:mm:ss";
        return moment().format(fmt);
    },

    md5: function (msg) {
        return md5(msg);
    },

    rdmFlowNo : function () {
        return this.now('YYYYMMDDHHmmss') + Math.floor(Math.random() * 10000000000000000);
    },

    parse: function (msg) {
        return JSON.parse(JSON.stringify(msg));
    }
};