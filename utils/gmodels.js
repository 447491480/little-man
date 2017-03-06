var path = require("path");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '../', 'config', 'db.json'))[env];

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