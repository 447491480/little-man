/**
 * Created by chang on 2017/2/25.
 */
module.exports = {
    // 获取父节点
    getParents: async(function (pid, type, session) {
        var whereCase = {IsDelete: 0,type:type};
        if(pid) {
            whereCase.ParentId = pid;
        } else {
            whereCase.ParentId = null;
        }
        if (type == 1) {
            whereCase.OwnerId = session.shop.Id;
        }
        return await(db().treeTypes.findAll({
            where: whereCase,
            order: 'CreateTime ASC'
        }));

    }),
    queryNodes: async(function (data,session) {
        if (data.Tyep == 1) {
            data.OwnerId = session.shop.Id;
        }
        data.IsDelete = 0;
       return await(db().treeTypes.findAll({
           where: data
       })) ;
    }),
    // 存储一个子节点
    saveNode: async(function (data,session) {
        if (data.Id) {
            var Id = data.Id;
            delete data['Id'];

            return await(db().treeTypes.update(data, {where: {Id: Id}}));
        } else {
            data.Id = helper.genTimeBaseUUID();
            data.OwnerId = session.shop.Id;

            if(data.ParentId != 0) {
                data.Position = data.Position+'|tr_'+data.Id;
            }

            return await(db().treeTypes.create(data));
        }
    }),

    // 删除一个子节点
    deleteNode: async(function (Id) {
        return await(db().sequelize.transaction(async(function (t) {
            await(db().treeTypes.update({IsDelete: 1}, {where: {Id: Id}},{transaction: t}));
            await(db().treeTypes.update({IsDelete: 1}, {where: {ParentId: Id}},{transaction: t}));
        })))
    })
};