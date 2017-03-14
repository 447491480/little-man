/**
 * Created by chang on 2017/2/13.
 */

var app_config = require('../../config/app.json');
var roleSelectService = require('./roleSelectService');

var userService = {
    checkUserLogin: async(function (account, password, req) {
        db.member.belongsTo(db.shops, {
            foreignKey: 'ShopId',
            constraints: false
        });

        var data = await(db.member.findOne({
            include: [{model: db.shops}],
            where: {MemberAccount: account, MemberPass: helper.md5(account + password)}
        }));

        if (data) {
            req.session.admin_login_info = data;

            return true;
        } else {
            throw '用户名或者密码不正确';
        }
    }),

    saveUser: async(function (data,sesison) {
        if (data.id) {
            var id = data.id;
            delete data['id'];
            delete data['MemberAccount'];

            var msg = await(db.shops.update(data, {
                where: {
                    Id: id
                }
            }));

            if (msg > 0) {
                return true;
            } else {
                throw '更新失败';
            }
        } else {
            data.CreateTime = helper.getCurrentDate();
            data.Id = helper.genTimeBaseUUID();
            data.IsChecked = 1;

            var member = {
                Id: helper.genTimeBaseUUID(),
                MemberAccount: data.MemberAccount,
                MemberPass: helper.md5(data.MemberAccount + app_config.default_password),
                ShopId: data.Id,
                Department:'总部'
            };

            data.MemberId = member.Id;

            delete data['MemberAccount'];

            var user = await(db.member.findOne({where: {MemberAccount: member.MemberAccount}}));
            if (user) {
                throw '账号已存在';
            }

            var shopRelation = {
                Id:helper.genTimeBaseUUID(),
                PID:sesison.shop.Id,
                SID:data.Id
            };
            var tree = {
                Name:'总部',
                Type:'1'
            }
            return await(db.sequelize.transaction(async(function (t) {
                await(db.shops.create(data, {transaction: t}));
                await(db.member.create(member, {transaction: t}));
                await(db.shopRelation.create(shopRelation,{transaction:t}));
                await(db.create(tree,{transaction:t}))
            })));
        }
    }),
    editEnterprise: async(function (data) {
        return await(db.shops.update(data, {
                where: {
                    Id: data.Id
                }
        }))
    }),

    deleteUser: async(function (id) {
         return await(db.sequelize.transaction(async(function(t){
             await(db.shops.update({IsDelete: 1}, {where: {Id: id}},{transaction:t}));
             await(db.member.destroy({where: {ShopId: id}},{transaction:t}));
         })));

        //var msg = await(db.shops.update({IsDelete: 1}, {
        //    where: {
        //        Id: id
        //    }
        //}));

        //if (msg > 0) {
        //    return true;
        //} else {
        //    throw '删除失败';
        //}
    }),

    queryEnterprise: async(function (data) {
       return new Promise(function (resolve, reject) {
           db.shops.belongsTo(db.roles, {foreignKey: 'RoleId'});
           db.shops.findOne({
               include: [db.roles],
               where:{Id:data.shopId}}).then(function (data) {
               resolve(data);
           }).catch(function (msg) {
               reject(msg);
           })
       });
    }),
    queryUser: async(function (page, limit, keyword, session) {
        return new Promise(function (resolve, reject) {
            var offset = (page - 1) * limit;

            db.shops.belongsTo(db.roles, {foreignKey: 'RoleId'});
            db.shops.belongsTo(db.member, {foreignKey: 'MemberId'});

            var roleIds = roleSelectService.getRoleList(session.shop.RoleId);

            var whereCase = {RoleId: {$in: roleIds}, IsDelete: 0};
            if (keyword) {
                whereCase.MemberName = {$like: '%' + keyword + '%'};
            }

            db.shops.findAndCountAll({
                include: [db.roles, db.member],
                offset: offset,
                limit: limit,
                where: whereCase,
                order: 'CreateTime DESC'
            }).then(function (ret) {
                var data = ret.rows;
                data = pager.gridWrap(data, page, limit, ret.count);

                resolve(data);
            }).catch(function (msg) {
                reject(msg);
            })
        });
    }),

    setRelation: async(function (pid, sid) {
        if (pid == sid) {
            throw '不能把自己设为下级';
        }

        if (await(db.shopRelation.findOne({where: {PID: pid, SID: sid}}))) {
            throw '已经设置为下级，不能重复设置';
        }

        return await(db.shopRelation.create({PID: pid, SID: sid}))
    }),

    setPaymentDays: async(function (id, days) {
        return await(db.shopRelation.update({PaymentDays: days},{where:{Id:id}}));
    }),

    deleteRelation: function (id) {
        return new Promise(function (resolve, reject) {
            db.shopRelation.destroy({
                where: {Id: id}
            }).then(function (msg) {
                resolve(msg);
            }).catch(function (msg) {
                reject(msg);
            });
        });
    },

    getAllRelation: function (page, limit, key, pid) {
        return new Promise(function (resolve, reject) {
            var offset = (page - 1) * limit;
            var keyword = {};
            if (typeof(key) != "undefined" && key != '') {
                keyword.MemberName = {'$like': '%' + key + '%'};
            }
            db.shopRelation.belongsTo(db.shops, {foreignKey: 'SID'});

            db.shopRelation.findAndCountAll({
                include: [{
                    'model': db.shops,
                    'where': keyword
                }],
                offset: offset,
                limit: limit,
                where: {PID: pid},
                order: 'CreateTime DESC'
            }).then(function (ret) {
                var data = ret.rows;
                data = pager.gridWrap(data, page, limit, ret.count);
                resolve(data);
            }).catch(function (msg) {
                reject(msg);
            })
        })
    },

    getAllLeader: async(function (page, limit, key, sid) {
        var offset = (page - 1) * limit;
        var keyword = {};
        if (key) {
            keyword.MemberName = {'$like': '%' + key + '%'};
        }
        db.shopRelation.belongsTo(db.shops, {foreignKey: 'PID'});

        var ret = await(db.shopRelation.findAndCountAll({
            include: [{
                'model': db.shops,
                'where': keyword
            }],
            offset: offset,
            limit: limit,
            where: {SID: sid},
            order: 'CreateTime DESC'
        }));

        return pager.gridWrap(ret.rows, page, limit, ret.count);
    }),

    resetPassword: async(function (id, oldpass, newpass) {
        return new Promise(function (resolve, reject) {
            if (oldpass == newpass) {
                reject('新密码不能和原始密码相同');
                return;
            }
            var user = await(db.member.findOne({where: {Id: id}}));

            if (user && user.MemberPass != helper.md5(user.MemberAccount + oldpass)) {
                reject('原始密码不正确');
                return;
            }

            var ret = await(db.member.update({MemberPass: helper.md5(user.MemberAccount + newpass)}, {where: {Id: id}}));

            if (ret > 0) {
                resolve('操作成功');
            } else {
                reject('操作失败');
            }
        });
    }),
    queryMember: async(function(page,limit,data){
        var offset = (page - 1) * limit;
        var ret = await(db.member.findAndCountAll({
            offset:offset,
            limit:limit,
            where:data,
            order: 'CreateTime DESC'
        }));
        return pager.gridWrap(ret.rows, page, limit, ret.count);
    }),
    deleteMember: async(function (id) {
        return new Promise(function (resolve, reject) {
            db.member.destroy({
                where: {Id: id}
            }).then(function (msg) {
                resolve(msg);
            }).catch(function (msg) {
                reject(msg);
            });
        });
    }),
    saveMember: async(function(data){
        if (data.Id) {
            var id = data.Id;
            delete data['Id'];
            return await(db.member.update(data, {
                where: {
                    Id: id
                }
            }));
        } else {
            data.CreateTime = helper.getCurrentDate();
            data.Id = helper.genTimeBaseUUID();
            data.MemberPass = helper.md5(data.MemberAccount + app_config.default_password);
            data.Type = 1;
            data.IsDel = 0;

            var user = await(db.member.findOne({where: {MemberAccount: data.MemberAccount}}));
            if (user) {
                throw '账号已存在';
            }
            return await(db.member.create(data));
        }
    })
};

module.exports = userService;