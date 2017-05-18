/**
 * Created by Administrator on 2016/9/18.
 */
define(function(require,exports) {
    var ajaxUtil = require('util/ajaxUtil').ajaxUtil;
    var logUtil = require('util/logUtil').logUtil;
    var commonUtil = require('util/commonUtil').commonUtil;

    var controls = {};
    controls.page_node=$('#page-wrapper');

    var urls = {};
    urls.get_page_part = '/admin/page/get-part';
    urls.get_update_session = '/admin/page/update-session';
    urls.get_logout = '/admin/page/logout';

    function init() {
        bindEvent();
        initIndex();
        updateSession();
    }

    function initIndex() {
        var index = $('#navigation_left').find('.menu-text:eq(0)').data('url');
        if(index) {
            ajaxUtil.doAjaxLoad(controls.page_node,urls.get_page_part,{page:index});
        }
    }

    function bindEvent() {
        $('#navigation_left').find('li>a').bind('click',function() {
            var page = $(this).find('.menu-text:eq(0)').data('url');

            if(!page) return;

            ajaxUtil.doAjaxLoad(controls.page_node,urls.get_page_part,{page:page});
        });

        $(window).on('resize', function () {
            $(window).unbind("onresize");

            $(".jqgrid-table").each(function() {
                $(this).setGridWidth(controls.page_node.width(), true);
            });

            $(window).bind("onresize", this);
        }).resize();

        $('.hoe-sidebar-toggle').bind('click',function() {
            $(".jqgrid-table").each(function() {
                $(this).setGridWidth(controls.page_node.width(), true);
            });
        });

        $("#logout").bind('click',function() {
            ajaxUtil.doAjaxGet(urls.get_logout,{}).done(function(ret) {
                setTimeout(function(){
                    window.location.reload();
                },200)
            })
        })
    }

    function updateSession() {
        setInterval(function(){
            ajaxUtil.doAjaxGet(urls.get_update_session,null);
        },1000*60*60*2);
    }

    exports.init = init;
});