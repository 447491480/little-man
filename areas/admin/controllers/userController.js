/**
 * Created by chang on 2017/2/14.
 */
var userService = require('../../../services/admin/userService');
var sessionFilter = require('../../../filters/adminSessionFilter');

module.exports = {
    // 修改密码
    get_resetPassword: [sessionFilter, function (req, res) {
        var old_pwd = req.query.old_pwd;
        var new_pwd = req.query.new_pwd;
        var new_pwd_confirm = req.query.new_pwd_confirm;

        if (!old_pwd || !new_pwd || !new_pwd_confirm) {
            res.jsonWrap(null, 2, '输入项不能为空');
        }

        if (new_pwd !== new_pwd_confirm) {
            res.jsonWrap(null, 2, '两次输入的新密码不一致');
        }

        userService.resetPassword(req.session.admin_login_info.Id, old_pwd, new_pwd).then(function (msg) {
            res.jsonWrap(msg);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(null, 1, msg);
        })
    }],

    // 查询客户
    get_queryAll: [sessionFilter, function (req, res) {
        var page = parseInt(req.query.page);
        var limit = parseInt(req.query.rows);
        var keyword = req.query.keyword;

        userService.queryUser(page, limit,keyword,req.session.admin_login_info).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(msg, 1, '服务器错误');
        })
    }],
    get_enterpriseQuery: [sessionFilter, function (req, res) {
        var data = {};
        data.shopId = req.session.admin_login_info.shop.Id;
        userService.queryEnterprise(data).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(msg, 1, '服务器错误');
        })
    }],

    // 保存客户
    post_save: [sessionFilter, function (req, res) {
        var data = req.body;
        if(!data.RoleId) {
            res.jsonWrap(null, 1, '角色为必填项');
            return;
        }

        userService.saveUser(data,req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(msg, 1, '服务器错误');
        })
    }],

    //修改企业信息
    post_enterpriseEdit: [sessionFilter, function (req, res) {
       var data = req.body;
       //console.log(helper.parse(data));
       userService.editEnterprise(data).then(function (ret) {
           res.jsonWrap(ret);
       }).catch(function (msg) {
           //console.log(msg);
           res.jsonWrap(msg, 1, '服务器错误');
       })
    }],

    // 删除客户
    get_delete: [sessionFilter, function (req, res) {
        var id = req.query.id;

        userService.deleteUser(id).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(msg) {
            //console.log(msg);
            res.jsonWrap(msg,1,'操作失败');
        })
    }],

    // 设置为我的下级
    get_relation : [sessionFilter, function (req, res) {
        var sid = req.query.sid;
        userService.setRelation(req.session.admin_login_info.shop.Id,sid).then(function(data){
            res.jsonWrap(data);
        }).catch(function(msg) {
            //console.log(msg);
            res.jsonWrap(msg,1,msg);
        })
    }],

    // 获取我的下级列表
    get_relationList : [sessionFilter, function(req, res){
        var page = parseInt(req.query.page);
        var limit = parseInt(req.query.rows);
        var keyword = req.query.keyword;
        userService.getAllRelation(page,limit,keyword,req.session.admin_login_info.shop.Id).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(msg, 1, '服务器错误');
        })
    }],

    // 删除下级
    get_relationDelete : [sessionFilter, function(req, res){
        var id = req.query.id;

        userService.deleteRelation(id).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(msg) {
            //console.log(msg);
            res.jsonWrap(msg,1,'操作失败');
        })
    }],

    get_setPaymentDays : [sessionFilter, function(req, res){
        var id = req.query.id;
        var days = req.query.days||0;

        userService.setPaymentDays(id,days).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(msg) {
            //console.log(msg);
            res.jsonWrap(msg,1,'操作失败');
        })
    }],

    // 获取我的上级列表
    get_leaderList : [sessionFilter, function(req, res){
        var page = parseInt(req.query.page);
        var limit = parseInt(req.query.rows);
        var keyword = req.query.keyword || '';
        userService.getAllLeader(page,limit,keyword,req.session.admin_login_info.shop.Id).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(msg, 1, '服务器错误');
        })
    }],

    //获取子账号列表
    get_memberQuery : [sessionFilter, function (req, res) {
        var page = parseInt(req.query.page);
        var limit = parseInt(req.query.rows);
        var data = {
            type:req.query.type,
            shopid:req.session.admin_login_info.shop.Id
        };
        if(req.query.isdel)
        {
            data.IsDel = req.query.isdel;
        }
        userService.queryMember(page,limit,data).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(msg, 1, '服务器错误');
        })
    }],
    //删除子账号
    get_memberDelete : [sessionFilter, function (req, res) {
        userService.deleteMember(req.query.Id).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            res.jsonWrap(msg, 1, '服务器错误');
        })
    }],
    //修改子账号
    get_memberSave : [sessionFilter, function(req, res) {
        var data = {};
        if (req.query.Id) {
            data.Id = req.query.Id;
            if (req.query.IsDel) {
                data.IsDel = req.query.IsDel;
            } else {
                data.canAppLogin = req.query.canAppLogin;
                data.Rights = encodeURIComponent(req.query.Rights);
                data.Department = req.query.Department;
            }
        } else
        {
            data.MemberAccount = req.query.MemberAccount;
            data.Rights = encodeURIComponent(req.query.Rights);
            data.canAppLogin = req.query.canAppLogin;
            data.ShopId = req.session.admin_login_info.shop.Id;
            data.Department = req.query.Department;
        }
        userService.saveMember(data).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(msg, 1, '服务器错误');
        })
    }]
};