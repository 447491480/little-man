var configure = require('more-express-config');
var config = configure.get('db');

if(Object.keys(config).length==1) {
    config = config.default;
}

var SequelizeAuto = require('sequelize-auto');
var auto = new SequelizeAuto(config.database, config.username, config.password, config);

module.exports = {
    exprot_models : function () {
        return new Promise(function(resolve,reject) {
            auto.run(function (err) {
                if (err) {
                    console.log(err);
                    reject(err);
                }

                resolve(auto.tables, auto.foreignKeys);
            });
        });
    }
};