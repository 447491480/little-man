module.exports = function (req, res, next) {
    if(!req.session.admin_login_info) {
        if(req.xhr || /json/i.test(req.headers.accept)) {
            res.jsonWrap(null,-999,'SESSION失效,请重新登录');
        } else {
            res.redirect('/admin/page/login')
        }
    } else {
        next();
    }
};