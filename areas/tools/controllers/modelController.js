/**
 * Created by chang on 2017/2/25.
 */

var sessionFilter = require('../../../filters/adminSessionFilter');
var pagerService = require('../../../services/common/pagerService');
var configure = require('more-express-config');
var SequelizeAuto = require('sequelize-auto');
var config = configure.get('db');

module.exports = {
    get_connectionList: [sessionFilter, function (req, res) {
        res.jsonWrap(Object.keys(db));
    }],

    get_dbTables: [sessionFilter, function (req, res) {
        var name = req.query.name || 'default';
        var pageLimit = pagerService.requestFilter(req);
        var keyword = req.query.keyword || '';

        db[name].sequelize.getQueryInterface().showAllTables().then(function (ret) {
            var retTemp = [];
            if(keyword) {
                ret.forEach(function(o) {
                    if(o.indexOf(keyword) >=0) {
                        retTemp.push(o);
                    }
                });

                ret = retTemp;
            }

            var offset = (pageLimit.page - 1) * pageLimit.limit;
            res.jsonWrap(pager.gridWrap(ret.slice(offset, offset + pageLimit.limit > ret.length ? ret.length : offset + pageLimit.limit), pageLimit.page, pageLimit.limit, ret.length));
        });
    }],

    post_genModels: [sessionFilter, function (req, res) {
        var name = req.body.name || 'default';
        config[name]['tables']= JSON.parse(req.body.tables || '[]');

        if(config[name]['tables'].length<=0) delete config[name]['tables'];

        config[name]['directory'] = config[name]['directory']+'/'+name;

        var auto = new SequelizeAuto(config[name].database, config[name].username, config[name].password, config[name]);

        auto.run(function (err) {
            if (err) {
                console.log(err);
                res.jsonWrap(err,1,err);
            }

            console.log('生成成功');
            res.jsonWrap();
        });

    }]
};