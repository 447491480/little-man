/**
 * Created by chang on 2017/2/10.
 */
var menuService = require('../../../services/admin/menu');
var sessionFilter = require('../../../filters/adminSessionFilter');

module.exports = {
    get_getMenu: [sessionFilter,function (req, res) {
        var data = menuService.readMenuConfig();
        res.jsonWrap(data);
    }]
};