/**
 * Created by chang on 14/12/6.
 */
define(function(require, exports) {
    var validationUtil = {};

    // 正整数
    validationUtil.isPositiveWholeNumber = function(n) {
        return /^[0-9]*[1-9][0-9]*$/.test(n);
    };

    // 整数
    validationUtil.isWholeNumber = function(n) {
        return /^[0-9]*$/.test(n);
    };

    // 以1开头的11位数字
    validationUtil.isCellPhone = function(n) {
        return /^1\d{10}$/.test(n);
    };

    // 验证规则：姑且把邮箱地址分成“第一部分@第二部分”这样
    // 第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
    // 第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
    // 而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位
    validationUtil.isEmail = function(n) {
        return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(n);
    };


    validationUtil.isPrice = function(n) {
        return /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(n);
    };

    //判断字符由字母和数字下划线组成.且开头的只能是下数字和字母
    validationUtil.isRightAccount = function(n) {
        return /^([a-zA-z0-9]{1})([\w_]*)$/g.test(n);
    };
    
    exports.validationUtil = validationUtil;
});