/**
 * Created by chang on 2017/2/9.
 */
const menuService = require('../../../services/admin/menu');
const sessionFilter = require('../../../filters/adminSessionFilter');

module.exports = {
    get_index: [sessionFilter,function (req, res) {
        menuService.getUserMenu(req.session.admin_login_info.id).then(function (data) {
            // res.jsonWrap(data);
            // res.jsonWrap(req.session.admin_login_info);
            res.render('admin/admin.html',{data:data,account:req.session.admin_login_info.account});
        }).catch(function(error) {
            console.log(error);
            res.jsonWrap(error,1,'服务器异常');
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
        res.jsonWrap();
    },

    post_getPart : [sessionFilter, function (req, res) {
        let page = req.body.page;
        res.render('admin/'+page);
    }],

    get_updateSession : [sessionFilter, function(req, res){
        res.jsonWrap();
    }]
};