/**
 * Created by chang on 2017/2/14.
 */
var userService = require('../../../services/admin/userService');

module.exports = {
    get_query: function (req, res) {
        userService.queryUser(1,10,'').then(function(data) {
            res.jsonWrap(data);
        })
    },

    post_save: function (req, res) {
        var data = {
            account : req.body.account,
            password : req.body.password,
            rights : req.body.rights,
            id : req.body.id
        };
        userService.saveUser(data).then(function(msg){
            res.jsonWrap(msg);
        }).catch(function(msg){
            res.jsonWrap(null,2,msg);
        });
    },

    get_delete: function (req, res) {
        var id = req.query.id;
        userService.deleteUser(id).then(function(msg){
            res.jsonWrap(msg);
        })
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
        }).catch(function(msg){
            res.jsonWrap(null,1,msg);
        })
    }
};