/**
 * Created by chang on 2017/2/9.
 */
var menuService = require('../../../services/admin/menuService');
var sessionFilter = require('../../../filters/adminSessionFilter');

module.exports = {
    get_index: [sessionFilter,function (req, res) {
        menuService.getUserMenu(req.session.admin_login_info.id).then(function (data) {
            // res.jsonWrap(data);
            res.render('admin/admin.html',{data:data,account:req.session.admin_login_info.account});
        }).catch(function(error) {
            console.log(error);
        });
    }],

    get_login: function (req, res) {
        if(req.session.admin_login_info) {
            res.redirect('/admin/page/index');
        } else {
            res.render('admin/login');
        }

    },

    get_logout : function (req, res) {
        req.session.admin_login_info = null;
        res.redirect('/admin/page/login')
    },

    get_getPart : [sessionFilter, function (req, res) {
        var page = req.query.page;
        res.render('admin/'+page);
    }]
};