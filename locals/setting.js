var configure = require('little-man-config');

var theme = configure.get("app")['default_theme'] || "default";

var sub_theme = "";
if(theme === "bootstrap") {
    sub_theme = "/light"
}

module.exports = {
    "ADMIN_WEB_NAME":"LittleMan管理后台",
    "__ADMIN_STATIC__":theme + "/admin-static" + sub_theme,
    "__JAVASCRIPT__": theme + "/js"
};