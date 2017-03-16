var configure = require('little-man-config');
var log4js = require("log4js");

exports.configure = function() {
    log4js.configure(configure.get('log4js'));
};

exports.logger = function(name) {
    var dateFileLog = log4js.getLogger(name);
    dateFileLog.setLevel(log4js.levels.INFO);
    return dateFileLog;
};

exports.useLog = function() {
    return log4js.connectLogger(log4js.getLogger("app"), { level: log4js.levels.INFO });
};