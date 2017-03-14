/**
 * Created by susu on 17-2-23.
 */
var newsService = {
    newsList: async(function (page, limit, type) {
        var offset = (page - 1) * limit;
        var ret = await(db.news.findAndCountAll({
            offset: offset,
            limit: limit,
            where: {
                Type: type
            },
            order: 'CreateTime DESC'
        }));

        return pager.gridWrap(ret.rows, page, limit, ret.count);
    }),

    // 添加/修改新闻
    saveNews: async(function (data) {
        if (data.Id) {
            id = data.Id;
            delete data['Id'];
            return await(db.news.update(data, {where: {Id: id}}));
        } else {
            data.Id = helper.genTimeBaseUUID();
            return await(db.news.create(data));
        }
    }),

    // 删除新闻
    deleteNews: async(function (Id) {
        return await(db.news.destroy({where: {Id: Id}}));
    })
};

module.exports = newsService;