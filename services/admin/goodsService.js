/**
 * Created by chang on 2017/2/16.
 */
/**
 * Created by chang on 2017/2/13.
 */

var goodsService = {
    // 获取我的商品列表
    goodsList: function (page, limit, isEnable, session) {
        return new Promise(function (resolve, reject) {
            var offset = (page - 1) * limit;

            db().goods.belongsTo(db().shops, {foreignKey: 'OwnerId'});

            var whereCase = {ShopId: session.shop.Id, IsDelete: 0};
            if (isEnable != -1) {
                whereCase.IsEnable = isEnable;
            }

            db().goods.findAndCountAll({
                include: [db().shops],
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
    },

    // 添加、修改商品
    saveGoods: async(function (data, session) {
        if (data.Id) {

            var id = data.Id;
            delete data['Id'];
            delete data['file'];

            return await(db().goods.update(data,
                {
                    where: {Id: id}
                }
            ));
        } else {
            data.OwnerId = session.shop.Id;
            data.Id = helper.genTimeBaseUUID();
            data.ShopId = session.shop.Id;
            data.GoodsId = data.Id;

            var goodsRelationData = {
                Id: helper.genTimeBaseUUID(),
                OriGoodsId: data.Id,
                OriOwnerId: data.OwnerId,
                NowGoodsId: data.Id,
                NowOwnerId: data.OwnerId
            };

            return await(db().sequelize.transaction(async(function (t) {
                await(db().goods.create(data, {transaction: t}));
                await(db().goodsRelation.create(goodsRelationData, {transaction: t}))
            })))
        }
    }),

    // 删除商品
    deleteGoods: async(function (id, sesion) {
        // return await(db().sequelize.transaction(async(function (t) {
        //     await(db().goods.destroy({where: {Id: id}}, {transaction: t}));
        //     await(db().goodsRelation.destroy({where: {NowGoodsId: id, NowOwnerId: sesion.shop.Id}}, {transaction: t}))
        // })))
        var ret = await(db().goods.update({IsDelete: 1}, {
            where: {Id: id}
        }));

        if (ret > 0) {
            return true;
        } else {
            throw '删除失败'
        }
    }),

    // 获取我的上级商品列表
    getLeaderGoods: async(function (page, limit, session) {
        var myLeaders = await(db().shopRelation.findAll({where: {SID: session.shop.Id}}));
        var mySelectedGoods = await(db().goods.findAll({
            where: {
                ShopId: {
                    $ne: {$col: 'OwnerId'},
                    $eq: session.shop.Id
                },
                IsDelete: 0
            }
        }));

        if (myLeaders) {
            var ids = myLeaders.map(function (m) {
                return m.get('PID');
            });

            var hIds = mySelectedGoods.map(function (m) {
                return m.get('GoodsId');
            });

            var offset = (page - 1) * limit;

            db().goods.belongsTo(db().shops, {foreignKey: 'OwnerId'});

            var whereCase = {ShopId: {$in: ids}, IsDelete: 0, IsEnable: 0};

            if(hIds.length > 0) {
                whereCase.GoodsId = {$notIn: hIds}
            }

            var ret = await(db().goods.findAndCountAll({
                include: [db().shops],
                offset: offset,
                limit: limit,
                where: whereCase,
                order: 'CreateTime DESC'
            }));

            return pager.gridWrap(ret.rows, page, limit, ret.count);
        } else {
            throw '获取上级失败';
        }
    }),

    // 保存上级商品
    saveLeaderGoods: async(function (goods, session) {
        var goodsInfo = await(db().goods.findAll({where: {Id: {$in: goods}}}));

        if (goodsInfo) {
            var goodsRelArr = [];
            var goodsArr = helper.parse(goodsInfo);

            for (var i = 0; i < goodsArr.length; i++) {
                var newGoodsId = helper.genTimeBaseUUID();
                var rel = {
                    Id: helper.genTimeBaseUUID(),
                    OriGoodsId: goodsArr[i].Id,
                    OriOwnerId: goodsArr[i].OwnerId,
                    NowGoodsId: newGoodsId,
                    NowOwnerId: session.shop.Id
                };

                goodsRelArr.push(rel);

                goodsArr[i].IsEnable = 0;
                goodsArr[i].GoodsId = goodsArr[i].Id;
                goodsArr[i].ShopId = session.shop.Id;
                goodsArr[i].Id = newGoodsId;

                delete goodsArr[i]['CreateTime'];
                delete goodsArr[i]['MyCategoryId'];
            }

            return await(db().sequelize.transaction(async(function (t) {
                await(db().goods.bulkCreate(goodsArr, {transaction: t}));
                await(db().goodsRelation.bulkCreate(goodsRelArr, {transaction: t}))
            })));

        } else {
            return true;
        }

    }),

    // 保存品牌
    saveBrand: async(function (data) {
        if (data.Id) {
            id = data.Id;
            delete data['Id'];

            return await(db().brands.update(data, {where: {Id: id}}));
        } else {
            data.Id = helper.genTimeBaseUUID();

            return await(db().brands.create(data));
        }
    }),

    // 删除品牌
    deleteBrand: async(function (Id) {
        return await(db().brands.destroy({where: {Id: Id}}));
    }),

    // 获取品牌列表
    listBrand: async(function (page, limit) {
        var offset = (page - 1) * limit;

        return await(db().brands.findAndCountAll({
            offset: offset,
            limit: limit,
            where: {},
            order: 'CreateTime DESC'
        }));
    }),

    // 保存分类
    saveCategory: async(function (data, session) {
        if (data.Id) {
            id = data.Id;
            delete data['Id'];
            delete data['Type'];
            delete data['OwnerId'];

            return await(db().category.update(data, {where: {Id: id}}));
        } else {
            data.Id = helper.genTimeBaseUUID();
            if (data.Type == 1) {
                data.OwnerId = session.shop.Id;
            }

            return await(db().category.create(data));
        }
    }),

    // 删除分类
    deleteCategory: async(function (Id) {
        return await(db().category.destroy({where: {Id: Id}}));
    }),

    // 获取所有分类
    listCategory: async(function (page, limit, type, session) {
        var offset = (page - 1) * limit;

        var whereCase = {};
        if (type == 0) {
            whereCase.OwnerId = null;
        } else {
            whereCase.OwnerId = session.shop.Id;
        }

        return await(db().category.findAndCountAll({
            offset: offset,
            limit: limit,
            where: whereCase,
            order: 'CreateTime DESC'
        }));
    })

};

module.exports = goodsService;