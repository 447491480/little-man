/**
 * Created by chang on 2017/2/14.
 */
module.exports = {
    wrap : function(data,page,limit,count) {
        var last_page = Math.ceil(count/limit);

        if(page>last_page) {
            page = last_page;
        }

        if(count == 0) {
            page = 1;
        }

        return {'page_data':data, 'total_count':count, 'current_page': page,'last_page':last_page};
    },

    gridWrap : function(data,page,limit,count) {
        var last_page = Math.ceil(count/limit);

        if(page>last_page) {
            page = last_page;
        }

        if(count == 0) {
            page = 1;
        }

        return {'rows':data, 'records':count, 'page': page,'total':last_page};
    }
};