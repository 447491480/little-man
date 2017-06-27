/**
 * Created by chang on 2017/2/10.
 */
const menuService = require('../../../services/admin/menu');
const sessionFilter = require('../../../filters/adminSessionFilter');

module.exports = {
    get_getMenu: [sessionFilter,function (req, res) {
        let data = menuService.readMenuConfig();
        res.jsonWrap(data);
    }]
};