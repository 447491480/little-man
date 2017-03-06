define(function(require,exports) {

    var UMEditor = function(id, opt){
        this.id = id;
        UM.delEditor(id);
        //实例化编辑器
        var um = UM.getEditor(id);
        //编辑器失去焦点
        um.addListener('blur',function(){
            opt.onBlur && opt.onBlur();
        });
        um.addListener('focus',function(){
            opt.onFocus && opt.onFocus();
        });
        this.isFocus = function (){
            return um.isFocus();
        };
        this.setFocus = function () {
            um.focus();
        };
        this.doBlur = function (){
            um.blur()
        };
        //获得整个html的内容
        this.getAllHtml = function () {
            return um.getAllHtml();
        };
        //插入html
        this.insertHtml = function (value) {
            um.execCommand('insertHtml', value)
        };
        //设置内容 isAppendTo=true追加内容
        this.setContent = function (content, isAppendTo) {
            um.setContent(content, isAppendTo);
        };
        //获得内容
        this.getContent = function () {
            return um.getContent();
        };
        //获得带格式的纯文本内容
        this.getPlainTxt = function () {
            return um.getPlainTxt();
        };
        this.getText = function () {
            //当你点击按钮时编辑区域已经失去了焦点，如果直接用getText将不会得到内容，所以要在选回来，然后取得内容
            var range = um.selection.getRange();
            range.select();
            var txt = um.selection.getText();
            return txt;
        };
        //获得编辑器的纯文本内容
        this.getContentTxt = function () {
            return um.getContentTxt();
        };
        //判断编辑器里是否有内容
        this.hasContent = function () {
            return um.hasContents();
        };
        //设置编辑器的高度为h
        this.setHeight = function (h){
            um.setHeight(h);
        };
        //设置编辑器的宽度为w
        this.setWidth = function (w){
            um.setWidth(w)
        };
        //不可编辑
        this.setDisabled = function () {
            um.setDisabled('fullscreen');
        };
        //可以编辑
        this.setEnabled = function () {
            um.setEnabled();
        };
        //隐藏编辑器
        this.hide = function (){
            um.setHide();
        };
        //显示编辑器
        this.show = function (){
            um.setShow();
        };
        //删除编辑器
        this.destroy = function () {
            um.destroy();
        };
    };

    exports.UMEditor = UMEditor;
});
