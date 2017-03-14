/**
 * Created by chang on 2017/2/14.
 */
var goodsService = require('../../../services/admin/goodsService');
var sessionFilter = require('../../../filters/adminSessionFilter');
var pageValidate = require('../../../services/common/pageValidate');

module.exports = {
    // 查询商品列表
    get_queryAll: [sessionFilter, function (req, res) {
        var page = parseInt(req.query.page);
        var limit = parseInt(req.query.rows);
        var IsEnable = parseInt(req.query.IsEnable || -1);

        goodsService.goodsList(page, limit,IsEnable, req.session.admin_login_info).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(msg, 1, '服务器错误');
        })
    }],

    // 添加|修改商品
    post_save: [sessionFilter, function (req, res) {
        var data = req.body;

        goodsService.saveGoods(data, req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(msg, 1, '操作失败');
        })
    }],

    // 删除商品
    get_delete: [sessionFilter, function (req, res) {
        var id = req.query.id;

        goodsService.deleteGoods(id, req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (msg) {
            //console.log(msg);
            res.jsonWrap(msg, 1, '操作失败');
        })
    }],

    // 获取我的上级商品
    get_leaderGoods: [sessionFilter, function (req, res) {
        var pageInfo = pageValidate.requestFilter(req);

        goodsService.getLeaderGoods(pageInfo.page, pageInfo.limit, req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (e) {
            //console.log(e);
            res.jsonWrap(e, 1, '操作失败');
        })
    }],

    // 保存选择的上级商品
    post_saveSelect : [sessionFilter, function(req, res){
        var goods = JSON.parse(req.body.goods);

        goodsService.saveLeaderGoods(goods,req.session.admin_login_info).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function (e) {
            //console.log(e);
            res.jsonWrap(e, 1, '操作失败');
        });
    }],

    get_brandList : [sessionFilter, function(req, res){
        var pageLimit = pageValidate.requestFilter(req);
        goodsService.listBrand(pageLimit.page,pageLimit.limit).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(e){
            //console.log(e);
            res.jsonWrap(e,1,'操作失败');
        })
    }],

    post_saveBrand : [sessionFilter, function (req, res) {
        var data = req.body;
        goodsService.saveBrand(data).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(e){
            //console.log(e);
            res.jsonWrap(e,1,'操作失败');
        })
    }],

    get_deleteBrand : [sessionFilter, function(req, res){
        var Id = req.query.Id;
        goodsService.deleteBrand(Id).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(e){
            //console.log(e);
            res.jsonWrap(e,1,'操作失败');
        })
    }],

    get_categoryList : [sessionFilter, function(req, res){
        var pageLimit = pageValidate.requestFilter(req);
        var type = req.query.type || 0; // 0=平台分类，1=我的分类
        goodsService.listCategory(pageLimit.page,pageLimit.limit,type,req.session.admin_login_info).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(e){
            //console.log(e);
            res.jsonWrap(e,1,'操作失败');
        })
    }],

    post_saveCategory : [sessionFilter, function (req, res) {
        var data = req.body;
        goodsService.saveCategory(data,req.session.admin_login_info).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(e){
            //console.log(e);
            res.jsonWrap(e,1,'操作失败');
        })
    }],

    get_deleteCategory : [sessionFilter, function(req, res){
        var Id = req.query.Id;
        goodsService.deleteCategory(Id).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(e){
            //console.log(e);
            res.jsonWrap(e,1,'操作失败');
        })
    }]
};