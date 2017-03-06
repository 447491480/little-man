/**
 * Created by Lian on 2015/10/27.
 */

define(function(require,exports) {
    var provinces = require('common/city/proJson').province;
    var cities = require('common/city/cityJson').city;

    var cityUtil = {};

    cityUtil.getAllProvince = function () {
        return provinces;
    };

    cityUtil.getCityByProID = function(pid) {
        var ret = [];
        for(var i=0;i<cities.length;i++) {
            if(cities[i].ProID == pid) {
                ret.push(cities[i]);
            }
        }

        return ret;
    };


    exports.cityUtil = cityUtil;
});
