/**
 * Created by chang on 2017/2/13.
 */
var userService = require('../../../services/admin/userService');

module.exports = {
    get_checkUserLogin : function(req,res) {
        var account = req.query.account;
        var password = req.query.password;

        if(!account && !password) {
            res.jsonWrap(null,1,'用户名或者密码不能为空');
        }

        userService.checkUserLogin(account,password,req).then(function(ret){
            if(ret) {
                res.jsonWrap();
            } else {
                res.jsonWrap(null,2,'用户名或者密码错误');
            }
        });
    }
};