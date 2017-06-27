/**
 * Created by chang on 2017/2/10.
 */

const configure = require('little-man-config');

const menuService = {
    getUserMenu: async function (user_id) {
        let menus = menuService.readMenuConfig();

        let user = await(db().admin_user.findOne({
            where: {id: user_id}
        }));

        user = helper.parse(user);

        let user_rights = JSON.parse(user.rights);

        if (user.type == 0) {
            return menus;
        }

        // 第一次遍历筛选菜单
        for (let key = 0; key < menus['menus'].length; key++) {
            let nav_menus = menus['menus'][key]['nav_menu'];

            for (let nav_key = 0; nav_key < nav_menus.length; nav_key++) {
                let third_menus = nav_menus[nav_key]['third_menu'];

                for (let third_key = 0; third_key < third_menus.length; third_key++) {

                    for (let ri = 0; ri < user_rights.length; ri++) {
                        if (third_menus[third_key]['title'] == user_rights[ri]['title']
                            && user_rights[ri]['level'] == 2) {
                            third_menus[third_key]['enable'] = true;
                        }
                    }
                }

                for (let ri = 0; ri < user_rights.length; ri++) {
                    if (nav_menus[nav_key]['title'] == user_rights[ri]['title']
                        && user_rights[ri]['level'] == 1) {
                        nav_menus[nav_key]['enable'] = true;
                    }
                }
            }

            for (let ri = 0; ri < user_rights.length; ri++) {
                if (menus['menus'][key]['title'] == user_rights[ri]['title']
                    && user_rights[ri]['level'] == 0) {
                    menus['menus'][key]['enable'] = true;
                }
            }
        }

        // 第二次遍历去除无效菜单
        for (let key = 0; key < menus['menus'].length; key++) {
            let nav_menus = menus['menus'][key]['nav_menu'];


            for (let nav_key = 0; nav_key < nav_menus.length; nav_key++) {
                let third_menus = nav_menus[nav_key]['third_menu'];

                for (let third_key = 0; third_key < third_menus.length; third_key++) {
                    if (third_menus[third_key]['enable'] == undefined) {
                        delete third_menus[third_key];
                    }
                }

                if (nav_menus[nav_key]['enable'] == undefined) {
                    delete nav_menus[nav_key];
                }
            }

            if (menus['menus'][key]['enable'] == undefined) {
                delete menus['menus'][key];
            }
        }

        return menus;
    },

    readMenuConfig: function () {
        return configure.get('admin');
    }
};

module.exports = menuService;