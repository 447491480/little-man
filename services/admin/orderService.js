/**
 * Created by chang on 2017/2/15.
 */
module.exports = {
    queryOrder: async(function (page, limit, status, session) {
        var offset = (page - 1) * limit;

        var whereCase = {};
        if (status != 0) {
            whereCase.OrderProgressState = status;
        }

        whereCase.SellerId = session.shop.Id;

        db.orders.belongsTo(db.shops, {foreignKey: 'PurchaserId'});

        var ret = await(db.orders.findAndCountAll({
            include: [db.shops],
            offset: offset,
            limit: limit,
            where: whereCase,
            order: 'CreateTime DESC'
        }));

        return pager.gridWrap(ret.rows, page, limit, ret.count);
    }),

    orderStatusChange: async(function (orderId, status) {
        var ret = await(db.orders.update({OrderProgressState: status}, {where: {Id: orderId}}));
        if (ret) {
            return true;
        } else {
            throw '操作失败'
        }

    }),

    paymentList: async(function (page, limit, session) {
        var offset = (page - 1) * limit;

        db.paymentDaysRecord.belongsTo(db.orders, {foreignKey: 'OrderId'});
        db.paymentDaysRecord.belongsTo(db.shops, {foreignKey: 'PurchaserId'});

        var ret = await(db.paymentDaysRecord.findAndCountAll({
            include: [db.orders, db.shops],
            offset: offset,
            limit: limit,
            where: {SellerId: session.shop.Id},
            order: 'CreateTime DESC'
        }));

        return pager.gridWrap(ret.rows, page, limit, ret.count);
    }),

    setPayment: async(function (id, payment) {
        return await(db.paymentDaysRecord.update(
            {Reverse: payment, ReverseTime: helper.getCurrentDate()},
            {where:{Id:id}}
        ));
    })
};