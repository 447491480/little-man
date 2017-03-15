/**
 * Created by chang on 2017/2/10.
 */
var menuService = require('../../../services/admin/menuService');
var sessionFilter = require('../../../filters/adminSessionFilter');

module.exports = {
    get_getMenu: [sessionFilter,function (req, res) {
        menuService.readMenuYmal().then(function(data){
            res.jsonWrap(data);
        }).catch(function(err){
            console.log(err);
            res.jsonWrap(null,1,err);
        });
    }]
};