/**
 * Created by jhzhang on 2017/5/12.
 */
define(function(require,exports) {
    var ajaxUtil = require('util/ajaxUtil').ajaxUtil;
    var commonUtil = require('util/commonUtil').commonUtil;

    var urls = {};
    urls.reset_password = '/admin/user/reset-password';

    var ctrl = {};
    ctrl.admin_reset_panel = $('#admin_reset_panel');

    function init() {
        bindEvent();
    }

    function bindEvent() {
        ctrl.admin_reset_panel.find('button:eq(-1)').bind('click',function(){
            ctrl.admin_reset_panel.find('input:eq(0)').val('');
            ctrl.admin_reset_panel.find('input:eq(1)').val('');
            ctrl.admin_reset_panel.find('input:eq(2)').val('');
        });

        ctrl.admin_reset_panel.find('button:eq(-2)').bind('click',function(){
            var args = {
                old_pwd:$.trim( ctrl.admin_reset_panel.find('input:eq(0)').val()),
                new_pwd:$.trim( ctrl.admin_reset_panel.find('input:eq(1)').val()),
                new_pwd_confirm:$.trim( ctrl.admin_reset_panel.find('input:eq(2)').val())

            };

            ajaxUtil.doAjaxGet(urls.reset_password,args).done(function(ret) {
                if(ret.status == 0) {
                    $('#resetPwdBtn').trigger('click');

                    commonUtil.toast(ret.msg);
                } else {
                    commonUtil.toast(ret.msg);
                }
            });
        });

    }

    //监听提交


    exports.init = init;
});