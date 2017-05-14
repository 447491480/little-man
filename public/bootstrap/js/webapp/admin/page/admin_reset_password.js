/**
 * Created by jhzhang on 2017/5/12.
 */
layui.use(['form', 'ajaxUtil'], function(){
    var form = layui.form();
    var ajaxUtil = layui.ajaxUtil;
    var commonUtil = layui.commonUtil;
    var $ = layui.jquery;

    var urls = {};
    urls.reset_password = '/admin/user/reset-password';

    //监听提交
    form.on('submit(reset_password)', function(data){
        ajaxUtil.doAjaxGet(urls.reset_password,data.field).done(function(ret) {
            if(ret.status == 0) {
                $('#resetPwdBtn').trigger('click');

                commonUtil.toast(ret.msg);
            } else {
                commonUtil.toast(ret.msg);
            }
        });
        return false;
    });
});