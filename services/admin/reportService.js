/**
 * Created by chang on 2017/3/10.
 */

module.exports = {
    orderStatistic:async(function (startTime,endTime,session) {
        return await(db.orders.findAll(
            {
                attributes:[
                    [db.sequelize.fn('DATE_FORMAT',db.sequelize.col('CreateTime'),'%Y-%m-%d'),'ct'],
                    [db.sequelize.fn('COUNT',db.sequelize.col('Id')),'count'],
                    [db.sequelize.fn('SUM',db.sequelize.col('OrderTotalPrice')),'orderTotalPrice'],
                    [db.sequelize.fn('SUM',db.sequelize.col('GoodsTotalPrice')),'goodsTotalPrice']
                ],
                where:{
                    SellerId:session.shop.Id,
                    CreateTime:{
                        $lt:endTime,
                        $gte:startTime
                    }
                },
                group:['ct']
            }
        ));
    })
};
