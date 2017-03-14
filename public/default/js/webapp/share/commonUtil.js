/**
 * Created by W.J.Chang on 2015/1/15.
 */
layui.define(['layer', 'logUtil'], function (exports) {
    var commonUtil = {};
    var logUitl = layui.logUtil;
    var layer = layui.layer;

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = decodeURIComponent(window.location.search).substr(1).match(reg);
        if (r != null) return r[2];
        return null;
    }

    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
    // 例子：
    // (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
    // (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    Date.prototype.format = function(fmt) {
        var o = {
            "M+": this.getMonth() + 1,                      //月份
            "d+": this.getDate(),                           //日
            "h+": this.getHours(),                          //小时
            "m+": this.getMinutes(),                        //分
            "s+": this.getSeconds(),                        //秒
            "q+": Math.floor((this.getMonth() + 3) / 3),    //季度
            "S": this.getMilliseconds()                     //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    commonUtil.getArgs = function (name) {
        return getQueryString(name);
    };

    commonUtil.getDateString = function (date, join) {
        join = join || '/';
        if (date == null || date == '0000/00/00 00:00:00' || date == "" || date == "1970/1/1") {
            return '';
        }
        return (new Date(date).format('yyyy'+join+'MM'+join+'dd'));
    };

    commonUtil.getTimeString = function (date, join) {
        join = join || '/';
        if (date == null || date == '0000/00/00 00:00:00' || date == "" || date == "1970/1/1") {
            return '';
        }

        return (new Date(date).format('yyyy'+join+'MM'+join+'dd hh:mm:ss'));
    };

    commonUtil.filter = function (arr) {
        try {
            if (Object.prototype.toString.call(arr) == '[object Array]') { //判断是否为数组
                for (var i = 0; i < arr.length; i++) {
                    for (var item in arr[i]) {

                        if (arr[i].hasOwnProperty(item) && (arr[i][item] == 0 || arr[i][item] == null || arr[i][item] == '0000/00/00 00:00:00' || arr[i][item] == "1970/1/1")) {
                            arr[i][item] = '';
                        }
                    }
                }
            } else if (Object.prototype.toString.call(arr) == '[object Object]') { // 判读是否为对象
                for (var item in arr) {

                    if (arr.hasOwnProperty(item) && (arr[item] == 0 || arr[item] == null || arr[item] == '0000/00/00 00:00:00' || arr[item] == "1970/1/1")) {
                        arr[item] = '';
                    }
                }
            } else if (arr == null || arr == undefined || arr == '0000/00/00 00:00:00' || arr == "1970/1/1") {
                arr = ''
            }

            return arr;
        } catch (e) {
            logUitl.log(e);
            return '';
        }
    };

    commonUtil.toast = function (msg) {
        if(typeof msg !== 'string') {
            msg = JSON.stringify(msg);
        }

        layer.msg(msg, {offset: '300px', time: 2000});
    };

    commonUtil.uuidFast = function () {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''), uuid = new Array(36), rnd = 0, r;
        for (var i = 0; i < 36; i++) {
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                uuid[i] = '-';
            } else if (i == 14) {
                uuid[i] = '4';
            } else {
                if (rnd <= 0x02) rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
        return uuid.join('');
    };

    commonUtil.isContains = function (arr, item) {
        var flag = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == item) {
                flag = true;
                break;
            }
        }

        return flag;
    };

    commonUtil.htmlDecode = function (s) {
        var div = document.createElement('div');
        div.innerHTML = s;
        return div.innerText || div.textContent;
    };

    exports('commonUtil', commonUtil);
});