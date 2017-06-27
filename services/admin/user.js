/**
 * Created by chang on 2017/2/13.
 */

const userService = {
    checkUserLogin: async function (account, password, req) {
        let data = await(db().admin_user.findOne({
            where: {account: account, password: password}
        }));

        if (data) {
            req.session.admin_login_info = data;
            return true;
        } else {
            throw '用户名或者密码不正确';
        }
    },

    saveUser: async function (data) {
        if (data.id) {
            let id = data.id;
            delete data['id'];

            return await(db().admin_user.update(data, {
                where: {
                    id: id
                }
            }));
        } else {
            data.type = 1;

            if (await(userService.isAccountExist(data.account))) {
                throw '账号已存在';
            }

            return await(db().admin_user.create(data));
        }
    },

    deleteUser: async function (id) {
        return await(db().admin_user.destroy({
            where: {id: id}
        }))
    },

    queryUser: async function (page, limit, keyword) {
        let offset = (page - 1) * limit;

        let whereCase = {};
        if(keyword) {
            whereCase.account = {$like:'%'+keyword+'%'};
        }

        let ret = await(db().admin_user.findAndCountAll({
            offset: offset,
            limit: limit,
            where: whereCase
        }));

        return pager.gridWrap(ret.rows, page, limit, ret.count);
    },

    isAccountExist: async function (account) {
        return await(db().admin_user.count({
            where: {
                account: account
            }
        }));
    },

    resetPassword: async function (id, oldpass, newpass) {
        if (oldpass == newpass) {
            throw '新密码不能和原始密码相同';
        }

        let user = await(db().admin_user.findOne({where: {id: id}}));

        if (user && user.password != oldpass) {
            throw '原始密码不正确';
        }

        return await(db().admin_user.update({password: newpass}, {where: {id: id}}));
    }
};

module.exports = userService;