/**
 * Created by chang on 2017/2/25.
 */

const sessionFilter = require('../../../filters/adminSessionFilter');
const configure = require('little-man-config');
const SequelizeAuto = require('sequelize-auto');
const path = require('path');
const config = configure.get('db');

module.exports = {
    get_connectionList: [sessionFilter, function (req, res) {
        res.jsonWrap(Object.keys(db));
    }],

    get_dbTables: [sessionFilter, function (req, res) {
        let name = req.query.name || 'default';
        let pageLimit = pager.requestFilter(req);
        let keyword = req.query.keyword || '';

        db[name].sequelize.getQueryInterface().showAllTables().then(function (ret) {
            let retTemp = [];
            if(keyword) {
                ret.forEach(function(o) {
                    if(o.indexOf(keyword) >=0) {
                        retTemp.push(o);
                    }
                });

                ret = retTemp;
            }

            let offset = (pageLimit.page - 1) * pageLimit.limit;
            res.jsonWrap(pager.gridWrap(ret.slice(offset, offset + pageLimit.limit > ret.length ? ret.length : offset + pageLimit.limit), pageLimit.page, pageLimit.limit, ret.length));
        });
    }],

    post_genModels: [sessionFilter, function (req, res) {
        let name = req.body.name || 'default';

        config[name]['tables']= JSON.parse(req.body.tables || '[]');

        if(config[name]['tables'].length<=0) delete config[name]['tables'];

        config[name]['directory'] = path.join(process.cwd(),'models',name);

        let auto = new SequelizeAuto(config[name].database, config[name].username, config[name].password, config[name]);

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