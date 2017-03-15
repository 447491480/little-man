/**
 * Created by chang on 2017/2/25.
 */

var treeService = require('../../../services/admin/treeService');
var sessionFilter = require('../../../filters/adminSessionFilter');
var pageValidate = require('../../../services/common/pageValidate');

module.exports = {
    // 获取区域列表
    get_regionList: [sessionFilter, function (req, res) {
        var id = req.query.id || '0';
        treeService.getParents(id, 0, req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (e) {
            console.log(e);
            res.jsonWrap(e, 1, '操作失败');
        })
    }],
    get_nodesQuery: [sessionFilter, function (req, res) {
        treeService.queryNodes(req.query,req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (msg) {
            console.log(msg);
            res.jsonWrap(msg, 1, '操作失败');
        })
    }],

    // 修改、添加区域
    post_saveRegion : [sessionFilter, function(req, res) {
        var data = req.body;
        data.Type = 0;
        treeService.saveNode(data,req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (e) {
            console.log(e);
            res.jsonWrap(e, 1, '操作失败');
        })
    }],

    // 删除区域节点
    get_deleteRegion : [sessionFilter, function(req, res){
        var Id = req.query.Id;
        treeService.deleteNode(Id).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (e) {
            console.log(e);
            res.jsonWrap(e, 1, '操作失败');
        })
    }],

    // 获取组织机构列表
    get_organizationList: [sessionFilter, function (req, res) {
        var id = req.query.id || '0';
        treeService.getParents(id, 1, req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (e) {
            console.log(e);
            res.jsonWrap(e, 1, '操作失败');
        })
    }],

    // 修改、添加组织机构
    post_saveOrganization : [sessionFilter, function(req, res) {
        var data = req.body;
        data.Type = 1;
        treeService.saveNode(data,req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (e) {
            console.log(e);
            res.jsonWrap(e, 1, '操作失败');
        })
    }],

    // 删除组织机构节点
    get_deleteOrganization : [sessionFilter, function(req, res){
        var Id = req.query.Id;
        treeService.deleteNode(Id).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (e) {
            console.log(e);
            res.jsonWrap(e, 1, '操作失败');
        })
    }]
};