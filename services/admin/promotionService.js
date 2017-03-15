/**
 * Created by chang on 2017/3/2.
 */
module.exports = {
    getPromotionList: async(function (page, limit, session) {
        var offset = (page - 1) * limit;
        var ret = await(db().promotions.findAndCountAll({
            offset: offset,
            limit: limit,
            where: {
                CreatorId: session.shop.Id
            },
            order: 'CreateTime DESC'
        }));

        return pager.gridWrap(ret.rows, page, limit, ret.count);
    }),

    deletePromotion: async(function (id) {
        return await(db().sequelize.transaction(async(function (t) {
            await(db().promotions.destroy({where: {Id: id}}, {transaction: t}));
            await(db().promotionJoiners.destroy({where: {PromotionId: id}}, {transaction: t}));
            await(db().goods4promotions.destroy({where: {PromotionId: id}}, {transaction: t}));
        })));
    }),

    savePromotion: async(function (data, session) {
        if (data.Id) {
            // 封装活动表
            var promotion = {
                PromotionTitle: data.PromotionTitle,
                PromotionType: data.PromotionType,
                PromotionContent: data.PromotionContent,
                Priority: data.Priority,
                StartTime: data.StartTime,
                EndTime: data.EndTime,
                TargetRoleId: data.roles
            };

            // 封装参与商家表
            var promotionJoiners = [];
            var promotionJoiner = null;
            var shops = JSON.parse(data.shops || []);

            if (shops.length > 0) {
                for (var i = 0; i < shops.length; i++) {
                    var joiner = {
                        PID: session.shop.Id,
                        SID: shops[i]['shopId'],
                        TargetRoleId: data.roles,
                        PromotionId: data.Id,
                        StartTime: data.StartTime,
                        EndTime: data.EndTime
                    };

                    promotionJoiners.push(joiner);
                }
            } else {
                promotionJoiner = {
                    PID: null,
                    SID: session.shop.Id,
                    TargetRoleId: data.roles,
                    PromotionId: data.Id,
                    StartTime: data.StartTime,
                    EndTime: data.EndTime
                }
            }

            // 封装参与商品表
            var goods4Promotion = [];
            var goods = JSON.parse(data.goods || []);

            // 验证商品是否已经参与活动
            var pRet = await(db().goods4promotions.findAll({
                where: {
                    GoodsId: {
                        $in: goods.map(function (m) {
                            return m.goodsId
                        })
                    },
                    StartTime: {
                        $lte: data.StartTime
                    },
                    EndTime: {
                        $gte: data.StartTime
                    },
                    PromotionId: {
                        $ne: data.Id
                    }
                }
            }));

            pRet = helper.parse(pRet);
            if (pRet.length > 0) {
                throw (goods.map(function (m) {
                    for (var pi = 0; pi < pRet.length; pi++) {
                        if (m.goodsId == pRet[pi].GoodsId) {
                            return m.goodsName;
                        }
                    }
                })).join(' ') + ' 已经参加其他活动，请重新选择其他商品'
            }

            for (var g = 0; g < goods.length; g++) {
                var good = {
                    PromotionId: data.Id,
                    GoodsId: goods[g]['goodsId'],
                    StartTime: data.StartTime,
                    EndTime: data.EndTime
                };

                goods4Promotion.push(good);
            }

            return await(db().sequelize.transaction(async(function (t) {
                await(db().promotions.update(promotion, {where: {Id: data.Id}}, {transaction: t}));
                await(db().promotionJoiners.destroy({where: {PromotionId: data.Id}}, {transaction: t}));
                await(db().goods4promotions.destroy({where: {PromotionId: data.Id}}, {transaction: t}));

                if (shops.length > 0) {
                    await(db().promotionJoiners.bulkCreate(promotionJoiners, {transaction: t}));
                } else {
                    await(db().promotionJoiners.create(promotionJoiner, {transaction: t}));
                }
                await(db().goods4promotions.bulkCreate(goods4Promotion, {transaction: t}));
            })))
        } else {
            var promotion = {
                Id: helper.genTimeBaseUUID(),
                PromotionTitle: data.PromotionTitle,
                PromotionType: data.PromotionType,
                PromotionContent: data.PromotionContent,
                Priority: data.Priority,
                CreatorId: session.shop.Id,
                StartTime: data.StartTime,
                EndTime: data.EndTime,
                TargetRoleId: data.roles
            };
            var promotionJoiners = [];
            var promotionJoiner = null;
            var shops = JSON.parse(data.shops || []);

            if (shops.length > 0) {
                for (var i = 0; i < shops.length; i++) {
                    var joiner = {
                        PID: session.shop.Id,
                        SID: shops[i]['shopId'],
                        TargetRoleId: data.roles,
                        PromotionId: promotion.Id,
                        StartTime: data.StartTime,
                        EndTime: data.EndTime
                    };

                    promotionJoiners.push(joiner);
                }
            } else {
                promotionJoiner = {
                    PID: null,
                    SID: session.shop.Id,
                    TargetRoleId: data.roles,
                    PromotionId: promotion.Id,
                    StartTime: data.StartTime,
                    EndTime: data.EndTime
                }
            }

            var goods4Promotion = [];
            var goods = JSON.parse(data.goods || []);

            // 验证商品是否已经参与活动
            var pRet = await(db().goods4promotions.findAll({
                where: {
                    GoodsId: {
                        $in: goods.map(function (m) {
                            return m.goodsId
                        })
                    },
                    StartTime: {
                        $lte: data.StartTime
                    },
                    EndTime: {
                        $gte: data.StartTime
                    }
                }
            }));

            pRet = helper.parse(pRet);

            if (pRet.length > 0) {
                throw (goods.map(function (m) {
                    for (var pi = 0; pi < pRet.length; pi++) {
                        if (m.goodsId == pRet[pi].GoodsId) {
                            return m.goodsName;
                        }
                    }
                })).join(' ') + ' 已经参加其他活动，请重新选择其他商品'
            }

            for (var g = 0; g < goods.length; g++) {
                var good = {
                    PromotionId: promotion.Id,
                    GoodsId: goods[g]['goodsId'],
                    StartTime: data.StartTime,
                    EndTime: data.EndTime
                };

                goods4Promotion.push(good);
            }

            return await(db().sequelize.transaction(async(function (t) {
                await(db().promotions.create(promotion, {transaction: t}));
                if (shops.length > 0) {
                    await(db().promotionJoiners.bulkCreate(promotionJoiners, {transaction: t}));
                } else {
                    await(db().promotionJoiners.create(promotionJoiner, {transaction: t}));
                }
                await(db().goods4promotions.bulkCreate(goods4Promotion, {transaction: t}));
            })))
        }
    }),

    getPromotionDetail: async(function (id) {
        db().promotionJoiners.belongsTo(db().shops, {foreignKey: 'SID'});
        var joiners = await(db().promotionJoiners.findAll({
            include: [db().shops],
            where: {PromotionId: id}
        }));

        db().goods4promotions.belongsTo(db().goods, {foreignKey: 'GoodsId', targetKey: 'Id'});
        var goods = await(db().goods4promotions.findAll({
            include: [db().goods],
            where: {PromotionId: id}
        }));

        return {joiners: joiners, goods: goods};
    }),

    // 获取我参与的活动列表
    assistPromotionList: async(function (page, limit,keyword, session) {
        var offset = (page - 1) * limit;

        db().promotionJoiners.belongsTo(db().promotions,{foreignKey:'PromotionId'});

        var whereCase = {};
        if(keyword != '') {
            whereCase = {PromotionTitle:{$like:'%'+keyword+'%'}}
        }

        var ret = await(db().promotionJoiners.findAndCountAll({
            offset: offset,
            limit: limit,
            include: [{model:db().promotions,where:whereCase}],
            where: {
                SID:session.shop.Id,
                PID:{$ne:null}
            },
            order: 'CreateTime DESC'
        }));

        return pager.gridWrap(ret.rows, page, limit, ret.count);
    })
};