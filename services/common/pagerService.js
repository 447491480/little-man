/**
 * Created by chang on 2017/2/22.
 */
module.exports = {
    requestFilter : function(req) {
        var args = {};
        if(req.query.page <= 0) {
            args.page = 1;
        } else {
            args.page = parseInt(req.query.page);
        }

        if(req.query.rows >= 100) {
            args.limit = 100;
        } else {
            args.limit = parseInt(req.query.rows);
        }

        return args;
    }
};