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



    commonUtil.getDateString = function (date) {
        if(date == null || date == '0000-00-00 00:00:00' || date == "" || date == "1970/1/1") {
            return '';
        }
        var temp = new Date(date);
        return temp.getFullYear() + '/' + (temp.getMonth() + 1) + '/' + temp.getDate();
    };

    commonUtil.getTimeString = function (date) {
        if(date == null || date == '0000-00-00 00:00:00' || date == "" || date == "1970/1/1") {
            return '';
        }

        var temp = new Date(date);
        return temp.getFullYear() + '/' + (temp.getMonth() + 1) + '/' + temp.getDate() + ' ' + temp.getHours() + ':' + temp.getMinutes();
    };


    commonUtil.filter =function(arr) {
        if(Object.prototype.toString.call(arr) == '[object Array]') { //判断是否为数组
            for(var i=0; i<arr.length; i++) {
                for(var item in arr[i]) {

                    if(arr[i].hasOwnProperty(item) && (arr[i][item] == 0 || arr[i][item] == null || arr[i][item] == '0000-00-00 00:00:00' || arr[i][item] == "1970/1/1")) {
                        arr[i][item] = '';
                    }
                }
            }
        } else if(Object.prototype.toString.call(arr) == '[object Object]') { // 判读是否为对象
            for(var item in arr) {

                if(arr.hasOwnProperty(item) && (arr[item] == 0 || arr[item] == null || arr[item] == '0000-00-00 00:00:00' || arr[item] == "1970/1/1")) {
                    arr[item] = '';
                }
            }
        } else if(arr == null || arr == undefined || arr == '0000-00-00 00:00:00' || arr == "1970/1/1") {
            arr = ''
        }

        return arr;
    };

    commonUtil.gotoEmail = function($mail) {
        $t = $mail.split('@')[1];
        $t = $t.toLowerCase();
        if ($t == '163.com') {
            return 'mail.163.com';
        } else if ($t == 'vip.163.com') {
            return 'vip.163.com';
        } else if ($t == '126.com') {
            return 'mail.126.com';
        } else if ($t == 'qq.com' || $t == 'vip.qq.com' || $t == 'foxmail.com') {
            return 'mail.qq.com';
        } else if ($t == 'gmail.com') {
            return 'mail.google.com';
        } else if ($t == 'sohu.com') {
            return 'mail.sohu.com';
        } else if ($t == 'tom.com') {
            return 'mail.tom.com';
        } else if ($t == 'vip.sina.com') {
            return 'vip.sina.com';
        } else if ($t == 'sina.com.cn' || $t == 'sina.com') {
            return 'mail.sina.com.cn';
        } else if ($t == 'tom.com') {
            return 'mail.tom.com';
        } else if ($t == 'yahoo.com.cn' || $t == 'yahoo.cn') {
            return 'mail.cn.yahoo.com';
        } else if ($t == 'tom.com') {
            return 'mail.tom.com';
        } else if ($t == 'yeah.net') {
            return 'www.yeah.net';
        } else if ($t == '21cn.com') {
            return 'mail.21cn.com';
        } else if ($t == 'hotmail.com') {
            return 'www.hotmail.com';
        } else if ($t == 'sogou.com') {
            return 'mail.sogou.com';
        } else if ($t == '188.com') {
            return 'www.188.com';
        } else if ($t == '139.com') {
            return 'mail.10086.cn';
        } else if ($t == '189.cn') {
            return 'webmail15.189.cn/webmail';
        } else if ($t == 'wo.com.cn') {
            return 'mail.wo.com.cn/smsmail';
        } else if ($t == '139.com') {
            return 'mail.10086.cn';
        } else if ($t == 'iflytek.com') {
            return 'mail.iflytek.com';
        }  else {
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