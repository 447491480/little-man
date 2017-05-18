/**
 * Created by Administrator on 2016/9/18.
 */
define(function(require,exports) {
    var ajaxUtil = require('util/ajaxUtil').ajaxUtil;
    var logUtil = require('util/logUtil').logUtil;
    var commonUtil = require('util/commonUtil').commonUtil;

    var controls = {};
    controls.login_btn = $('#login_btn');
    controls.login_panel = $('#login_panel');

    var urls = {};
    urls.login_check = '/admin/user/check-user-login';
    urls.page_index = '/admin/page/index';

    function init() {
        bindEvent();
    }

    function bindEvent() {

        controls.login_btn.bind('click', function (e) {
            e.preventDefault();

            var account = $.trim(controls.login_panel.find('input:eq(0)').val());
            var password = $.trim(controls.login_panel.find('input:eq(1)').val());

            if (account == "" || password == "") {
                commonUtil.toast('请输入用户名和密码');
                return;
            }

            var args = {'account': account, 'password': password};

            ajaxUtil.doAjaxGet(urls.login_check, args).done(function (ret) {
                commonUtil.toast(ret.msg);
                resetInput();
                if (ret.status == 0) {
                   setTimeout(function() {
                       window.location.href = urls.page_index;
                   },200)
                }

            });
        });


        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_flat-blue',
            radioClass: 'icheckbox_flat-blue'
        });


    }

    function resetInput() {
        controls.login_panel.find('input:eq(0)').val('');
        controls.login_panel.find('input:eq(1)').val('');
    }

    exports.init = init;
});