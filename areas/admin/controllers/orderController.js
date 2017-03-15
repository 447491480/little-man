/**
 * Created by chang on 2017/2/15.
 */
var orderService = require('../../../services/admin/orderService');
var sessionFilter = require('../../../filters/adminSessionFilter');
var pageValidate = require('../../../services/common/pageValidate');

module.exports = {
    get_query : [sessionFilter,function(req, res) {
        var pageLimit = pageValidate.requestFilter(req);
        var status = parseInt(req.query.status||0);

        orderService.queryOrder(pageLimit.page,pageLimit.limit,status,req.session.admin_login_info).then(function(data){
            res.jsonWrap(data);
        }).catch(function(err){
            console.log(err);
            res.jsonWrap(null,1,err);
        });
    }],

    get_orderStatusChange : [sessionFilter, function(req, res) {
        var id = req.query.id;
        var status = req.query.status;

        orderService.orderStatusChange(id,status).then(function(data){
            res.jsonWrap(data);
        }).catch(function(msg){
            console.log(msg);
            res.jsonWrap(msg,1,'操作失败');
        });
    }],

    get_paymentDaysList : [sessionFilter, function (req, res) {
        var pageLimit = pageValidate.requestFilter(req);

        orderService.paymentList(pageLimit.page,pageLimit.limit,req.session.admin_login_info).then(function(data){
            res.jsonWrap(data);
        }).catch(function(err){
            console.log(err);
            res.jsonWrap(err,1,'操作失败');
        });
    }],

    get_setPayment : [sessionFilter, function (req, res) {
        var id = req.query.id;
        var payment = req.query.payment;

        orderService.setPayment(id,payment).then(function(data){
            res.jsonWrap(data);
        }).catch(function(msg){
            console.log(msg);
            res.jsonWrap(msg,1,'操作失败');
        });
    }]
};