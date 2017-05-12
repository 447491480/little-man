define(function(require,exports) {

    var UEditor = function(id, opt){
        this.id = id;
        UE.delEditor(id);
        //实例化编辑器
        var ueditor = UE.getEditor(id);
        //ueditor.addListener('focus',function(){
        //    opt && opt.onFocus && opt.onFocus();
        //});
        this.isFocus = function (){
            return ueditor.isFocus();
        };
        this.setFocus = function (toEnd) {
            ueditor.focus(toEnd);    //toEnd为true时focus到内容尾部
        };
        this.doBlur = function (){
            ueditor.blur()
        };
        //获得整个html的内容
        this.getAllHtml = function () {
            return ueditor.getAllHtml();
        };
        //插入html
        this.insertHtml = function (value) {
            ueditor.execCommand('insertHtml', value);
        };
        //设置内容 isAppendTo=true追加内容
        this.setContent = function (content, isAppendTo) {
            ueditor.setContent(content, isAppendTo);
        };
        //获得内容
        this.getContent = function () {
            return ueditor.getContent();
        };
        //获得带格式的纯文本内容
        this.getPlainTxt = function () {
            return ueditor.getPlainTxt();
        };
        this.getText = function () {
            //当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
            var range = ueditor.selection.getRange();
            range.select();
            var txt = ueditor.selection.getText();
            return txt;
        };
        //获得编辑器的纯文本内容
        this.getContentTxt = function () {
            return ueditor.getContentTxt();
        };
        //判断编辑器里是否有内容
        this.hasContent = function () {
            return ueditor.hasContents();
        };
        //设置编辑器的高度为h
        this.setHeight = function (h){
            ueditor.setHeight(h);
        };
        //不可编辑
        this.setDisabled = function () {
            ueditor.setDisabled('fullscreen');
        };
        //可以编辑
        this.setEnabled = function () {
            ueditor.setEnabled();
        };
        //隐藏编辑器
        this.hide = function (){
            ueditor.setHide();
        };
        //显示编辑器
        this.show = function (){
            ueditor.setShow();
        };
        //重置编辑器,清空编辑器内容,清空回退列表
        this.reset = function(){
            ueditor.reset();
        };
        //删除编辑器
        this.destroy = function () {
            ueditor.destroy();
        };
    };

    exports.UEditor = UEditor;
});
