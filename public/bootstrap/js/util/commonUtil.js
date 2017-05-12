/**
 * Created by W.J.Chang on 2015/1/15.
 */
define(function(require,exports) {
    var commonUtil = {};

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = decodeURIComponent(window.location.search).substr(1).match(reg);
        if (r != null) return r[2]; return null;
    }

    commonUtil.getArgs = function(name) {
        return getQueryString(name);
    };

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



    commonUtil.toast = function(msg) {
        layer.msg(msg,{offset:'300px',time:2000});
    };

    commonUtil.uuidFast = function() {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''), uuid = new Array(36), rnd=0, r;
        for (var i = 0; i < 36; i++) {
            if (i==8 || i==13 ||  i==18 || i==23) {
                uuid[i] = '-';
            } else if (i==14) {
                uuid[i] = '4';
            } else {
                if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
        return uuid.join('');
    };

    /**
     * 获取当前网址的特定参数值
     * argName
     * @returns {String}
     */
    commonUtil.getRequestArg = function (argName) {
        var url = window.location.href; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(url.indexOf("?") + 1, url.length);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest[argName];
    }

    /**
     * 读取cookies
     * @param name {string} 要读取的cookie值，比如userID
     * @returns {string}
     * 例子 getCookie("userID")
     */
    commonUtil.getCookie = function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return decodeURIComponent(arr[2]);
        else
            return null;
    }

    /**
     * 写入cookie
     * @param name 要写的cookie名
     * @param value cookie值
     * @param expireDays 过期时间，单位为天
     * @param domain 传null即可
     * @param path 存储路径，如果是根目录，就传/就行了
     * @param secure 传null即可
     * 例子：setCookie("trajectoryUserId","abc123",365,null,"/",null);
     */
    commonUtil.setCookie = function (name, value, expireDays, domain, path, secure) {
        if (null == expireDays || 0 >= expireDays) var n = 300;
        var r = new Date;
        r.setTime(r.getTime() + expireDays * 24 * 60 * 60 * 1e3);
        var text = name + "=" + escape(value) + ";" + "expires=" + r.toGMTString();
        if (domain) {
            text += '; domain=' + domain;
        }
        if (path) {
            text += '; path=' + path;
        }
        if (secure) {
            text += '; secure';
        }
        document.cookie = text;
    };

    commonUtil.isContains = function(arr,item) {
        var flag = false;
        for(var i=0; i<arr.length; i++) {
            if(arr[i] == item) {
                flag = true;
                break;
            }
        }

        return flag;
    };

    exports.commonUtil = commonUtil;
});