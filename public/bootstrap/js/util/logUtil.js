/**
 * Created by chang on 14/11/1.
 */
define(function(require,exports) {
    var isDebug = true;
    var logUtil = {};

    logUtil.log = function(msg) {
        if(isDebug) {
            console.log(msg);
        }
    };

    logUtil.error = function(msg) {
        if(isDebug) {
            console.log(msg);
        }
    };

    exports.logUtil =logUtil;
});