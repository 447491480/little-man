/**
 * Created by chang on 2017/2/10.
 */
var menuService = require('../../../services/admin/menuService');

module.exports = {
    get_getMenu: function (req, res) {
        menuService.readMenuYmal().then(function(data){
            res.jsonWrap(data);
        }).catch(function(err){
            res.jsonWrap(null,1,err);
        });
    }
};