/**
 * Created by chang on 2017/2/15.
 */
var roleSelectService = require('./roleSelectService');

module.exports = {
    getRoleById: function (roleId) {
        return new Promise(function (resolve, reject) {
            db.roles.findOne({
                where: {Id: roleId}
            }).then(function (data) {
                resolve(data);
            }).catch(function (msg) {
                reject(msg);
            })
        })
    },

    getAllRoles: function (session,type) {
        return new Promise(function (resolve, reject) {
            var roleIds = roleSelectService.getRoleList(session.shop.RoleId);

            var whereCase = {};

            if (session.shop.RoleId != 1) {
                whereCase = {Id: {$in: roleIds}};
            } else {
                if(type==0) {
                    whereCase = {Id: {$notIn: [1]}}
                } else {
                    whereCase = {Id: {$in: [2]}}
                }
            }

            db.roles.findAll({
                where: whereCase
            }).then(function (data) {
                resolve(data);
            })
        });
    },

    modifyRole: async(function (data) {
        var id = data.Id;
        delete data['Id'];

        var ret = await(db.roles.update(data, {
            where: {
                Id: id
            }
        }));

        if(ret) {
            return true;
        } else {
            throw '操作失败'
        }
    })
};