/**
 * Created by chang on 2017/2/10.
 */
var readYaml = require('read-yaml');

var menuService = {
    getUserMenu: async(function (user_id) {
        return new Promise(function (resolve, reject) {
            var menus = await(menuService.readMenuYmal());

            var user = await(db.admin_user.findOne({where: {id: user_id}}));

            var user_rights = JSON.parse(user.get('rights'));

            if (user['type'] == 0) {
                resolve(menus);
                return;
            }

            // 第一次遍历筛选菜单
            for (var key = 0; key < menus['menus'].length; key++) {
                var nav_menus = menus['menus'][key]['nav_menu'];

                for (var nav_key = 0; nav_key < nav_menus.length; nav_key++) {
                    var third_menus = nav_menus[nav_key]['third_menu'];

                    for (var third_key = 0; third_key < third_menus.length; third_key++) {

                        for (var ri = 0; ri < user_rights.length; ri++) {
                            if (third_menus[third_key]['title'] == user_rights[ri]['title']
                                && user_rights[ri]['level'] == 2) {
                                third_menus[third_key]['enable'] = true;
                            }
                        }
                    }

                    for (var ri = 0; ri < user_rights.length; ri++) {
                        if (nav_menus[nav_key]['title'] == user_rights[ri]['title']
                            && user_rights[ri]['level'] == 1) {
                            nav_menus[nav_key]['enable'] = true;
                        }
                    }
                }

                for (var ri = 0; ri < user_rights.length; ri++) {
                    if (menus['menus'][key]['title'] == user_rights[ri]['title']
                        && user_rights[ri]['level'] == 0) {
                        menus['menus'][key]['enable'] = true;
                    }
                }
            }

            // 第二次遍历去除无效菜单
            for (var key = 0; key < menus['menus'].length; key++) {
                var nav_menus = menus['menus'][key]['nav_menu'];


                for (var nav_key = 0; nav_key < nav_menus.length; nav_key++) {
                    var third_menus = nav_menus[nav_key]['third_menu'];

                    for (var third_key = 0; third_key < third_menus.length; third_key++) {


                        if (third_menus[third_key]['enable'] == undefined) {
                            delete third_menus[third_key];
                            // third_menus.splice(third_key,1);
                        }
                    }

                    if (nav_menus[nav_key]['enable'] == undefined) {
                        delete nav_menus[nav_key];
                        // nav_menus.splice(nav_key,1);
                    }
                }

                if (menus['menus'][key]['enable'] == undefined) {
                    delete menus['menus'][key];
                    // menus['menus'].splice(key,1);
                }
            }

            resolve(menus);
        });
    }),

    readMenuYmal: function () {
        return new Promise(function (resolve, reject) {
            readYaml('config/admin.yaml', function (err, data) {
                if (err) {
                    reject(err);
                }

                resolve(data);
            });
        });
    }
};

module.exports = menuService;