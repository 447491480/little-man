/**
 * Created by jhzhang on 2017/5/12.
 */
layui.use(['form', 'ajaxUtil','commonUtil'], function () {
    var form = layui.form();
    var ajaxUtil = layui.ajaxUtil;
    var commonUtil = layui.commonUtil;

    var urls = {};
    urls.get_connetion_list = '/tools/model/connection-list';
    urls.get_db_tables = '/tools/model/db-tables';
    urls.gen_models = '/tools/model/gen-models';

    var controls = {};
    controls.system_model_tools_panel = $('#system_model_tools_panel');
    controls.db_select = controls.system_model_tools_panel.find('select:eq(0)');


    function init() {
        form.render();
        loadModelData();
        initSelect();
        bindEvent();
    }

    function bindEvent() {
        // 单个选择
        $("#system_model_tools_list_grid").on({
            'click': function () {
                var data = JSON.parse(decodeURIComponent($(this).data('tables')));

                ajaxUtil.doAjaxPost(urls.gen_models, {
                    name : controls.db_select.val(),
                    tables: JSON.stringify([data.name])
                }).done(function (ret) {
                    commonUtil.toast(ret.msg);
                });

            }
        }, '.biz-model-create');

        // 切换数据源
        form.on('select(db-select-filter)',function(data){
            refresh({name:data.value,page:1,keyword:''});
        });

        // 查询
        controls.system_model_tools_panel.find('button:eq(0)').bind('click',function(){
            var keyword = $.trim($(this).prev().find('input[type=text]:eq(0)').val());
            var name = controls.db_select.val();
            refresh({name:name,page:1,keyword:keyword});
        });

        // 生成已选择
        controls.system_model_tools_panel.find('button:eq(1)').bind('click',function(){
            var ids = $("#system_model_tools_list_grid").jqGrid('getGridParam','selarrrow');

            var tables = [];
            $(ids).each(function (index, id){
                var row = $("#system_model_tools_list_grid").jqGrid('getRowData', id);
                tables.push(row.name);
            });

            if(tables.length<=0) return commonUtil.toast('请选择数据表');

            ajaxUtil.doAjaxPost(urls.gen_models, {
                name : controls.db_select.val(),
                tables: JSON.stringify(tables)
            }).done(function (ret) {
                commonUtil.toast(ret.msg);
            });
        });

        // 全部生成
        controls.system_model_tools_panel.find('button:eq(2)').bind('click',function(){
            ajaxUtil.doAjaxPost(urls.gen_models, {
                name : controls.db_select.val()
            }).done(function (ret) {
                commonUtil.toast(ret.msg);
            });
        });
    }

    function refresh(data) {
        data = data || {};
        var page = $("#system_model_tools_list_grid").getGridParam('page'); // current page
        var rows = $("#system_model_tools_list_grid").getGridParam('rows'); // rows
        $("#system_model_tools_list_grid").jqGrid('setGridParam', {
            postData: data,
            page: data.page,
            rows: rows
        }).trigger("reloadGrid")
    }

    function loadModelData() {
        $("#system_model_tools_list_grid").jqGrid({
            colModel: [
                {label: '表名', name: 'name', align: 'center'},
                {
                    label: '操作', align: 'center', formatter: function (cellValue, options, rowObject) {
                    return '<a data-tables="' + encodeURIComponent(JSON.stringify(rowObject)) + '" href="javascript:;" class="biz-model-create" style="color: #01AAED;">重新生成</a>'
                }
                }
            ],

            datatype: 'json',
            url: urls.get_db_tables,
            rowNum: 10,
            rowList: [10, 20, 30],
            viewrecords: true, // show the current page, data rang and total records on the toolbar
            height: true,
            fitColumns: true,
            width: true,
            autowidth: true,
            multiselect: true,
            shrinkToFit: true,
            ajaxGridOptions: {
                dataFilter: function (ret) {
                    var retObj = JSON.parse(ret);
                    if (retObj.status == 0) {
                        var retArr = [];
                        layui.each(retObj.data.rows,function(i,o){
                            retArr.push({name:o});
                        });

                        retObj.data.rows = retArr;

                        return JSON.stringify(retObj.data);
                    } else {
                        commonUtil.toast(retObj.msg);
                    }
                }
            },
            pager: "#system_model_tools_list_grid_pager"
        });
        // 初始化宽宽，用于自适应宽度
        $("#system_model_tools_list_grid").setGridWidth($("#admin-tab-container").width() - 10, true);
    }

    function initSelect() {
        ajaxUtil.doAjaxGet(urls.get_connetion_list,null).done(function(ret){
            if(ret.status == 0) {
                controls.db_select.empty();
                layui.each(ret.data,function(i,o){
                    controls.db_select.append('<option value="'+o+'">'+o+'</option>')
                });

                form.render();
            }
        });
    }

    (function () {
        init();
    })();
});