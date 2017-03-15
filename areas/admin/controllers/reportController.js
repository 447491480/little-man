/**
 * Created by chang on 2017/2/15.
 */
var reportService = require('../../../services/admin/reportService');
var sessionFilter = require('../../../filters/adminSessionFilter');

module.exports = {
    get_goodsSellReport : [sessionFilter,function(req, res) {
        var startTime = req.query.startTime || helper.getCurrentDate('YYYY-MM-DD');
        var endTime = req.query.endTime || helper.getCurrentDate('YYYY-MM-DD');

        reportService.orderStatistic(startTime,endTime,req.session.admin_login_info).then(function(data){
            res.jsonWrap(data);
        }).catch(function(err){
            console.log(err);
            res.jsonWrap(null,1,err);
        });
    }]
};