/**
 * Created by chang on 2017/2/14.
 */
var moment = require('moment');
var uuidV1 = require('uuid/v1');
var uuidV4 = require('uuid/v4');
var md5 = require('md5');

module.exports = {
    filterDate: function (arr, key) {
        if (Object.prototype.toString.call(arr) == '[object Array]') { //判断是否为数组
            for (var i = 0; i < arr.length; i++) {
                for (var k in arr[i]) {

                    if (arr[i].hasOwnProperty(k) && k == key) {
                        arr[i][k] = moment(arr[i][k]).format("YYYY-MM-DD HH:mm:ss") !== 'Invalid date' ? moment(arr[i][k]).format("YYYY-MM-DD HH:mm:ss") : '';
                    }
                }
            }
        } else if (Object.prototype.toString.call(arr) == '[object Object]') { // 判读是否为对象
            for (var item in arr) {

                if (arr.hasOwnProperty(item) && item == key) {
                    arr[item] = moment(arr[item]).format("YYYY-MM-DD HH:mm:ss") !== 'Invalid date' ? moment(arr[item]).format("YYYY-MM-DD HH:mm:ss") : '';
                }
            }
        } else if (key == undefined) {
            arr = moment(arr).format("YYYY-MM-DD HH:mm:ss") !== 'Invalid date' ? moment(arr).format("YYYY-MM-DD HH:mm:ss") : '';
        }

        return arr;
    },

    genTimeBaseUUID : function(){
        return uuidV1();
    },

    genRandomBaseUUID : function () {
        return uuidV4();
    },

    getCurrentDate : function () {
        return moment().format("YYYY-MM-DD HH:mm:ss");
    },

    md5 : function(msg) {
        return md5(msg);
    },

    parse : function(msg) {
        return JSON.parse(JSON.stringify(msg));
    }
};