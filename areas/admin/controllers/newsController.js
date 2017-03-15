/**
 * Created by susu on 17-2-23.
 */
var newsService = require('../../../services/admin/newsService');
var sessionFilter = require('../../../filters/adminSessionFilter');

module.exports = {
    get_queryNews : [sessionFilter, function(req, res) {
        var page = parseInt(req.query.page);
        var limit = parseInt(req.query.rows);
        var type= req.query.type;
        newsService.newsList(page, limit, type).then(function(data){
            res.jsonWrap(data);
        }).catch(function(msg){
            console.log(msg);
            res.jsonWrap(msg,1,'服务器错误');
        })
    }],
    post_saveNews : [sessionFilter, function (req, res) {
        var data = req.body;
        newsService.saveNews(data).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(msg){
            console.log(msg);
            res.jsonWrap(msg,1,'操作失败');
        })
    }],
    get_deleteNews : [sessionFilter, function(req, res){
        var Id = req.query.Id;
        newsService.deleteNews(Id).then(function(ret){
            res.jsonWrap(ret);
        }).catch(function(msg){
            console.log(msg);
            res.jsonWrap(msg,1,'操作失败');
        })
    }]
};