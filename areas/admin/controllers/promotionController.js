/**
 * Created by chang on 2017/2/14.
 */
var promotionService = require('../../../services/admin/promotionService');
var sessionFilter = require('../../../filters/adminSessionFilter');
var pageValidate = require('../../../services/common/pageValidate');

module.exports = {
    // 查询我创建的活动
    get_queryAll: [sessionFilter, function (req, res) {
        var pageLimit = pageValidate.requestFilter(req);

        promotionService.getPromotionList(pageLimit.page, pageLimit.limit, req.session.admin_login_info).then(function (data) {
            res.jsonWrap(data);
        }).catch(function (msg) {
            console.log(msg);
            res.jsonWrap(msg, 1, '服务器错误');
        })
    }],

    // 添加、修改我创建的活动
    post_save: [sessionFilter, function (req, res) {
        var data = req.body;

        promotionService.savePromotion(data, req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (msg) {
            console.log(msg);
            res.jsonWrap(msg, 1, msg);
        })
    }],

    // 删除我创建的活动
    get_delete: [sessionFilter, function (req, res) {
        var id = req.query.Id;

        promotionService.deletePromotion(id).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (msg) {
            console.log(msg);
            res.jsonWrap(msg, 1, '操作失败');
        })
    }],

    // 获取活动详情
    get_promotionDetail: [sessionFilter, function(req, res){
        var id = req.query.id;
        promotionService.getPromotionDetail(id).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (msg) {
            console.log(msg);
            res.jsonWrap(msg, 1, '操作失败');
        })
    }],

    // 活动我参与的活动列表
    get_assistPromotionList : [sessionFilter, function (req, res) {
        var pageLimit = pageValidate.requestFilter(req);
        var keyword = req.query.keyword || '';
        promotionService.assistPromotionList(pageLimit.page,pageLimit.limit,keyword,req.session.admin_login_info).then(function (ret) {
            res.jsonWrap(ret);
        }).catch(function (msg) {
            console.log(msg);
            res.jsonWrap(msg, 1, '操作失败');
        })
    }]

};