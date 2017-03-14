/**
 * Created by Administrator on 2016/9/18.
 */
layui.define(['form','element', 'layer', 'ajaxUtil', 'logUtil', 'commonUtil'], function (exports) {
    var ajaxUtil = layui.ajaxUtil;
    var logUtil = layui.logUtil;
    var commonUtil = layui.commonUtil;
    var element = layui.element();
    var $ = layui.jquery;
    var layer = layui.layer;
    var form = layui.form();

    var controls = {};
    controls.page_node = $('#page-wrapper');
    controls.tabs = $('#admin-tab');
    controls.container = $('#admin-tab-container');
    controls.main_top_tab = $('#main_top_tab');
    controls.main_left_nav = $('#main_left_nav');

    controls.treeMobile = $('.site-tree-mobile');
    controls.shadeMobile = $('.site-mobile-shade');

    var urls = {};
    urls.get_page_part = '/admin/page/get-part';
    urls.get_update_session = '/admin/page/update-session';
    urls.get_menu = './?_m=/admin/menu/getMenu';

    var G_MAX_TAB = 7;

    function init() {
        bindEvent();
        initIndex();
        updateSession();
        $('#main_top_tab').find('li:eq(0)').trigger('click');
    }

    function initIndex() {
        var index = $('#main_top_tab').data('index');
        if(index !== undefined) {
            ajaxUtil.ajaxGetPage(urls.get_page_part,{'page':index}).done(function(dom) {
                $('#home_page').html(dom);
            });
        }
    }

    function bindEvent() {
        //内容自适应 自适应
        $(window).on('resize', function () {
            $(window).unbind("onresize");

            var $content = $('.admin-nav-card>.layui-tab-content');
            $content.height($(this).height() - 147);
            $content.find('.layui-tab-item').each(function () {
                $(this).height($content.height());
            });

            $(".jqgrid-table").each(function() {
                var _div = $("#admin-tab-container");
                var tableWidth = _div.width()-10;
                $(this).setGridWidth(tableWidth, true);
            });

            $(window).bind("onresize", this);
        }).resize();

        $('.admin-side-toggle').on('click', function () {
            var sideWidth = $('#admin-side').width();
            if (sideWidth === 200) {
                $('#admin-body').animate({left: '0'});
                $('#admin-side').animate({width: '0'});
            } else {
                $('#admin-body').animate({left: '200px'});
                $('#admin-side').animate({width: '200px'});
            }

        });

        //手机设备的简单适配
        controls.treeMobile.on('click', function () {
            $('body').addClass('site-mobile');
        });
        controls.shadeMobile.on('click', function () {
            $('body').removeClass('site-mobile');
        });

        //绑定 nav 点击事件
        $('ul.admin-nav-tree').find('dd > a').each(function () {
            var _this = $(this);
            //获取设定的url
            var url = _this.data('url');

            if (url !== undefined) {
                _this.on('click', function () {
                    var aHtml = _this.html();
                    var flag = false;
                    var layTabId = $(_this).attr('layTabId');
                    var counter = 0;
                    var firstId = null;

                    controls.tabs.find('li').each(function (i) {
                        counter ++;
                        if(i==1){
                            firstId = $(this).attr('lay-id');
                        }

                        if ($(this).attr('lay-id') != undefined && $(this).attr('lay-id') == layTabId) {
                            flag = true;
                        }
                    });

                    //tab不存在
                    if (!flag) {
                        ajaxUtil.ajaxGetPage(urls.get_page_part, {'page': url}).done(function (container) {
                            if(G_MAX_TAB-counter <=0) {
                                element.tabDelete('admin-tab', firstId);
                            }

                            //添加删除样式
                            aHtml += '<i class="layui-icon layui-unselect layui-tab-close">&#x1006;</i>';
                            //添加tab

                            var tabId = new Date().getTime();
                            element.tabAdd('admin-tab', {
                                title: aHtml,
                                content: container,
                                id:tabId
                            });
                            //绑定关闭事件
                            controls.tabs = $('#admin-tab');
                            var _li = controls.tabs.find('li');

                            _li.eq(_li.length - 1).children('i.layui-tab-close').on('click', function () {
                                element.tabDelete('admin-tab', tabId);
                            });
                            //获取焦点

                            element.tabChange('admin-tab', tabId);



                            //绑定ID
                            $(_this).attr('layTabId',tabId);
                        });
                    } else {
                        //切换tab
                        element.tabChange('admin-tab', layTabId);
                    }

                });
            }
        });

        // 主菜单切换
        $('#main_top_tab li').bind('click',function() {
            var title = $(this).text();
            $('.left-top-nav').hide();
            $('.left-top-nav').each(function() {
                if($(this).data('title')==title) {
                    $(this).show();
                }
            });
        });
    }

    function updateSession() {
        setInterval(function(){
            ajaxUtil.doAjaxGet(urls.get_update_session,null);
        },1000*60*60*2);
    }

    exports('admin', (function () {
        init();
    })());
});