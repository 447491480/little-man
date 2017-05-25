/**
 * Created by jhzhang on 2017/5/12.
 */
define(function(require,exports){
    var ajaxUtil = require('util/ajaxUtil').ajaxUtil;
    var logUtil = require('util/logUtil').logUtil;
    var commonUtil = require('util/commonUtil').commonUtil;

    var ctrl = {};
    ctrl.admin_user_mgr_ctrl_panel = $('#admin_user_mgr_ctrl_panel');
    ctrl.admin_user_list_panel = $('#admin_user_list_panel');
    ctrl.admin_user_edit_panel = $('#admin_user_edit_panel');
    ctrl.admin_user_search_panel = $('#admin_user_search_panel');

    var urls = {};
    urls.get_menu = '/admin/menu/get-menu';
    urls.get_page_part = '/admin/page/get-part';
    urls.admin_user_save = '/admin/user/save';
    urls.admin_user_query = '/admin/user/query';
    urls.admin_user_delete = '/admin/user/delete';

    var G = {};
    G.USERLIST_DATA = null;
    G.USERLIST_PAGE = 1;
    G.USERLIST_LIMIT = 10;

    var M = {};
    M.CURRENT_SELECTED = null;
    M.MODIFY_STATUS = false;

    var setting = {
        view: {
            selectedMulti: false
        },
        check: {
            enable: true,
            chkboxType: {"Y": "ps", "N": "ps"}
        },

        data: {
            simpleData: {
                enable: true
            }
        }
    };

    function init() {
        bindEvent();
        loadModelData();
    }

    function initTreeList(data) {
        var def = $.Deferred();

        var compareNodes = null;

        if (data) {
            if (!data.rights) {
                data.rights = '[]';
            }

            compareNodes = JSON.parse(commonUtil.htmlDecode(data.rights));
        }

        ajaxUtil.doAjaxGet(urls.get_menu, null).done(function (ret) {
            if (ret.status == 0) {
                var nodes = [];

                var menus = ret.data.menus;
                $.each(menus, function (i, menuObj) {

                    var tempMain = {};
                    tempMain.name = menuObj.title;

                    tempMain.children = [];
                    $.each(menuObj.nav_menu, function (i, navObj) {
                        var tempNav = {};
                        tempNav.name = navObj.title;
                        tempNav.children = [];

                        $.each(navObj.third_menu, function (i, thirdObj) {
                            var tempThird = {};
                            tempThird.name = thirdObj.title;
                            tempThird.title = thirdObj.title;
                            tempThird.view = thirdObj.view;

                            if (data) {
                                $.each(compareNodes, function (i, compNode) {
                                    if (tempThird.name == compNode.title && tempThird.view == compNode.view && compNode.level == 2) {
                                        tempThird.checked = true;
                                    }
                                });

                                if (data.type == 0) {
                                    tempThird.checked = true;
                                    tempThird.chkDisabled = true;
                                }
                            }

                            tempNav.children.push(tempThird);
                        });

                        if (data) {
                            $.each(compareNodes, function (i, compNode) {
                                if (tempNav.name == compNode.title && tempNav.view == compNode.view && compNode.level == 1) {
                                    tempNav.checked = true;
                                }
                            });

                            if (data.type == 0) {
                                tempNav.checked = true;
                                tempNav.chkDisabled = true;
                            }
                        }

                        tempMain.children.push(tempNav);
                    });

                    if (data) {
                        $.each(compareNodes, function (i, compNode) {
                            if (tempMain.name == compNode.title && tempMain.view == compNode.view && compNode.level == 0) {
                                tempMain.checked = true;
                            }
                        });

                        if (data.type == 0) {
                            tempMain.checked = true;
                            tempMain.chkDisabled = true;
                        }
                    }

                    nodes.push(tempMain);
                });

                $.fn.zTree.init($("#admin_user_menu_tree"), setting, nodes);
            }

            def.resolve();
        });

        return def.promise();
    }

    function showAdminUserEditPanel() {
        ctrl.admin_user_edit_panel.show();
        ctrl.admin_user_list_panel.hide();
    }

    function showAdminUserListPanel() {
        ctrl.admin_user_edit_panel.hide();
        ctrl.admin_user_list_panel.show();
    }

    function refresh(data) {
        data = data || {};
        var page = $("#admin_user_list_grid").getGridParam('page'); // current page
        var rows = $("#admin_user_list_grid").getGridParam('rows'); // rows
        $("#admin_user_list_grid").jqGrid('setGridParam', {
            postData: data,
            page: page,
            rows: rows
        }).trigger("reloadGrid")
    }

    function loadModelData() {
        $("#admin_user_list_grid").jqGrid({
            colModel: [
                {label: '账号', name: 'account', align: 'center'},
                {label: '密码', name: 'password', align: 'center'},
                {
                    label: '创建时间',
                    name: 'create_time',
                    align: 'center',
                    formatter: function (cellValue, options, rowObject) {
                        return commonUtil.getTimeString(cellValue);
                    }
                },
                {
                    label: '操作', align: 'center', formatter: function (cellValue, options, rowObject) {
                    return '<a data-user="' + encodeURIComponent(JSON.stringify(rowObject)) + '" href="javascript:;" class="admin-user-modify" style="color: #01AAED;">修改</a>&nbsp;&nbsp;' +
                        '<a data-user="' + encodeURIComponent(JSON.stringify(rowObject)) + '" href="javascript:;" class="admin-user-delete" style="color: #01AAED;">删除</a>'
                }
                }
            ],
            styleUI : 'Bootstrap',
            datatype: 'json',
            url: urls.admin_user_query,
            rowNum: 10,
            rowList: [10, 20, 30],
            viewrecords: true, // show the current page, data rang and total records on the toolbar
            height: true,
            fitColumns: true,
            width: true,
            autowidth: true,
            shrinkToFit: true,
            ajaxGridOptions: {
                dataFilter: function (ret) {
                    var retObj = JSON.parse(ret);
                    if (retObj.status == 0) {
                        return JSON.stringify(retObj.data);
                    } else {
                        commonUtil.toast(retObj.msg);
                    }
                }
            },
            pager: "#admin_user_list_grid_pager"
        });
        // 初始化宽宽，用于自适应宽度
        $("#admin_user_list_grid").setGridWidth($("#page-wrapper").width(), true);
    }

    function bindEvent() {
        // 点击添加
        ctrl.admin_user_mgr_ctrl_panel.find('button:eq(0)').bind('click', function () {
            initTreeList();
            showAdminUserEditPanel();

            M.CURRENT_SELECTED = null;
            M.MODIFY_STATUS = false;

            $('#admin_user_edit_panel').find('button:eq(-1)').trigger('click');
        });

        //监听提交
        $('#admin_user_edit_panel').find('button:eq(-2)').bind('click', function () {
            var args = {};
            args.account = $.trim(ctrl.admin_user_edit_panel.find('input:eq(0)').val());
            args.password = $.trim(ctrl.admin_user_edit_panel.find('input:eq(1)').val());

            var rights = [];

            var zTree = $.fn.zTree.getZTreeObj("admin_user_menu_tree");

            var checkedNodes = zTree.getCheckedNodes(true);

            $.each(checkedNodes, function (i, nodesObj) {
//                    if(nodesObj.view !== undefined) {
                var temp = {};
                temp.title = nodesObj.name;
                temp.view = nodesObj.view;
                temp.level = nodesObj.level;

                rights.push(temp);
//                    }
            });

            args.rights = JSON.stringify(rights);

            if (M.MODIFY_STATUS == true) {
                args.id = M.CURRENT_SELECTED.id;
            }

            ajaxUtil.doAjaxPost(urls.admin_user_save, args).done(function (ret) {
                if (ret.status == 0) {
                    $('#admin_user_edit_panel').find('button:eq(-1)').trigger('click');
                    showAdminUserListPanel();
                    refresh();
                } else {
                    commonUtil.toast(ret.msg);
                }
            });
            return false;
        });

        // 重置
        $('#admin_user_edit_panel').find('button:eq(-1)').bind('click', function () {
            ctrl.admin_user_edit_panel.find('input:eq(0)').val("");
            ctrl.admin_user_edit_panel.find('input:eq(1)').val("");
            initTreeList();
        });

        // 返回
        $('#admin_user_edit_panel').find('button:eq(0)').bind('click', function () {
            showAdminUserListPanel();
            return false;
        });

        // 修改
        $("#admin_user_list_grid").on({
            'click': function () {
                var data = JSON.parse(decodeURIComponent($(this).data('user')));

                M.CURRENT_SELECTED = data;
                M.MODIFY_STATUS = true;

                showAdminUserEditPanel();
                ctrl.admin_user_edit_panel.find('input:eq(0)').val(data.account);
                ctrl.admin_user_edit_panel.find('input:eq(1)').val(data.password);
                initTreeList(data);
            }
        }, '.admin-user-modify');

        // 删除
        $("#admin_user_list_grid").on({
            'click': function () {
                var data = JSON.parse(decodeURIComponent($(this).data('user')));

                var confirmLayer = layer.confirm('确定删除？', {
                    btn: ['确定', '取消'] //按钮
                }, function () {

                    if (data.type == 0) {
                        return commonUtil.toast('超级管理员账号不能删除');
                    }

                    layer.close(confirmLayer);
                    ajaxUtil.doAjaxGet(urls.admin_user_delete, {'id': data.id}).done(function (ret) {
                        if (ret.status == 0) {
                            commonUtil.toast(ret.msg);
                            refresh();
                        }
                    });
                }, function () {

                });
            }
        }, '.admin-user-delete');

        ctrl.admin_user_search_panel.find('button:eq(0)').bind('click',function(){
            var keyword = $.trim(ctrl.admin_user_search_panel.find('input:eq(0)').val());
            refresh({keyword:keyword});
        })
    }


    exports.init = init;
});