"use strict";

var fs = require("fs");
var path = require("path");
var configure = require('more-express-config');
var Sequelize = require("sequelize");
var config = configure.get('db');


var connections = [];

Object.keys(config).forEach(function(name) {
    connections.push({
        name:name,
        sequelize:new Sequelize(config[name].database, config[name].username, config[name].password, config[name]),
        Sequelize:Sequelize
    })
});

var db = function(name){
    name = name || 'default';
    return db[name];
};

connections.forEach(function(conn){
    var conn_name = conn.name;

    var models = {};
    fs.readdirSync(path.join(__dirname, config[conn_name].output,conn_name))
        .filter(function (file) {
            return (file.indexOf(".") !== 0);
        })
        .forEach(function (file) {
            var model = conn.sequelize.import(path.join(__dirname, '..', 'models',conn_name, file));
            models[model.name]=model;
        });

    db[conn_name] = models;

    Object.keys(db[conn_name]).forEach(function (modelName) {
        if ("associate" in db[conn_name][modelName]) {
            db[conn_name][modelName].associate(db[conn_name]);
        }
    });

    db[conn_name].sequelize = conn.sequelize;
    db[conn_name].Sequelize = conn.Sequelize;
});


module.exports = db;