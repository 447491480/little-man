/**
 * Created by chang on 2017/2/13.
 */

var moment = require('moment');

var userService = {
    checkUserLogin: function (account, password, req) {
        return new Promise(function (resolve, reject) {
            db.admin_user.findOne({
                where: {account: account, password: password}
            }).then(function (data) {
                if (data) {
                    req.session.admin_login_info = data;

                    resolve(true);
                } else {
                    resolve(false);
                }
            }).catch(function (msg) {
                reject(msg);
            })
        });
    },

    saveUser: async(function (data) {
        if (data.id) {
            return new Promise(function (resolve, reject) {
                var id = data.id;
                delete data['id'];

                db.admin_user.update(data, {
                    where: {
                        id: id
                    }
                }).then(function (msg) {
                    resolve(msg);
                }).catch(function (msg) {
                    reject(msg);
                })
            });
        } else {
            return new Promise(function (resolve, reject) {
                data.create_time = moment().format("YYYY-MM-DD HH:mm:ss");
                data.type = 1;

                if (await(userService.isAccountExist(data.account))) {
                    reject('账号已存在');
                    return;
                }

                db.admin_user.create(data).then(function (msg) {
                    resolve(msg);
                }).catch(function (msg) {
                    reject(msg);
                });

            })
        }
    }),

    deleteUser: function (id) {
        return new Promise(function (resolve, reject) {
            db.admin_user.destroy({
                where: {id: id}
            }).then(function (msg) {
                resolve(msg);
            }).catch(function (msg) {
                reject(msg);
            });
        });
    },

    queryUser: async(function (page, limit, keyword) {
        return new Promise(function (resolve, reject) {
            var offset = (page - 1) * limit;

            var count = await(db.admin_user.count({
                where: {}
            }));

            db.admin_user.findAll({
                offset: offset,
                limit: limit,
                where: {}
            }).then(function (data) {
                data = helper.filterDate(JSON.parse(JSON.stringify(data)), 'create_time');
                data = pager.wrap(data, page, limit, count);

                resolve(data);
            }).catch(function (msg) {
                reject(msg);
            })
        });
    }),

    isAccountExist: function (account) {
        return new Promise(function (resolve, reject) {
            db.admin_user.count({
                where: {
                    account: account
                }
            }).then(function (count) {
                if (count > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
        });
    },

    resetPassword: async(function (id, oldpass, newpass) {
        return new Promise(function (resolve, reject) {
            if (oldpass == newpass) {
                reject('新密码不能和原始密码相同');
                return;
            }
            var user = await(db.admin_user.findOne({where: {id: id}}));

            if (user && user.password != oldpass) {
                reject('原始密码不正确');
                return;
            }

            var ret = await(db.admin_user.update({password: newpass}, {where: {id: id}}));

            if (ret > 0) {
                resolve('操作成功');
            } else {
                reject('操作失败');
            }
        });
    })
};

module.exports = userService;