/**
 * Created by Administrator on 2016/9/18.
 */
layui.define(['commonUtil','ajaxUtil','logUtil'],function (exports) {
    var ajaxUtil = layui.ajaxUtil;
    var logUtil = layui.logUtil;
    var commonUtil = layui.commonUtil;
    var $ = layui.jquery;

    var controls = {};
    controls.login_btn = $('#login_btn');
    controls.login_panel = $('#login_panel');

    var urls = {};
    urls.login_check = '/admin/login/check-user-login';
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
                    window.location.href = urls.page_index;
                }

            });
        });

    }

    function resetInput() {
        controls.login_panel.find('input:eq(0)').val('');
        controls.login_panel.find('input:eq(1)').val('');
    }

    exports('login',(function(){
        init();
    })());
});