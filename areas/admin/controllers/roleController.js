/**
 * Created by chang on 2017/2/15.
 */
var roleService = require('../../../services/admin/roleService');
var sessionFilter = require('../../../filters/adminSessionFilter');

module.exports = {
    get_roleList: [sessionFilter, function (req, res) {
        var type = req.query.type || 0;
        roleService.getAllRoles(req.session.admin_login_info,type).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            console.log(msg);
            res.jsonWrap(null, 1, msg);
        });
    }],

    post_roleModify: [sessionFilter, function (req, res) {
        var data = {
            Id: req.body.Id,
            Rights: encodeURIComponent(req.body.Rights)
        };

        roleService.modifyRole(data).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (err) {
            console.log(err);
            res.jsonWrap(err, 1, '操作失败');
        });
    }],

    get_roleSearch: [sessionFilter, function (req, res) {
        roleService.getRoleById(req.session.admin_login_info.shop.RoleId).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            console.log(msg);
            res.jsonWrap(msg, 1, '服务器错误');

        })
    }]
};