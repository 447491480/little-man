/*
 Navicat Premium Data Transfer

 Source Server         : vagrant
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : 192.168.33.10
 Source Database       : little-man

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : utf-8

 Date: 03/16/2017 13:49:31 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `admin_user`
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` tinyint(3) unsigned DEFAULT NULL,
  `rights` text COLLATE utf8_unicode_ci,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `login_index` (`account`,`password`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='后台用户';

-- ----------------------------
--  Records of `admin_user`
-- ----------------------------
BEGIN;
INSERT INTO `admin_user` VALUES ('1', 'admin', 'admin', '0', '[]', null), ('28', 'root', 'root', '1', '[{&quot;title&quot;:&quot;订货管理&quot;,&quot;level&quot;:0},{&quot;title&quot;:&quot;产品管理&quot;,&quot;level&quot;:1},{&quot;title&quot;:&quot;弹出层&quot;,&quot;view&quot;:&quot;page/layui.html&quot;,&quot;level&quot;:2},{&quot;title&quot;:&quot;日期时间选择&quot;,&quot;view&quot;:&quot;page/datetime.html&quot;,&quot;level&quot;:2},{&quot;title&quot;:&quot;多功能分页&quot;,&quot;view&quot;:&quot;page/pagenate.html&quot;,&quot;level&quot;:2},{&quot;title&quot;:&quot;模板引擎&quot;,&quot;view&quot;:&quot;page/tpl.html&quot;,&quot;level&quot;:2},{&quot;title&quot;:&quot;富文本编辑器&quot;,&quot;view&quot;:&quot;page/text.html&quot;,&quot;level&quot;:2},{&quot;title&quot;:&quot;文件上传&quot;,&quot;view&quot;:&quot;page/fileupload.html&quot;,&quot;level&quot;:2},{&quot;title&quot;:&quot;树形菜单&quot;,&quot;view&quot;:&quot;page/tree.html&quot;,&quot;level&quot;:2},{&quot;title&quot;:&quot;工具块&quot;,&quot;view&quot;:&quot;page/tools.html&quot;,&quot;level&quot;:2},{&quot;title&quot;:&quot;流加载&quot;,&quot;view&quot;:&quot;page/flow.html&quot;,&quot;level&quot;:2},{&quot;title&quot;:&quot;代码修饰器&quot;,&quot;view&quot;:&quot;page/code.html&quot;,&quot;level&quot;:2}]', '2017-03-10 13:49:26');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
