/**
 * Created by chang on 2017/2/17.
 */
var ufileUtil = require('../../../utils/ufileUtil');
var sessionFilter = require('../../../filters/adminSessionFilter');
var multipart = require('connect-multiparty');


module.exports = {
    post_upload : [sessionFilter,multipart(),function (req, res) {
        var file = req.files.file;
        ufileUtil.upload(file, res);
    }]
};