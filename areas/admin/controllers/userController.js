/**
 * Created by chang on 2017/2/14.
 */
var userService = require('../../../services/admin/userService');
var pagerService = require('../../../services/common/pagerService');

module.exports = {
    get_checkUserLogin : function(req,res) {
        var account = req.query.account;
        var password = req.query.password;

        if(!account && !password) {
            res.jsonWrap(null,1,'用户名或者密码不能为空');
        }

        userService.checkUserLogin(account,password,req).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(e){
            console.log(e);
            res.jsonWrap(null,2,e);
        });
    },

    get_query: function (req, res) {
        var keyword = req.query.keyword || '';
        var pageLimit = pagerService.requestFilter(req);

        userService.queryUser(pageLimit.page,pageLimit.limit,keyword).then(function(data) {
            res.jsonWrap(data);
        }).catch(function(e){
            console.log(e);
            res.jsonWrap(null,1,e);
        });
    },

    post_save: function (req, res) {
        var data = {
            account : req.body.account || '',
            password : req.body.password || '',
            rights : req.body.rights,
            id : req.body.id
        };

        if(!data.account || !data.password) {
            res.jsonWrap(null,1,'用户名或者密码不能为空');
        }

        userService.saveUser(data).then(function(msg){
            res.jsonWrap(msg);
        }).catch(function(e){
            console.log(e);
            res.jsonWrap(null,1,e);
        });
    },

    get_delete: function (req, res) {
        var id = req.query.id;
        userService.deleteUser(id).then(function(msg){
            res.jsonWrap(msg);
        }).catch(function(e){
            console.log(e);
            res.jsonWrap(null,1,e);
        });
    },

    get_resetPassword : function(req,res) {
        var old_pwd = req.query.old_pwd;
        var new_pwd = req.query.new_pwd;
        var new_pwd_confirm = req.query.new_pwd_confirm;

        if(!old_pwd || !new_pwd || !new_pwd_confirm) {
            res.jsonWrap(null,2,'输入项不能为空');
        }

        if(new_pwd !== new_pwd_confirm) {
            res.jsonWrap(null,2,'两次输入的新密码不一致');
        }

        userService.resetPassword(req.session.admin_login_info.id,old_pwd,new_pwd).then(function(msg){
            res.jsonWrap(msg);
        }).catch(function(e){
            console.log(e);
            res.jsonWrap(null,1,e);
        });
    }
};