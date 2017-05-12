define(function(require,exports) {
    var district = [{"Id": 1, "DisName": "东城区", "CityID": 1, "DisSort": null}, {
        "Id": 2,
        "DisName": "西城区",
        "CityID": 1,
        "DisSort": null
    }, {"Id": 3, "DisName": "崇文区", "CityID": 1, "DisSort": null}, {
        "Id": 4,
        "DisName": "宣武区",
        "CityID": 1,
        "DisSort": null
    }, {"Id": 5, "DisName": "朝阳区", "CityID": 1, "DisSort": null}, {
        "Id": 6,
        "DisName": "丰台区",
        "CityID": 1,
        "DisSort": null
    }, {"Id": 7, "DisName": "石景山区", "CityID": 1, "DisSort": null}, {
        "Id": 8,
        "DisName": "海淀区",
        "CityID": 1,
        "DisSort": null
    }, {"Id": 9, "DisName": "门头沟区", "CityID": 1, "DisSort": null}, {
        "Id": 10,
        "DisName": "房山区",
        "CityID": 1,
        "DisSort": null
    }, {"Id": 11, "DisName": "通州区", "CityID": 1, "DisSort": null}, {
        "Id": 12,
        "DisName": "顺义区",
        "CityID": 1,
        "DisSort": null
    }, {"Id": 13, "DisName": "昌平区", "CityID": 1, "DisSort": null}, {
        "Id": 14,
        "DisName": "大兴区",
        "CityID": 1,
        "DisSort": null
    }, {"Id": 15, "DisName": "怀柔区", "CityID": 1, "DisSort": null}, {
        "Id": 16,
        "DisName": "平谷区",
        "CityID": 1,
        "DisSort": null
    }, {"Id": 17, "DisName": "密云县", "CityID": 1, "DisSort": null}, {
        "Id": 18,
        "DisName": "延庆县",
        "CityID": 1,
        "DisSort": null
    }, {"Id": 19, "DisName": "和平区", "CityID": 2, "DisSort": null}, {
        "Id": 20,
        "DisName": "河东区",
        "CityID": 2,
        "DisSort": null
    }, {"Id": 21, "DisName": "河西区", "CityID": 2, "DisSort": null}, {
        "Id": 22,
        "DisName": "南开区",
        "CityID": 2,
        "DisSort": null
    }, {"Id": 23, "DisName": "河北区", "CityID": 2, "DisSort": null}, {
        "Id": 24,
        "DisName": "红桥区",
        "CityID": 2,
        "DisSort": null
    }, {"Id": 25, "DisName": "塘沽区", "CityID": 2, "DisSort": null}, {
        "Id": 26,
        "DisName": "汉沽区",
        "CityID": 2,
        "DisSort": null
    }, {"Id": 27, "DisName": "大港区", "CityID": 2, "DisSort": null}, {
        "Id": 28,
        "DisName": "东丽区",
        "CityID": 2,
        "DisSort": null
    }, {"Id": 29, "DisName": "西青区", "CityID": 2, "DisSort": null}, {
        "Id": 30,
        "DisName": "津南区",
        "CityID": 2,
        "DisSort": null
    }, {"Id": 31, "DisName": "北辰区", "CityID": 2, "DisSort": null}, {
        "Id": 32,
        "DisName": "武清区",
        "CityID": 2,
        "DisSort": null
    }, {"Id": 33, "DisName": "宝坻区", "CityID": 2, "DisSort": null}, {
        "Id": 34,
        "DisName": "宁河县",
        "CityID": 2,
        "DisSort": null
    }, {"Id": 35, "DisName": "静海县", "CityID": 2, "DisSort": null}, {
        "Id": 36,
        "DisName": "蓟县",
        "CityID": 2,
        "DisSort": null
    }, {"Id": 37, "DisName": "黄浦区", "CityID": 3, "DisSort": null}, {
        "Id": 38,
        "DisName": "卢湾区",
        "CityID": 3,
        "DisSort": null
    }, {"Id": 39, "DisName": "徐汇区", "CityID": 3, "DisSort": null}, {
        "Id": 40,
        "DisName": "长宁区",
        "CityID": 3,
        "DisSort": null
    }, {"Id": 41, "DisName": "静安区", "CityID": 3, "DisSort": null}, {
        "Id": 42,
        "DisName": "普陀区",
        "CityID": 3,
        "DisSort": null
    }, {"Id": 43, "DisName": "闸北区", "CityID": 3, "DisSort": null}, {
        "Id": 44,
        "DisName": "虹口区",
        "CityID": 3,
        "DisSort": null
    }, {"Id": 45, "DisName": "杨浦区", "CityID": 3, "DisSort": null}, {
        "Id": 46,
        "DisName": "闵行区",
        "CityID": 3,
        "DisSort": null
    }, {"Id": 47, "DisName": "宝山区", "CityID": 3, "DisSort": null}, {
        "Id": 48,
        "DisName": "嘉定区",
        "CityID": 3,
        "DisSort": null
    }, {"Id": 49, "DisName": "浦东新区", "CityID": 3, "DisSort": null}, {
        "Id": 50,
        "DisName": "金山区",
        "CityID": 3,
        "DisSort": null
    }, {"Id": 51, "DisName": "松江区", "CityID": 3, "DisSort": null}, {
        "Id": 52,
        "DisName": "青浦区",
        "CityID": 3,
        "DisSort": null
    }, {"Id": 53, "DisName": "南汇区", "CityID": 3, "DisSort": null}, {
        "Id": 54,
        "DisName": "奉贤区",
        "CityID": 3,
        "DisSort": null
    }, {"Id": 55, "DisName": "崇明县", "CityID": 3, "DisSort": null}, {
        "Id": 56,
        "DisName": "万州区",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 57, "DisName": "涪陵区", "CityID": 4, "DisSort": null}, {
        "Id": 58,
        "DisName": "渝中区",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 59, "DisName": "大渡口区", "CityID": 4, "DisSort": null}, {
        "Id": 60,
        "DisName": "江北区",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 61, "DisName": "沙坪坝区", "CityID": 4, "DisSort": null}, {
        "Id": 62,
        "DisName": "九龙坡区",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 63, "DisName": "南岸区", "CityID": 4, "DisSort": null}, {
        "Id": 64,
        "DisName": "北碚区",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 65, "DisName": "万盛区", "CityID": 4, "DisSort": null}, {
        "Id": 66,
        "DisName": "双桥区",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 67, "DisName": "渝北区", "CityID": 4, "DisSort": null}, {
        "Id": 68,
        "DisName": "巴南区",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 69, "DisName": "黔江区", "CityID": 4, "DisSort": null}, {
        "Id": 70,
        "DisName": "长寿区",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 71, "DisName": "江津区", "CityID": 4, "DisSort": null}, {
        "Id": 72,
        "DisName": "合川区",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 73, "DisName": "永川区", "CityID": 4, "DisSort": null}, {
        "Id": 74,
        "DisName": "南川区",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 75, "DisName": "綦江县", "CityID": 4, "DisSort": null}, {
        "Id": 76,
        "DisName": "潼南县",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 77, "DisName": "铜梁县", "CityID": 4, "DisSort": null}, {
        "Id": 78,
        "DisName": "大足县",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 79, "DisName": "荣昌县", "CityID": 4, "DisSort": null}, {
        "Id": 80,
        "DisName": "璧山县",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 81, "DisName": "梁平县", "CityID": 4, "DisSort": null}, {
        "Id": 82,
        "DisName": "城口县",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 83, "DisName": "丰都县", "CityID": 4, "DisSort": null}, {
        "Id": 84,
        "DisName": "垫江县",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 85, "DisName": "武隆县", "CityID": 4, "DisSort": null}, {
        "Id": 86,
        "DisName": "忠县",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 87, "DisName": "开县", "CityID": 4, "DisSort": null}, {
        "Id": 88,
        "DisName": "云阳县",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 89, "DisName": "奉节县", "CityID": 4, "DisSort": null}, {
        "Id": 90,
        "DisName": "巫山县",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 91, "DisName": "巫溪县", "CityID": 4, "DisSort": null}, {
        "Id": 92,
        "DisName": "石柱土家族自治县",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 93, "DisName": "秀山土家族苗族自治县", "CityID": 4, "DisSort": null}, {
        "Id": 94,
        "DisName": "酉阳土家族苗族自治县",
        "CityID": 4,
        "DisSort": null
    }, {"Id": 95, "DisName": "彭水苗族土家族自治县", "CityID": 4, "DisSort": null}, {
        "Id": 96,
        "DisName": "邯山区",
        "CityID": 5,
        "DisSort": null
    }, {"Id": 97, "DisName": "丛台区", "CityID": 5, "DisSort": null}, {
        "Id": 98,
        "DisName": "复兴区",
        "CityID": 5,
        "DisSort": null
    }, {"Id": 99, "DisName": "峰峰矿区", "CityID": 5, "DisSort": null}, {
        "Id": 100,
        "DisName": "邯郸县",
        "CityID": 5,
        "DisSort": null
    }, {"Id": 101, "DisName": "临漳县", "CityID": 5, "DisSort": null}, {
        "Id": 102,
        "DisName": "成安县",
        "CityID": 5,
        "DisSort": null
    }, {"Id": 103, "DisName": "大名县", "CityID": 5, "DisSort": null}, {
        "Id": 104,
        "DisName": "涉县",
        "CityID": 5,
        "DisSort": null
    }, {"Id": 105, "DisName": "磁县", "CityID": 5, "DisSort": null}, {
        "Id": 106,
        "DisName": "肥乡县",
        "CityID": 5,
        "DisSort": null
    }, {"Id": 107, "DisName": "永年县", "CityID": 5, "DisSort": null}, {
        "Id": 108,
        "DisName": "邱县",
        "CityID": 5,
        "DisSort": null
    }, {"Id": 109, "DisName": "鸡泽县", "CityID": 5, "DisSort": null}, {
        "Id": 110,
        "DisName": "广平县",
        "CityID": 5,
        "DisSort": null
    }, {"Id": 111, "DisName": "馆陶县", "CityID": 5, "DisSort": null}, {
        "Id": 112,
        "DisName": "魏县",
        "CityID": 5,
        "DisSort": null
    }, {"Id": 113, "DisName": "曲周县", "CityID": 5, "DisSort": null}, {
        "Id": 114,
        "DisName": "武安市",
        "CityID": 5,
        "DisSort": null
    }, {"Id": 115, "DisName": "长安区", "CityID": 6, "DisSort": null}, {
        "Id": 116,
        "DisName": "桥东区",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 117, "DisName": "桥西区", "CityID": 6, "DisSort": null}, {
        "Id": 118,
        "DisName": "新华区",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 119, "DisName": "井陉矿区", "CityID": 6, "DisSort": null}, {
        "Id": 120,
        "DisName": "裕华区",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 121, "DisName": "井陉县", "CityID": 6, "DisSort": null}, {
        "Id": 122,
        "DisName": "正定县",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 123, "DisName": "栾城县", "CityID": 6, "DisSort": null}, {
        "Id": 124,
        "DisName": "行唐县",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 125, "DisName": "灵寿县", "CityID": 6, "DisSort": null}, {
        "Id": 126,
        "DisName": "高邑县",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 127, "DisName": "深泽县", "CityID": 6, "DisSort": null}, {
        "Id": 128,
        "DisName": "赞皇县",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 129, "DisName": "无极县", "CityID": 6, "DisSort": null}, {
        "Id": 130,
        "DisName": "平山县",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 131, "DisName": "元氏县", "CityID": 6, "DisSort": null}, {
        "Id": 132,
        "DisName": "赵县",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 133, "DisName": "辛集市", "CityID": 6, "DisSort": null}, {
        "Id": 134,
        "DisName": "藁城市",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 135, "DisName": "晋州市", "CityID": 6, "DisSort": null}, {
        "Id": 136,
        "DisName": "新乐市",
        "CityID": 6,
        "DisSort": null
    }, {"Id": 137, "DisName": "鹿泉市", "CityID": 6, "DisSort": null}, {
        "Id": 138,
        "DisName": "新市区",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 139, "DisName": "北市区", "CityID": 7, "DisSort": null}, {
        "Id": 140,
        "DisName": "南市区",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 141, "DisName": "满城县", "CityID": 7, "DisSort": null}, {
        "Id": 142,
        "DisName": "清苑县",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 143, "DisName": "涞水县", "CityID": 7, "DisSort": null}, {
        "Id": 144,
        "DisName": "阜平县",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 145, "DisName": "徐水县", "CityID": 7, "DisSort": null}, {
        "Id": 146,
        "DisName": "定兴县",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 147, "DisName": "唐县", "CityID": 7, "DisSort": null}, {
        "Id": 148,
        "DisName": "高阳县",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 149, "DisName": "容城县", "CityID": 7, "DisSort": null}, {
        "Id": 150,
        "DisName": "涞源县",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 151, "DisName": "望都县", "CityID": 7, "DisSort": null}, {
        "Id": 152,
        "DisName": "安新县",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 153, "DisName": "易县", "CityID": 7, "DisSort": null}, {
        "Id": 154,
        "DisName": "曲阳县",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 155, "DisName": "蠡县", "CityID": 7, "DisSort": null}, {
        "Id": 156,
        "DisName": "顺平县",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 157, "DisName": "博野县", "CityID": 7, "DisSort": null}, {
        "Id": 158,
        "DisName": "雄县",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 159, "DisName": "涿州市", "CityID": 7, "DisSort": null}, {
        "Id": 160,
        "DisName": "定州市",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 161, "DisName": "安国市", "CityID": 7, "DisSort": null}, {
        "Id": 162,
        "DisName": "高碑店市",
        "CityID": 7,
        "DisSort": null
    }, {"Id": 163, "DisName": "桥东区", "CityID": 8, "DisSort": null}, {
        "Id": 164,
        "DisName": "桥西区",
        "CityID": 8,
        "DisSort": null
    }, {"Id": 165, "DisName": "宣化区", "CityID": 8, "DisSort": null}, {
        "Id": 166,
        "DisName": "下花园区",
        "CityID": 8,
        "DisSort": null
    }, {"Id": 167, "DisName": "宣化县", "CityID": 8, "DisSort": null}, {
        "Id": 168,
        "DisName": "张北县",
        "CityID": 8,
        "DisSort": null
    }, {"Id": 169, "DisName": "康保县", "CityID": 8, "DisSort": null}, {
        "Id": 170,
        "DisName": "沽源县",
        "CityID": 8,
        "DisSort": null
    }, {"Id": 171, "DisName": "尚义县", "CityID": 8, "DisSort": null}, {
        "Id": 172,
        "DisName": "蔚县",
        "CityID": 8,
        "DisSort": null
    }, {"Id": 173, "DisName": "阳原县", "CityID": 8, "DisSort": null}, {
        "Id": 174,
        "DisName": "怀安县",
        "CityID": 8,
        "DisSort": null
    }, {"Id": 175, "DisName": "万全县", "CityID": 8, "DisSort": null}, {
        "Id": 176,
        "DisName": "怀来县",
        "CityID": 8,
        "DisSort": null
    }, {"Id": 177, "DisName": "涿鹿县", "CityID": 8, "DisSort": null}, {
        "Id": 178,
        "DisName": "赤城县",
        "CityID": 8,
        "DisSort": null
    }, {"Id": 179, "DisName": "崇礼县", "CityID": 8, "DisSort": null}, {
        "Id": 180,
        "DisName": "双桥区",
        "CityID": 9,
        "DisSort": null
    }, {"Id": 181, "DisName": "双滦区", "CityID": 9, "DisSort": null}, {
        "Id": 182,
        "DisName": "鹰手营子矿区",
        "CityID": 9,
        "DisSort": null
    }, {"Id": 183, "DisName": "承德县", "CityID": 9, "DisSort": null}, {
        "Id": 184,
        "DisName": "兴隆县",
        "CityID": 9,
        "DisSort": null
    }, {"Id": 185, "DisName": "平泉县", "CityID": 9, "DisSort": null}, {
        "Id": 186,
        "DisName": "滦平县",
        "CityID": 9,
        "DisSort": null
    }, {"Id": 187, "DisName": "隆化县", "CityID": 9, "DisSort": null}, {
        "Id": 188,
        "DisName": "丰宁满族自治县",
        "CityID": 9,
        "DisSort": null
    }, {"Id": 189, "DisName": "宽城满族自治县", "CityID": 9, "DisSort": null}, {
        "Id": 190,
        "DisName": "围场满族蒙古族自治县",
        "CityID": 9,
        "DisSort": null
    }, {"Id": 191, "DisName": "路南区", "CityID": 10, "DisSort": null}, {
        "Id": 192,
        "DisName": "路北区",
        "CityID": 10,
        "DisSort": null
    }, {"Id": 193, "DisName": "古冶区", "CityID": 10, "DisSort": null}, {
        "Id": 194,
        "DisName": "开平区",
        "CityID": 10,
        "DisSort": null
    }, {"Id": 195, "DisName": "丰南区", "CityID": 10, "DisSort": null}, {
        "Id": 196,
        "DisName": "丰润区",
        "CityID": 10,
        "DisSort": null
    }, {"Id": 197, "DisName": "滦县", "CityID": 10, "DisSort": null}, {
        "Id": 198,
        "DisName": "滦南县",
        "CityID": 10,
        "DisSort": null
    }, {"Id": 199, "DisName": "乐亭县", "CityID": 10, "DisSort": null}, {
        "Id": 200,
        "DisName": "迁西县",
        "CityID": 10,
        "DisSort": null
    }, {"Id": 201, "DisName": "玉田县", "CityID": 10, "DisSort": null}, {
        "Id": 202,
        "DisName": "唐海县",
        "CityID": 10,
        "DisSort": null
    }, {"Id": 203, "DisName": "遵化市", "CityID": 10, "DisSort": null}, {
        "Id": 204,
        "DisName": "迁安市",
        "CityID": 10,
        "DisSort": null
    }, {"Id": 205, "DisName": "安次区", "CityID": 11, "DisSort": null}, {
        "Id": 206,
        "DisName": "广阳区",
        "CityID": 11,
        "DisSort": null
    }, {"Id": 207, "DisName": "固安县", "CityID": 11, "DisSort": null}, {
        "Id": 208,
        "DisName": "永清县",
        "CityID": 11,
        "DisSort": null
    }, {"Id": 209, "DisName": "香河县", "CityID": 11, "DisSort": null}, {
        "Id": 210,
        "DisName": "大城县",
        "CityID": 11,
        "DisSort": null
    }, {"Id": 211, "DisName": "文安县", "CityID": 11, "DisSort": null}, {
        "Id": 212,
        "DisName": "大厂回族自治县",
        "CityID": 11,
        "DisSort": null
    }, {"Id": 213, "DisName": "霸州市", "CityID": 11, "DisSort": null}, {
        "Id": 214,
        "DisName": "三河市",
        "CityID": 11,
        "DisSort": null
    }, {"Id": 215, "DisName": "新华区", "CityID": 12, "DisSort": null}, {
        "Id": 216,
        "DisName": "运河区",
        "CityID": 12,
        "DisSort": null
    }, {"Id": 217, "DisName": "沧县", "CityID": 12, "DisSort": null}, {
        "Id": 218,
        "DisName": "青县",
        "CityID": 12,
        "DisSort": null
    }, {"Id": 219, "DisName": "东光县", "CityID": 12, "DisSort": null}, {
        "Id": 220,
        "DisName": "海兴县",
        "CityID": 12,
        "DisSort": null
    }, {"Id": 221, "DisName": "盐山县", "CityID": 12, "DisSort": null}, {
        "Id": 222,
        "DisName": "肃宁县",
        "CityID": 12,
        "DisSort": null
    }, {"Id": 223, "DisName": "南皮县", "CityID": 12, "DisSort": null}, {
        "Id": 224,
        "DisName": "吴桥县",
        "CityID": 12,
        "DisSort": null
    }, {"Id": 225, "DisName": "献县", "CityID": 12, "DisSort": null}, {
        "Id": 226,
        "DisName": "孟村回族自治县",
        "CityID": 12,
        "DisSort": null
    }, {"Id": 227, "DisName": "泊头市", "CityID": 12, "DisSort": null}, {
        "Id": 228,
        "DisName": "任丘市",
        "CityID": 12,
        "DisSort": null
    }, {"Id": 229, "DisName": "黄骅市", "CityID": 12, "DisSort": null}, {
        "Id": 230,
        "DisName": "河间市",
        "CityID": 12,
        "DisSort": null
    }, {"Id": 231, "DisName": "桃城区", "CityID": 13, "DisSort": null}, {
        "Id": 232,
        "DisName": "枣强县",
        "CityID": 13,
        "DisSort": null
    }, {"Id": 233, "DisName": "武邑县", "CityID": 13, "DisSort": null}, {
        "Id": 234,
        "DisName": "武强县",
        "CityID": 13,
        "DisSort": null
    }, {"Id": 235, "DisName": "饶阳县", "CityID": 13, "DisSort": null}, {
        "Id": 236,
        "DisName": "安平县",
        "CityID": 13,
        "DisSort": null
    }, {"Id": 237, "DisName": "故城县", "CityID": 13, "DisSort": null}, {
        "Id": 238,
        "DisName": "景县",
        "CityID": 13,
        "DisSort": null
    }, {"Id": 239, "DisName": "阜城县", "CityID": 13, "DisSort": null}, {
        "Id": 240,
        "DisName": "冀州市",
        "CityID": 13,
        "DisSort": null
    }, {"Id": 241, "DisName": "深州市", "CityID": 13, "DisSort": null}, {
        "Id": 242,
        "DisName": "桥东区",
        "CityID": 14,
        "DisSort": null
    }, {"Id": 243, "DisName": "桥西区", "CityID": 14, "DisSort": null}, {
        "Id": 244,
        "DisName": "邢台县",
        "CityID": 14,
        "DisSort": null
    }, {"Id": 245, "DisName": "临城县", "CityID": 14, "DisSort": null}, {
        "Id": 246,
        "DisName": "内丘县",
        "CityID": 14,
        "DisSort": null
    }, {"Id": 247, "DisName": "柏乡县", "CityID": 14, "DisSort": null}, {
        "Id": 248,
        "DisName": "隆尧县",
        "CityID": 14,
        "DisSort": null
    }, {"Id": 249, "DisName": "任县", "CityID": 14, "DisSort": null}, {
        "Id": 250,
        "DisName": "南和县",
        "CityID": 14,
        "DisSort": null
    }, {"Id": 251, "DisName": "宁晋县", "CityID": 14, "DisSort": null}, {
        "Id": 252,
        "DisName": "巨鹿县",
        "CityID": 14,
        "DisSort": null
    }, {"Id": 253, "DisName": "新河县", "CityID": 14, "DisSort": null}, {
        "Id": 254,
        "DisName": "广宗县",
        "CityID": 14,
        "DisSort": null
    }, {"Id": 255, "DisName": "平乡县", "CityID": 14, "DisSort": null}, {
        "Id": 256,
        "DisName": "威县",
        "CityID": 14,
        "DisSort": null
    }, {"Id": 257, "DisName": "清河县", "CityID": 14, "DisSort": null}, {
        "Id": 258,
        "DisName": "临西县",
        "CityID": 14,
        "DisSort": null
    }, {"Id": 259, "DisName": "南宫市", "CityID": 14, "DisSort": null}, {
        "Id": 260,
        "DisName": "沙河市",
        "CityID": 14,
        "DisSort": null
    }, {"Id": 261, "DisName": "海港区", "CityID": 15, "DisSort": null}, {
        "Id": 262,
        "DisName": "山海关区",
        "CityID": 15,
        "DisSort": null
    }, {"Id": 263, "DisName": "北戴河区", "CityID": 15, "DisSort": null}, {
        "Id": 264,
        "DisName": "青龙满族自治县",
        "CityID": 15,
        "DisSort": null
    }, {"Id": 265, "DisName": "昌黎县", "CityID": 15, "DisSort": null}, {
        "Id": 266,
        "DisName": "抚宁县",
        "CityID": 15,
        "DisSort": null
    }, {"Id": 267, "DisName": "卢龙县", "CityID": 15, "DisSort": null}, {
        "Id": 268,
        "DisName": "朔城区",
        "CityID": 16,
        "DisSort": null
    }, {"Id": 269, "DisName": "平鲁区", "CityID": 16, "DisSort": null}, {
        "Id": 270,
        "DisName": "山阴县",
        "CityID": 16,
        "DisSort": null
    }, {"Id": 271, "DisName": "应县", "CityID": 16, "DisSort": null}, {
        "Id": 272,
        "DisName": "右玉县",
        "CityID": 16,
        "DisSort": null
    }, {"Id": 273, "DisName": "怀仁县", "CityID": 16, "DisSort": null}, {
        "Id": 274,
        "DisName": "忻府区",
        "CityID": 17,
        "DisSort": null
    }, {"Id": 275, "DisName": "定襄县", "CityID": 17, "DisSort": null}, {
        "Id": 276,
        "DisName": "五台县",
        "CityID": 17,
        "DisSort": null
    }, {"Id": 277, "DisName": "代县", "CityID": 17, "DisSort": null}, {
        "Id": 278,
        "DisName": "繁峙县",
        "CityID": 17,
        "DisSort": null
    }, {"Id": 279, "DisName": "宁武县", "CityID": 17, "DisSort": null}, {
        "Id": 280,
        "DisName": "静乐县",
        "CityID": 17,
        "DisSort": null
    }, {"Id": 281, "DisName": "神池县", "CityID": 17, "DisSort": null}, {
        "Id": 282,
        "DisName": "五寨县",
        "CityID": 17,
        "DisSort": null
    }, {"Id": 283, "DisName": "岢岚县", "CityID": 17, "DisSort": null}, {
        "Id": 284,
        "DisName": "河曲县",
        "CityID": 17,
        "DisSort": null
    }, {"Id": 285, "DisName": "保德县", "CityID": 17, "DisSort": null}, {
        "Id": 286,
        "DisName": "偏关县",
        "CityID": 17,
        "DisSort": null
    }, {"Id": 287, "DisName": "原平市", "CityID": 17, "DisSort": null}, {
        "Id": 288,
        "DisName": "小店区",
        "CityID": 18,
        "DisSort": null
    }, {"Id": 289, "DisName": "迎泽区", "CityID": 18, "DisSort": null}, {
        "Id": 290,
        "DisName": "杏花岭区",
        "CityID": 18,
        "DisSort": null
    }, {"Id": 291, "DisName": "尖草坪区", "CityID": 18, "DisSort": null}, {
        "Id": 292,
        "DisName": "万柏林区",
        "CityID": 18,
        "DisSort": null
    }, {"Id": 293, "DisName": "晋源区", "CityID": 18, "DisSort": null}, {
        "Id": 294,
        "DisName": "清徐县",
        "CityID": 18,
        "DisSort": null
    }, {"Id": 295, "DisName": "阳曲县", "CityID": 18, "DisSort": null}, {
        "Id": 296,
        "DisName": "娄烦县",
        "CityID": 18,
        "DisSort": null
    }, {"Id": 297, "DisName": "古交市", "CityID": 18, "DisSort": null}, {
        "Id": 298,
        "DisName": "矿区",
        "CityID": 19,
        "DisSort": null
    }, {"Id": 299, "DisName": "南郊区", "CityID": 19, "DisSort": null}, {
        "Id": 300,
        "DisName": "新荣区",
        "CityID": 19,
        "DisSort": null
    }, {"Id": 301, "DisName": "阳高县", "CityID": 19, "DisSort": null}, {
        "Id": 302,
        "DisName": "天镇县",
        "CityID": 19,
        "DisSort": null
    }, {"Id": 303, "DisName": "广灵县", "CityID": 19, "DisSort": null}, {
        "Id": 304,
        "DisName": "灵丘县",
        "CityID": 19,
        "DisSort": null
    }, {"Id": 305, "DisName": "浑源县", "CityID": 19, "DisSort": null}, {
        "Id": 306,
        "DisName": "左云县",
        "CityID": 19,
        "DisSort": null
    }, {"Id": 307, "DisName": "大同县", "CityID": 19, "DisSort": null}, {
        "Id": 308,
        "DisName": "矿区",
        "CityID": 20,
        "DisSort": null
    }, {"Id": 309, "DisName": "平定县", "CityID": 20, "DisSort": null}, {
        "Id": 310,
        "DisName": "盂县",
        "CityID": 20,
        "DisSort": null
    }, {"Id": 311, "DisName": "榆次区", "CityID": 21, "DisSort": null}, {
        "Id": 312,
        "DisName": "榆社县",
        "CityID": 21,
        "DisSort": null
    }, {"Id": 313, "DisName": "左权县", "CityID": 21, "DisSort": null}, {
        "Id": 314,
        "DisName": "和顺县",
        "CityID": 21,
        "DisSort": null
    }, {"Id": 315, "DisName": "昔阳县", "CityID": 21, "DisSort": null}, {
        "Id": 316,
        "DisName": "寿阳县",
        "CityID": 21,
        "DisSort": null
    }, {"Id": 317, "DisName": "太谷县", "CityID": 21, "DisSort": null}, {
        "Id": 318,
        "DisName": "祁县",
        "CityID": 21,
        "DisSort": null
    }, {"Id": 319, "DisName": "平遥县", "CityID": 21, "DisSort": null}, {
        "Id": 320,
        "DisName": "灵石县",
        "CityID": 21,
        "DisSort": null
    }, {"Id": 321, "DisName": "介休市", "CityID": 21, "DisSort": null}, {
        "Id": 322,
        "DisName": "长治县",
        "CityID": 22,
        "DisSort": null
    }, {"Id": 323, "DisName": "襄垣县", "CityID": 22, "DisSort": null}, {
        "Id": 324,
        "DisName": "屯留县",
        "CityID": 22,
        "DisSort": null
    }, {"Id": 325, "DisName": "平顺县", "CityID": 22, "DisSort": null}, {
        "Id": 326,
        "DisName": "黎城县",
        "CityID": 22,
        "DisSort": null
    }, {"Id": 327, "DisName": "壶关县", "CityID": 22, "DisSort": null}, {
        "Id": 328,
        "DisName": "长子县",
        "CityID": 22,
        "DisSort": null
    }, {"Id": 329, "DisName": "武乡县", "CityID": 22, "DisSort": null}, {
        "Id": 330,
        "DisName": "沁县",
        "CityID": 22,
        "DisSort": null
    }, {"Id": 331, "DisName": "沁源县", "CityID": 22, "DisSort": null}, {
        "Id": 332,
        "DisName": "潞城市",
        "CityID": 22,
        "DisSort": null
    }, {"Id": 333, "DisName": "沁水县", "CityID": 23, "DisSort": null}, {
        "Id": 334,
        "DisName": "阳城县",
        "CityID": 23,
        "DisSort": null
    }, {"Id": 335, "DisName": "陵川县", "CityID": 23, "DisSort": null}, {
        "Id": 336,
        "DisName": "泽州县",
        "CityID": 23,
        "DisSort": null
    }, {"Id": 337, "DisName": "高平市", "CityID": 23, "DisSort": null}, {
        "Id": 338,
        "DisName": "尧都区",
        "CityID": 24,
        "DisSort": null
    }, {"Id": 339, "DisName": "曲沃县", "CityID": 24, "DisSort": null}, {
        "Id": 340,
        "DisName": "翼城县",
        "CityID": 24,
        "DisSort": null
    }, {"Id": 341, "DisName": "襄汾县", "CityID": 24, "DisSort": null}, {
        "Id": 342,
        "DisName": "洪洞县",
        "CityID": 24,
        "DisSort": null
    }, {"Id": 343, "DisName": "古县", "CityID": 24, "DisSort": null}, {
        "Id": 344,
        "DisName": "安泽县",
        "CityID": 24,
        "DisSort": null
    }, {"Id": 345, "DisName": "浮山县", "CityID": 24, "DisSort": null}, {
        "Id": 346,
        "DisName": "吉县",
        "CityID": 24,
        "DisSort": null
    }, {"Id": 347, "DisName": "乡宁县", "CityID": 24, "DisSort": null}, {
        "Id": 348,
        "DisName": "大宁县",
        "CityID": 24,
        "DisSort": null
    }, {"Id": 349, "DisName": "隰县", "CityID": 24, "DisSort": null}, {
        "Id": 350,
        "DisName": "永和县",
        "CityID": 24,
        "DisSort": null
    }, {"Id": 351, "DisName": "蒲县", "CityID": 24, "DisSort": null}, {
        "Id": 352,
        "DisName": "汾西县",
        "CityID": 24,
        "DisSort": null
    }, {"Id": 353, "DisName": "侯马市", "CityID": 24, "DisSort": null}, {
        "Id": 354,
        "DisName": "霍州市",
        "CityID": 24,
        "DisSort": null
    }, {"Id": 355, "DisName": "离石区", "CityID": 25, "DisSort": null}, {
        "Id": 356,
        "DisName": "文水县",
        "CityID": 25,
        "DisSort": null
    }, {"Id": 357, "DisName": "交城县", "CityID": 25, "DisSort": null}, {
        "Id": 358,
        "DisName": "兴县",
        "CityID": 25,
        "DisSort": null
    }, {"Id": 359, "DisName": "临县", "CityID": 25, "DisSort": null}, {
        "Id": 360,
        "DisName": "柳林县",
        "CityID": 25,
        "DisSort": null
    }, {"Id": 361, "DisName": "石楼县", "CityID": 25, "DisSort": null}, {
        "Id": 362,
        "DisName": "岚县",
        "CityID": 25,
        "DisSort": null
    }, {"Id": 363, "DisName": "方山县", "CityID": 25, "DisSort": null}, {
        "Id": 364,
        "DisName": "中阳县",
        "CityID": 25,
        "DisSort": null
    }, {"Id": 365, "DisName": "交口县", "CityID": 25, "DisSort": null}, {
        "Id": 366,
        "DisName": "孝义市",
        "CityID": 25,
        "DisSort": null
    }, {"Id": 367, "DisName": "汾阳市", "CityID": 25, "DisSort": null}, {
        "Id": 368,
        "DisName": "盐湖区",
        "CityID": 26,
        "DisSort": null
    }, {"Id": 369, "DisName": "临猗县", "CityID": 26, "DisSort": null}, {
        "Id": 370,
        "DisName": "万荣县",
        "CityID": 26,
        "DisSort": null
    }, {"Id": 371, "DisName": "闻喜县", "CityID": 26, "DisSort": null}, {
        "Id": 372,
        "DisName": "稷山县",
        "CityID": 26,
        "DisSort": null
    }, {"Id": 373, "DisName": "新绛县", "CityID": 26, "DisSort": null}, {
        "Id": 374,
        "DisName": "绛县",
        "CityID": 26,
        "DisSort": null
    }, {"Id": 375, "DisName": "垣曲县", "CityID": 26, "DisSort": null}, {
        "Id": 376,
        "DisName": "夏县",
        "CityID": 26,
        "DisSort": null
    }, {"Id": 377, "DisName": "平陆县", "CityID": 26, "DisSort": null}, {
        "Id": 378,
        "DisName": "芮城县",
        "CityID": 26,
        "DisSort": null
    }, {"Id": 379, "DisName": "永济市", "CityID": 26, "DisSort": null}, {
        "Id": 380,
        "DisName": "河津市",
        "CityID": 26,
        "DisSort": null
    }, {"Id": 381, "DisName": "和平区", "CityID": 27, "DisSort": null}, {
        "Id": 382,
        "DisName": "沈河区",
        "CityID": 27,
        "DisSort": null
    }, {"Id": 383, "DisName": "大东区", "CityID": 27, "DisSort": null}, {
        "Id": 384,
        "DisName": "皇姑区",
        "CityID": 27,
        "DisSort": null
    }, {"Id": 385, "DisName": "铁西区", "CityID": 27, "DisSort": null}, {
        "Id": 386,
        "DisName": "苏家屯区",
        "CityID": 27,
        "DisSort": null
    }, {"Id": 387, "DisName": "东陵区", "CityID": 27, "DisSort": null}, {
        "Id": 388,
        "DisName": "沈北新区",
        "CityID": 27,
        "DisSort": null
    }, {"Id": 389, "DisName": "于洪区", "CityID": 27, "DisSort": null}, {
        "Id": 390,
        "DisName": "辽中县",
        "CityID": 27,
        "DisSort": null
    }, {"Id": 391, "DisName": "康平县", "CityID": 27, "DisSort": null}, {
        "Id": 392,
        "DisName": "法库县",
        "CityID": 27,
        "DisSort": null
    }, {"Id": 393, "DisName": "新民市", "CityID": 27, "DisSort": null}, {
        "Id": 394,
        "DisName": "银州区",
        "CityID": 28,
        "DisSort": null
    }, {"Id": 395, "DisName": "清河区", "CityID": 28, "DisSort": null}, {
        "Id": 396,
        "DisName": "铁岭县",
        "CityID": 28,
        "DisSort": null
    }, {"Id": 397, "DisName": "西丰县", "CityID": 28, "DisSort": null}, {
        "Id": 398,
        "DisName": "昌图县",
        "CityID": 28,
        "DisSort": null
    }, {"Id": 399, "DisName": "调兵山市", "CityID": 28, "DisSort": null}, {
        "Id": 400,
        "DisName": "开原市",
        "CityID": 28,
        "DisSort": null
    }, {"Id": 401, "DisName": "长海县", "CityID": 29, "DisSort": null}, {
        "Id": 402,
        "DisName": "旅顺口区",
        "CityID": 29,
        "DisSort": null
    }, {"Id": 403, "DisName": "中山区", "CityID": 29, "DisSort": null}, {
        "Id": 404,
        "DisName": "西岗区",
        "CityID": 29,
        "DisSort": null
    }, {"Id": 405, "DisName": "沙河口区", "CityID": 29, "DisSort": null}, {
        "Id": 406,
        "DisName": "甘井子区",
        "CityID": 29,
        "DisSort": null
    }, {"Id": 407, "DisName": "金州区", "CityID": 29, "DisSort": null}, {
        "Id": 408,
        "DisName": "普兰店市",
        "CityID": 29,
        "DisSort": null
    }, {"Id": 409, "DisName": "瓦房店市", "CityID": 29, "DisSort": null}, {
        "Id": 410,
        "DisName": "庄河市",
        "CityID": 29,
        "DisSort": null
    }, {"Id": 411, "DisName": "铁东区", "CityID": 30, "DisSort": null}, {
        "Id": 412,
        "DisName": "铁西区",
        "CityID": 30,
        "DisSort": null
    }, {"Id": 413, "DisName": "立山区", "CityID": 30, "DisSort": null}, {
        "Id": 414,
        "DisName": "千山区",
        "CityID": 30,
        "DisSort": null
    }, {"Id": 415, "DisName": "台安县", "CityID": 30, "DisSort": null}, {
        "Id": 416,
        "DisName": "岫岩满族自治县",
        "CityID": 30,
        "DisSort": null
    }, {"Id": 417, "DisName": "海城市", "CityID": 30, "DisSort": null}, {
        "Id": 418,
        "DisName": "新抚区",
        "CityID": 31,
        "DisSort": null
    }, {"Id": 419, "DisName": "东洲区", "CityID": 31, "DisSort": null}, {
        "Id": 420,
        "DisName": "望花区",
        "CityID": 31,
        "DisSort": null
    }, {"Id": 421, "DisName": "顺城区", "CityID": 31, "DisSort": null}, {
        "Id": 422,
        "DisName": "抚顺县",
        "CityID": 31,
        "DisSort": null
    }, {"Id": 423, "DisName": "新宾满族自治县", "CityID": 31, "DisSort": null}, {
        "Id": 424,
        "DisName": "清原满族自治县",
        "CityID": 31,
        "DisSort": null
    }, {"Id": 425, "DisName": "平山区", "CityID": 32, "DisSort": null}, {
        "Id": 426,
        "DisName": "溪湖区",
        "CityID": 32,
        "DisSort": null
    }, {"Id": 427, "DisName": "明山区", "CityID": 32, "DisSort": null}, {
        "Id": 428,
        "DisName": "南芬区",
        "CityID": 32,
        "DisSort": null
    }, {"Id": 429, "DisName": "本溪满族自治县", "CityID": 32, "DisSort": null}, {
        "Id": 430,
        "DisName": "桓仁满族自治县",
        "CityID": 32,
        "DisSort": null
    }, {"Id": 431, "DisName": "元宝区", "CityID": 33, "DisSort": null}, {
        "Id": 432,
        "DisName": "振兴区",
        "CityID": 33,
        "DisSort": null
    }, {"Id": 433, "DisName": "振安区", "CityID": 33, "DisSort": null}, {
        "Id": 434,
        "DisName": "宽甸满族自治县",
        "CityID": 33,
        "DisSort": null
    }, {"Id": 435, "DisName": "东港市", "CityID": 33, "DisSort": null}, {
        "Id": 436,
        "DisName": "凤城市",
        "CityID": 33,
        "DisSort": null
    }, {"Id": 437, "DisName": "古塔区", "CityID": 34, "DisSort": null}, {
        "Id": 438,
        "DisName": "凌河区",
        "CityID": 34,
        "DisSort": null
    }, {"Id": 439, "DisName": "太和区", "CityID": 34, "DisSort": null}, {
        "Id": 440,
        "DisName": "黑山县",
        "CityID": 34,
        "DisSort": null
    }, {"Id": 441, "DisName": "义县", "CityID": 34, "DisSort": null}, {
        "Id": 442,
        "DisName": "凌海市",
        "CityID": 34,
        "DisSort": null
    }, {"Id": 443, "DisName": "北镇市", "CityID": 34, "DisSort": null}, {
        "Id": 444,
        "DisName": "站前区",
        "CityID": 35,
        "DisSort": null
    }, {"Id": 445, "DisName": "西市区", "CityID": 35, "DisSort": null}, {
        "Id": 446,
        "DisName": "鮁鱼圈区",
        "CityID": 35,
        "DisSort": null
    }, {"Id": 447, "DisName": "老边区", "CityID": 35, "DisSort": null}, {
        "Id": 448,
        "DisName": "盖州市",
        "CityID": 35,
        "DisSort": null
    }, {"Id": 449, "DisName": "大石桥市", "CityID": 35, "DisSort": null}, {
        "Id": 450,
        "DisName": "海州区",
        "CityID": 36,
        "DisSort": null
    }, {"Id": 451, "DisName": "新邱区", "CityID": 36, "DisSort": null}, {
        "Id": 452,
        "DisName": "太平区",
        "CityID": 36,
        "DisSort": null
    }, {"Id": 453, "DisName": "清河门区", "CityID": 36, "DisSort": null}, {
        "Id": 454,
        "DisName": "细河区",
        "CityID": 36,
        "DisSort": null
    }, {"Id": 455, "DisName": "阜新蒙古族自治县", "CityID": 36, "DisSort": null}, {
        "Id": 456,
        "DisName": "彰武县",
        "CityID": 36,
        "DisSort": null
    }, {"Id": 457, "DisName": "白塔区", "CityID": 37, "DisSort": null}, {
        "Id": 458,
        "DisName": "文圣区",
        "CityID": 37,
        "DisSort": null
    }, {"Id": 459, "DisName": "宏伟区", "CityID": 37, "DisSort": null}, {
        "Id": 460,
        "DisName": "弓长岭区",
        "CityID": 37,
        "DisSort": null
    }, {"Id": 461, "DisName": "太子河区", "CityID": 37, "DisSort": null}, {
        "Id": 462,
        "DisName": "辽阳县",
        "CityID": 37,
        "DisSort": null
    }, {"Id": 463, "DisName": "灯塔市", "CityID": 37, "DisSort": null}, {
        "Id": 464,
        "DisName": "双塔区",
        "CityID": 38,
        "DisSort": null
    }, {"Id": 465, "DisName": "龙城区", "CityID": 38, "DisSort": null}, {
        "Id": 466,
        "DisName": "朝阳县",
        "CityID": 38,
        "DisSort": null
    }, {"Id": 467, "DisName": "建平县", "CityID": 38, "DisSort": null}, {
        "Id": 468,
        "DisName": "喀喇沁左翼蒙古族自治县",
        "CityID": 38,
        "DisSort": null
    }, {"Id": 469, "DisName": "北票市", "CityID": 38, "DisSort": null}, {
        "Id": 470,
        "DisName": "凌源市",
        "CityID": 38,
        "DisSort": null
    }, {"Id": 471, "DisName": "双台子区", "CityID": 39, "DisSort": null}, {
        "Id": 472,
        "DisName": "兴隆台区",
        "CityID": 39,
        "DisSort": null
    }, {"Id": 473, "DisName": "大洼县", "CityID": 39, "DisSort": null}, {
        "Id": 474,
        "DisName": "盘山县",
        "CityID": 39,
        "DisSort": null
    }, {"Id": 475, "DisName": "连山区", "CityID": 40, "DisSort": null}, {
        "Id": 476,
        "DisName": "龙港区",
        "CityID": 40,
        "DisSort": null
    }, {"Id": 477, "DisName": "南票区", "CityID": 40, "DisSort": null}, {
        "Id": 478,
        "DisName": "绥中县",
        "CityID": 40,
        "DisSort": null
    }, {"Id": 479, "DisName": "建昌县", "CityID": 40, "DisSort": null}, {
        "Id": 480,
        "DisName": "兴城市",
        "CityID": 40,
        "DisSort": null
    }, {"Id": 481, "DisName": "南关区", "CityID": 41, "DisSort": null}, {
        "Id": 482,
        "DisName": "宽城区",
        "CityID": 41,
        "DisSort": null
    }, {"Id": 483, "DisName": "朝阳区", "CityID": 41, "DisSort": null}, {
        "Id": 484,
        "DisName": "二道区",
        "CityID": 41,
        "DisSort": null
    }, {"Id": 485, "DisName": "绿园区", "CityID": 41, "DisSort": null}, {
        "Id": 486,
        "DisName": "双阳区",
        "CityID": 41,
        "DisSort": null
    }, {"Id": 487, "DisName": "农安县", "CityID": 41, "DisSort": null}, {
        "Id": 488,
        "DisName": "九台市",
        "CityID": 41,
        "DisSort": null
    }, {"Id": 489, "DisName": "榆树市", "CityID": 41, "DisSort": null}, {
        "Id": 490,
        "DisName": "德惠市",
        "CityID": 41,
        "DisSort": null
    }, {"Id": 491, "DisName": "昌邑区", "CityID": 42, "DisSort": null}, {
        "Id": 492,
        "DisName": "龙潭区",
        "CityID": 42,
        "DisSort": null
    }, {"Id": 493, "DisName": "船营区", "CityID": 42, "DisSort": null}, {
        "Id": 494,
        "DisName": "丰满区",
        "CityID": 42,
        "DisSort": null
    }, {"Id": 495, "DisName": "永吉县", "CityID": 42, "DisSort": null}, {
        "Id": 496,
        "DisName": "蛟河市",
        "CityID": 42,
        "DisSort": null
    }, {"Id": 497, "DisName": "桦甸市", "CityID": 42, "DisSort": null}, {
        "Id": 498,
        "DisName": "舒兰市",
        "CityID": 42,
        "DisSort": null
    }, {"Id": 499, "DisName": "磐石市", "CityID": 42, "DisSort": null}, {
        "Id": 500,
        "DisName": "延吉市",
        "CityID": 43,
        "DisSort": null
    }, {"Id": 501, "DisName": "图们市", "CityID": 43, "DisSort": null}, {
        "Id": 502,
        "DisName": "敦化市",
        "CityID": 43,
        "DisSort": null
    }, {"Id": 503, "DisName": "珲春市", "CityID": 43, "DisSort": null}, {
        "Id": 504,
        "DisName": "龙井市",
        "CityID": 43,
        "DisSort": null
    }, {"Id": 505, "DisName": "和龙市", "CityID": 43, "DisSort": null}, {
        "Id": 506,
        "DisName": "汪清县",
        "CityID": 43,
        "DisSort": null
    }, {"Id": 507, "DisName": "安图县", "CityID": 43, "DisSort": null}, {
        "Id": 508,
        "DisName": "铁西区",
        "CityID": 44,
        "DisSort": null
    }, {"Id": 509, "DisName": "铁东区", "CityID": 44, "DisSort": null}, {
        "Id": 510,
        "DisName": "梨树县",
        "CityID": 44,
        "DisSort": null
    }, {"Id": 511, "DisName": "伊通满族自治县", "CityID": 44, "DisSort": null}, {
        "Id": 512,
        "DisName": "公主岭市",
        "CityID": 44,
        "DisSort": null
    }, {"Id": 513, "DisName": "双辽市", "CityID": 44, "DisSort": null}, {
        "Id": 514,
        "DisName": "东昌区",
        "CityID": 45,
        "DisSort": null
    }, {"Id": 515, "DisName": "二道江区", "CityID": 45, "DisSort": null}, {
        "Id": 516,
        "DisName": "通化县",
        "CityID": 45,
        "DisSort": null
    }, {"Id": 517, "DisName": "辉南县", "CityID": 45, "DisSort": null}, {
        "Id": 518,
        "DisName": "柳河县",
        "CityID": 45,
        "DisSort": null
    }, {"Id": 519, "DisName": "梅河口市", "CityID": 45, "DisSort": null}, {
        "Id": 520,
        "DisName": "集安市",
        "CityID": 45,
        "DisSort": null
    }, {"Id": 521, "DisName": "洮北区", "CityID": 46, "DisSort": null}, {
        "Id": 522,
        "DisName": "镇赉县",
        "CityID": 46,
        "DisSort": null
    }, {"Id": 523, "DisName": "通榆县", "CityID": 46, "DisSort": null}, {
        "Id": 524,
        "DisName": "洮南市",
        "CityID": 46,
        "DisSort": null
    }, {"Id": 525, "DisName": "大安市", "CityID": 46, "DisSort": null}, {
        "Id": 526,
        "DisName": "龙山区",
        "CityID": 47,
        "DisSort": null
    }, {"Id": 527, "DisName": "西安区", "CityID": 47, "DisSort": null}, {
        "Id": 528,
        "DisName": "东丰县",
        "CityID": 47,
        "DisSort": null
    }, {"Id": 529, "DisName": "东辽县", "CityID": 47, "DisSort": null}, {
        "Id": 530,
        "DisName": "宁江区",
        "CityID": 48,
        "DisSort": null
    }, {"Id": 531, "DisName": "前郭尔罗斯蒙古族自治县", "CityID": 48, "DisSort": null}, {
        "Id": 532,
        "DisName": "长岭县",
        "CityID": 48,
        "DisSort": null
    }, {"Id": 533, "DisName": "乾安县", "CityID": 48, "DisSort": null}, {
        "Id": 534,
        "DisName": "扶余县",
        "CityID": 48,
        "DisSort": null
    }, {"Id": 535, "DisName": "八道江区", "CityID": 49, "DisSort": null}, {
        "Id": 536,
        "DisName": "江源区",
        "CityID": 49,
        "DisSort": null
    }, {"Id": 537, "DisName": "抚松县", "CityID": 49, "DisSort": null}, {
        "Id": 538,
        "DisName": "靖宇县",
        "CityID": 49,
        "DisSort": null
    }, {"Id": 539, "DisName": "长白朝鲜族自治县", "CityID": 49, "DisSort": null}, {
        "Id": 540,
        "DisName": "临江市",
        "CityID": 49,
        "DisSort": null
    }, {"Id": 541, "DisName": "道里区", "CityID": 50, "DisSort": null}, {
        "Id": 542,
        "DisName": "南岗区",
        "CityID": 50,
        "DisSort": null
    }, {"Id": 543, "DisName": "道外区", "CityID": 50, "DisSort": null}, {
        "Id": 544,
        "DisName": "平房区",
        "CityID": 50,
        "DisSort": null
    }, {"Id": 545, "DisName": "松北区", "CityID": 50, "DisSort": null}, {
        "Id": 546,
        "DisName": "香坊区",
        "CityID": 50,
        "DisSort": null
    }, {"Id": 547, "DisName": "呼兰区", "CityID": 50, "DisSort": null}, {
        "Id": 548,
        "DisName": "阿城区",
        "CityID": 50,
        "DisSort": null
    }, {"Id": 549, "DisName": "依兰县", "CityID": 50, "DisSort": null}, {
        "Id": 550,
        "DisName": "方正县",
        "CityID": 50,
        "DisSort": null
    }, {"Id": 551, "DisName": "宾县", "CityID": 50, "DisSort": null}, {
        "Id": 552,
        "DisName": "巴彦县",
        "CityID": 50,
        "DisSort": null
    }, {"Id": 553, "DisName": "木兰县", "CityID": 50, "DisSort": null}, {
        "Id": 554,
        "DisName": "通河县",
        "CityID": 50,
        "DisSort": null
    }, {"Id": 555, "DisName": "延寿县", "CityID": 50, "DisSort": null}, {
        "Id": 556,
        "DisName": "双城市",
        "CityID": 50,
        "DisSort": null
    }, {"Id": 557, "DisName": "尚志市", "CityID": 50, "DisSort": null}, {
        "Id": 558,
        "DisName": "五常市",
        "CityID": 50,
        "DisSort": null
    }, {"Id": 559, "DisName": "龙沙区", "CityID": 51, "DisSort": null}, {
        "Id": 560,
        "DisName": "建华区",
        "CityID": 51,
        "DisSort": null
    }, {"Id": 561, "DisName": "铁锋区", "CityID": 51, "DisSort": null}, {
        "Id": 562,
        "DisName": "昂昂溪区",
        "CityID": 51,
        "DisSort": null
    }, {"Id": 563, "DisName": "富拉尔基区", "CityID": 51, "DisSort": null}, {
        "Id": 564,
        "DisName": "碾子山区",
        "CityID": 51,
        "DisSort": null
    }, {"Id": 565, "DisName": "梅里斯达翰尔族区", "CityID": 51, "DisSort": null}, {
        "Id": 566,
        "DisName": "龙江县",
        "CityID": 51,
        "DisSort": null
    }, {"Id": 567, "DisName": "依安县", "CityID": 51, "DisSort": null}, {
        "Id": 568,
        "DisName": "泰来县",
        "CityID": 51,
        "DisSort": null
    }, {"Id": 569, "DisName": "甘南县", "CityID": 51, "DisSort": null}, {
        "Id": 570,
        "DisName": "富裕县",
        "CityID": 51,
        "DisSort": null
    }, {"Id": 571, "DisName": "克山县", "CityID": 51, "DisSort": null}, {
        "Id": 572,
        "DisName": "克东县",
        "CityID": 51,
        "DisSort": null
    }, {"Id": 573, "DisName": "拜泉县", "CityID": 51, "DisSort": null}, {
        "Id": 574,
        "DisName": "讷河市",
        "CityID": 51,
        "DisSort": null
    }, {"Id": 575, "DisName": "鸡冠区", "CityID": 52, "DisSort": null}, {
        "Id": 576,
        "DisName": "恒山区",
        "CityID": 52,
        "DisSort": null
    }, {"Id": 577, "DisName": "滴道区", "CityID": 52, "DisSort": null}, {
        "Id": 578,
        "DisName": "梨树区",
        "CityID": 52,
        "DisSort": null
    }, {"Id": 579, "DisName": "城子河区", "CityID": 52, "DisSort": null}, {
        "Id": 580,
        "DisName": "麻山区",
        "CityID": 52,
        "DisSort": null
    }, {"Id": 581, "DisName": "鸡东县", "CityID": 52, "DisSort": null}, {
        "Id": 582,
        "DisName": "虎林市",
        "CityID": 52,
        "DisSort": null
    }, {"Id": 583, "DisName": "密山市", "CityID": 52, "DisSort": null}, {
        "Id": 584,
        "DisName": "东安区",
        "CityID": 53,
        "DisSort": null
    }, {"Id": 585, "DisName": "阳明区", "CityID": 53, "DisSort": null}, {
        "Id": 586,
        "DisName": "爱民区",
        "CityID": 53,
        "DisSort": null
    }, {"Id": 587, "DisName": "西安区", "CityID": 53, "DisSort": null}, {
        "Id": 588,
        "DisName": "东宁县",
        "CityID": 53,
        "DisSort": null
    }, {"Id": 589, "DisName": "林口县", "CityID": 53, "DisSort": null}, {
        "Id": 590,
        "DisName": "绥芬河市",
        "CityID": 53,
        "DisSort": null
    }, {"Id": 591, "DisName": "海林市", "CityID": 53, "DisSort": null}, {
        "Id": 592,
        "DisName": "宁安市",
        "CityID": 53,
        "DisSort": null
    }, {"Id": 593, "DisName": "穆棱市", "CityID": 53, "DisSort": null}, {
        "Id": 594,
        "DisName": "新兴区",
        "CityID": 54,
        "DisSort": null
    }, {"Id": 595, "DisName": "桃山区", "CityID": 54, "DisSort": null}, {
        "Id": 596,
        "DisName": "茄子河区",
        "CityID": 54,
        "DisSort": null
    }, {"Id": 597, "DisName": "勃利县", "CityID": 54, "DisSort": null}, {
        "Id": 598,
        "DisName": "向阳区",
        "CityID": 55,
        "DisSort": null
    }, {"Id": 599, "DisName": "前进区", "CityID": 55, "DisSort": null}, {
        "Id": 600,
        "DisName": "东风区",
        "CityID": 55,
        "DisSort": null
    }, {"Id": 601, "DisName": "桦南县", "CityID": 55, "DisSort": null}, {
        "Id": 602,
        "DisName": "桦川县",
        "CityID": 55,
        "DisSort": null
    }, {"Id": 603, "DisName": "汤原县", "CityID": 55, "DisSort": null}, {
        "Id": 604,
        "DisName": "抚远县",
        "CityID": 55,
        "DisSort": null
    }, {"Id": 605, "DisName": "同江市", "CityID": 55, "DisSort": null}, {
        "Id": 606,
        "DisName": "富锦市",
        "CityID": 55,
        "DisSort": null
    }, {"Id": 607, "DisName": "向阳区", "CityID": 56, "DisSort": null}, {
        "Id": 608,
        "DisName": "工农区",
        "CityID": 56,
        "DisSort": null
    }, {"Id": 609, "DisName": "南山区", "CityID": 56, "DisSort": null}, {
        "Id": 610,
        "DisName": "兴安区",
        "CityID": 56,
        "DisSort": null
    }, {"Id": 611, "DisName": "东山区", "CityID": 56, "DisSort": null}, {
        "Id": 612,
        "DisName": "兴山区",
        "CityID": 56,
        "DisSort": null
    }, {"Id": 613, "DisName": "萝北县", "CityID": 56, "DisSort": null}, {
        "Id": 614,
        "DisName": "绥滨县",
        "CityID": 56,
        "DisSort": null
    }, {"Id": 615, "DisName": "尖山区", "CityID": 57, "DisSort": null}, {
        "Id": 616,
        "DisName": "岭东区",
        "CityID": 57,
        "DisSort": null
    }, {"Id": 617, "DisName": "四方台区", "CityID": 57, "DisSort": null}, {
        "Id": 618,
        "DisName": "宝山区",
        "CityID": 57,
        "DisSort": null
    }, {"Id": 619, "DisName": "集贤县", "CityID": 57, "DisSort": null}, {
        "Id": 620,
        "DisName": "友谊县",
        "CityID": 57,
        "DisSort": null
    }, {"Id": 621, "DisName": "宝清县", "CityID": 57, "DisSort": null}, {
        "Id": 622,
        "DisName": "饶河县",
        "CityID": 57,
        "DisSort": null
    }, {"Id": 623, "DisName": "北林区", "CityID": 58, "DisSort": null}, {
        "Id": 624,
        "DisName": "望奎县",
        "CityID": 58,
        "DisSort": null
    }, {"Id": 625, "DisName": "兰西县", "CityID": 58, "DisSort": null}, {
        "Id": 626,
        "DisName": "青冈县",
        "CityID": 58,
        "DisSort": null
    }, {"Id": 627, "DisName": "庆安县", "CityID": 58, "DisSort": null}, {
        "Id": 628,
        "DisName": "明水县",
        "CityID": 58,
        "DisSort": null
    }, {"Id": 629, "DisName": "绥棱县", "CityID": 58, "DisSort": null}, {
        "Id": 630,
        "DisName": "安达市",
        "CityID": 58,
        "DisSort": null
    }, {"Id": 631, "DisName": "肇东市", "CityID": 58, "DisSort": null}, {
        "Id": 632,
        "DisName": "海伦市",
        "CityID": 58,
        "DisSort": null
    }, {"Id": 633, "DisName": "爱辉区", "CityID": 59, "DisSort": null}, {
        "Id": 634,
        "DisName": "嫩江县",
        "CityID": 59,
        "DisSort": null
    }, {"Id": 635, "DisName": "逊克县", "CityID": 59, "DisSort": null}, {
        "Id": 636,
        "DisName": "孙吴县",
        "CityID": 59,
        "DisSort": null
    }, {"Id": 637, "DisName": "北安市", "CityID": 59, "DisSort": null}, {
        "Id": 638,
        "DisName": "五大连池市",
        "CityID": 59,
        "DisSort": null
    }, {"Id": 639, "DisName": "呼玛县", "CityID": 60, "DisSort": null}, {
        "Id": 640,
        "DisName": "塔河县",
        "CityID": 60,
        "DisSort": null
    }, {"Id": 641, "DisName": "漠河县", "CityID": 60, "DisSort": null}, {
        "Id": 642,
        "DisName": "伊春区",
        "CityID": 61,
        "DisSort": null
    }, {"Id": 643, "DisName": "南岔区", "CityID": 61, "DisSort": null}, {
        "Id": 644,
        "DisName": "友好区",
        "CityID": 61,
        "DisSort": null
    }, {"Id": 645, "DisName": "西林区", "CityID": 61, "DisSort": null}, {
        "Id": 646,
        "DisName": "翠峦区",
        "CityID": 61,
        "DisSort": null
    }, {"Id": 647, "DisName": "新青区", "CityID": 61, "DisSort": null}, {
        "Id": 648,
        "DisName": "美溪区",
        "CityID": 61,
        "DisSort": null
    }, {"Id": 649, "DisName": "金山屯区", "CityID": 61, "DisSort": null}, {
        "Id": 650,
        "DisName": "五营区",
        "CityID": 61,
        "DisSort": null
    }, {"Id": 651, "DisName": "乌马河区", "CityID": 61, "DisSort": null}, {
        "Id": 652,
        "DisName": "汤旺河区",
        "CityID": 61,
        "DisSort": null
    }, {"Id": 653, "DisName": "带岭区", "CityID": 61, "DisSort": null}, {
        "Id": 654,
        "DisName": "乌伊岭区",
        "CityID": 61,
        "DisSort": null
    }, {"Id": 655, "DisName": "红星区", "CityID": 61, "DisSort": null}, {
        "Id": 656,
        "DisName": "上甘岭区",
        "CityID": 61,
        "DisSort": null
    }, {"Id": 657, "DisName": "嘉荫县", "CityID": 61, "DisSort": null}, {
        "Id": 658,
        "DisName": "铁力市",
        "CityID": 61,
        "DisSort": null
    }, {"Id": 659, "DisName": "萨尔图区", "CityID": 62, "DisSort": null}, {
        "Id": 660,
        "DisName": "龙凤区",
        "CityID": 62,
        "DisSort": null
    }, {"Id": 661, "DisName": "让胡路区", "CityID": 62, "DisSort": null}, {
        "Id": 662,
        "DisName": "红岗区",
        "CityID": 62,
        "DisSort": null
    }, {"Id": 663, "DisName": "大同区", "CityID": 62, "DisSort": null}, {
        "Id": 664,
        "DisName": "肇州县",
        "CityID": 62,
        "DisSort": null
    }, {"Id": 665, "DisName": "肇源县", "CityID": 62, "DisSort": null}, {
        "Id": 666,
        "DisName": "林甸县",
        "CityID": 62,
        "DisSort": null
    }, {"Id": 667, "DisName": "杜尔伯特蒙古族自治县", "CityID": 62, "DisSort": null}, {
        "Id": 668,
        "DisName": "江宁区",
        "CityID": 63,
        "DisSort": null
    }, {"Id": 669, "DisName": "浦口区", "CityID": 63, "DisSort": null}, {
        "Id": 670,
        "DisName": "玄武区",
        "CityID": 63,
        "DisSort": null
    }, {"Id": 671, "DisName": "白下区", "CityID": 63, "DisSort": null}, {
        "Id": 672,
        "DisName": "秦淮区",
        "CityID": 63,
        "DisSort": null
    }, {"Id": 673, "DisName": "建邺区", "CityID": 63, "DisSort": null}, {
        "Id": 674,
        "DisName": "鼓楼区",
        "CityID": 63,
        "DisSort": null
    }, {"Id": 675, "DisName": "下关区", "CityID": 63, "DisSort": null}, {
        "Id": 676,
        "DisName": "栖霞区",
        "CityID": 63,
        "DisSort": null
    }, {"Id": 677, "DisName": "雨花台区", "CityID": 63, "DisSort": null}, {
        "Id": 678,
        "DisName": "六合区",
        "CityID": 63,
        "DisSort": null
    }, {"Id": 679, "DisName": "溧水县", "CityID": 63, "DisSort": null}, {
        "Id": 680,
        "DisName": "高淳县",
        "CityID": 63,
        "DisSort": null
    }, {"Id": 681, "DisName": "崇安区", "CityID": 64, "DisSort": null}, {
        "Id": 682,
        "DisName": "南长区",
        "CityID": 64,
        "DisSort": null
    }, {"Id": 683, "DisName": "北塘区", "CityID": 64, "DisSort": null}, {
        "Id": 684,
        "DisName": "锡山区",
        "CityID": 64,
        "DisSort": null
    }, {"Id": 685, "DisName": "惠山区", "CityID": 64, "DisSort": null}, {
        "Id": 686,
        "DisName": "滨湖区",
        "CityID": 64,
        "DisSort": null
    }, {"Id": 687, "DisName": "江阴市", "CityID": 64, "DisSort": null}, {
        "Id": 688,
        "DisName": "宜兴市",
        "CityID": 64,
        "DisSort": null
    }, {"Id": 689, "DisName": "京口区", "CityID": 65, "DisSort": null}, {
        "Id": 690,
        "DisName": "润州区",
        "CityID": 65,
        "DisSort": null
    }, {"Id": 691, "DisName": "丹徒区", "CityID": 65, "DisSort": null}, {
        "Id": 692,
        "DisName": "丹阳市",
        "CityID": 65,
        "DisSort": null
    }, {"Id": 693, "DisName": "扬中市", "CityID": 65, "DisSort": null}, {
        "Id": 694,
        "DisName": "句容市",
        "CityID": 65,
        "DisSort": null
    }, {"Id": 695, "DisName": "沧浪区", "CityID": 66, "DisSort": null}, {
        "Id": 696,
        "DisName": "常熟市",
        "CityID": 66,
        "DisSort": null
    }, {"Id": 697, "DisName": "平江区", "CityID": 66, "DisSort": null}, {
        "Id": 698,
        "DisName": "金阊区",
        "CityID": 66,
        "DisSort": null
    }, {"Id": 699, "DisName": "虎丘区", "CityID": 66, "DisSort": null}, {
        "Id": 700,
        "DisName": "昆山市",
        "CityID": 66,
        "DisSort": null
    }, {"Id": 701, "DisName": "太仓市", "CityID": 66, "DisSort": null}, {
        "Id": 702,
        "DisName": "吴江市",
        "CityID": 66,
        "DisSort": null
    }, {"Id": 703, "DisName": "吴中区", "CityID": 66, "DisSort": null}, {
        "Id": 704,
        "DisName": "相城区",
        "CityID": 66,
        "DisSort": null
    }, {"Id": 705, "DisName": "张家港市", "CityID": 66, "DisSort": null}, {
        "Id": 706,
        "DisName": "崇川区",
        "CityID": 67,
        "DisSort": null
    }, {"Id": 707, "DisName": "港闸区", "CityID": 67, "DisSort": null}, {
        "Id": 708,
        "DisName": "海安县",
        "CityID": 67,
        "DisSort": null
    }, {"Id": 709, "DisName": "如东县", "CityID": 67, "DisSort": null}, {
        "Id": 710,
        "DisName": "启东市",
        "CityID": 67,
        "DisSort": null
    }, {"Id": 711, "DisName": "如皋市", "CityID": 67, "DisSort": null}, {
        "Id": 712,
        "DisName": "通州市",
        "CityID": 67,
        "DisSort": null
    }, {"Id": 713, "DisName": "海门市", "CityID": 67, "DisSort": null}, {
        "Id": 714,
        "DisName": "高邮市",
        "CityID": 68,
        "DisSort": null
    }, {"Id": 715, "DisName": "广陵区", "CityID": 68, "DisSort": null}, {
        "Id": 716,
        "DisName": "邗江区",
        "CityID": 68,
        "DisSort": null
    }, {"Id": 717, "DisName": "维扬区", "CityID": 68, "DisSort": null}, {
        "Id": 718,
        "DisName": "宝应县",
        "CityID": 68,
        "DisSort": null
    }, {"Id": 719, "DisName": "江都市", "CityID": 68, "DisSort": null}, {
        "Id": 720,
        "DisName": "仪征市",
        "CityID": 68,
        "DisSort": null
    }, {"Id": 721, "DisName": "亭湖区", "CityID": 69, "DisSort": null}, {
        "Id": 722,
        "DisName": "盐都区",
        "CityID": 69,
        "DisSort": null
    }, {"Id": 723, "DisName": "响水县", "CityID": 69, "DisSort": null}, {
        "Id": 724,
        "DisName": "滨海县",
        "CityID": 69,
        "DisSort": null
    }, {"Id": 725, "DisName": "阜宁县", "CityID": 69, "DisSort": null}, {
        "Id": 726,
        "DisName": "射阳县",
        "CityID": 69,
        "DisSort": null
    }, {"Id": 727, "DisName": "建湖县", "CityID": 69, "DisSort": null}, {
        "Id": 728,
        "DisName": "东台市",
        "CityID": 69,
        "DisSort": null
    }, {"Id": 729, "DisName": "大丰市", "CityID": 69, "DisSort": null}, {
        "Id": 730,
        "DisName": "鼓楼区",
        "CityID": 70,
        "DisSort": null
    }, {"Id": 731, "DisName": "云龙区", "CityID": 70, "DisSort": null}, {
        "Id": 732,
        "DisName": "九里区",
        "CityID": 70,
        "DisSort": null
    }, {"Id": 733, "DisName": "贾汪区", "CityID": 70, "DisSort": null}, {
        "Id": 734,
        "DisName": "泉山区",
        "CityID": 70,
        "DisSort": null
    }, {"Id": 735, "DisName": "丰县", "CityID": 70, "DisSort": null}, {
        "Id": 736,
        "DisName": "沛县",
        "CityID": 70,
        "DisSort": null
    }, {"Id": 737, "DisName": "铜山县", "CityID": 70, "DisSort": null}, {
        "Id": 738,
        "DisName": "睢宁县",
        "CityID": 70,
        "DisSort": null
    }, {"Id": 739, "DisName": "新沂市", "CityID": 70, "DisSort": null}, {
        "Id": 740,
        "DisName": "邳州市",
        "CityID": 70,
        "DisSort": null
    }, {"Id": 741, "DisName": "清河区", "CityID": 71, "DisSort": null}, {
        "Id": 742,
        "DisName": "楚州区",
        "CityID": 71,
        "DisSort": null
    }, {"Id": 743, "DisName": "淮阴区", "CityID": 71, "DisSort": null}, {
        "Id": 744,
        "DisName": "清浦区",
        "CityID": 71,
        "DisSort": null
    }, {"Id": 745, "DisName": "涟水县", "CityID": 71, "DisSort": null}, {
        "Id": 746,
        "DisName": "洪泽县",
        "CityID": 71,
        "DisSort": null
    }, {"Id": 747, "DisName": "盱眙县", "CityID": 71, "DisSort": null}, {
        "Id": 748,
        "DisName": "金湖县",
        "CityID": 71,
        "DisSort": null
    }, {"Id": 749, "DisName": "连云区", "CityID": 72, "DisSort": null}, {
        "Id": 750,
        "DisName": "新浦区",
        "CityID": 72,
        "DisSort": null
    }, {"Id": 751, "DisName": "海州区", "CityID": 72, "DisSort": null}, {
        "Id": 752,
        "DisName": "赣榆县",
        "CityID": 72,
        "DisSort": null
    }, {"Id": 753, "DisName": "东海县", "CityID": 72, "DisSort": null}, {
        "Id": 754,
        "DisName": "灌云县",
        "CityID": 72,
        "DisSort": null
    }, {"Id": 755, "DisName": "灌南县", "CityID": 72, "DisSort": null}, {
        "Id": 756,
        "DisName": "天宁区",
        "CityID": 73,
        "DisSort": null
    }, {"Id": 757, "DisName": "钟楼区", "CityID": 73, "DisSort": null}, {
        "Id": 758,
        "DisName": "戚墅堰区",
        "CityID": 73,
        "DisSort": null
    }, {"Id": 759, "DisName": "新北区", "CityID": 73, "DisSort": null}, {
        "Id": 760,
        "DisName": "武进区",
        "CityID": 73,
        "DisSort": null
    }, {"Id": 761, "DisName": "溧阳市", "CityID": 73, "DisSort": null}, {
        "Id": 762,
        "DisName": "金坛市",
        "CityID": 73,
        "DisSort": null
    }, {"Id": 763, "DisName": "海陵区", "CityID": 74, "DisSort": null}, {
        "Id": 764,
        "DisName": "高港区",
        "CityID": 74,
        "DisSort": null
    }, {"Id": 765, "DisName": "兴化市", "CityID": 74, "DisSort": null}, {
        "Id": 766,
        "DisName": "靖江市",
        "CityID": 74,
        "DisSort": null
    }, {"Id": 767, "DisName": "泰兴市", "CityID": 74, "DisSort": null}, {
        "Id": 768,
        "DisName": "姜堰市",
        "CityID": 74,
        "DisSort": null
    }, {"Id": 769, "DisName": "宿城区", "CityID": 75, "DisSort": null}, {
        "Id": 770,
        "DisName": "宿豫区",
        "CityID": 75,
        "DisSort": null
    }, {"Id": 771, "DisName": "沭阳县", "CityID": 75, "DisSort": null}, {
        "Id": 772,
        "DisName": "泗阳县",
        "CityID": 75,
        "DisSort": null
    }, {"Id": 773, "DisName": "泗洪县", "CityID": 75, "DisSort": null}, {
        "Id": 774,
        "DisName": "定海区",
        "CityID": 76,
        "DisSort": null
    }, {"Id": 775, "DisName": "普陀区", "CityID": 76, "DisSort": null}, {
        "Id": 776,
        "DisName": "岱山县",
        "CityID": 76,
        "DisSort": null
    }, {"Id": 777, "DisName": "嵊泗县", "CityID": 76, "DisSort": null}, {
        "Id": 778,
        "DisName": "柯城区",
        "CityID": 77,
        "DisSort": null
    }, {"Id": 779, "DisName": "衢江区", "CityID": 77, "DisSort": null}, {
        "Id": 780,
        "DisName": "常山县",
        "CityID": 77,
        "DisSort": null
    }, {"Id": 781, "DisName": "开化县", "CityID": 77, "DisSort": null}, {
        "Id": 782,
        "DisName": "龙游县",
        "CityID": 77,
        "DisSort": null
    }, {"Id": 783, "DisName": "江山市", "CityID": 77, "DisSort": null}, {
        "Id": 784,
        "DisName": "上城区",
        "CityID": 78,
        "DisSort": null
    }, {"Id": 785, "DisName": "下城区", "CityID": 78, "DisSort": null}, {
        "Id": 786,
        "DisName": "江干区",
        "CityID": 78,
        "DisSort": null
    }, {"Id": 787, "DisName": "拱墅区", "CityID": 78, "DisSort": null}, {
        "Id": 788,
        "DisName": "西湖区",
        "CityID": 78,
        "DisSort": null
    }, {"Id": 789, "DisName": "滨江区", "CityID": 78, "DisSort": null}, {
        "Id": 790,
        "DisName": "余杭区",
        "CityID": 78,
        "DisSort": null
    }, {"Id": 791, "DisName": "桐庐县", "CityID": 78, "DisSort": null}, {
        "Id": 792,
        "DisName": "淳安县",
        "CityID": 78,
        "DisSort": null
    }, {"Id": 793, "DisName": "建德市", "CityID": 78, "DisSort": null}, {
        "Id": 794,
        "DisName": "富阳市",
        "CityID": 78,
        "DisSort": null
    }, {"Id": 795, "DisName": "临安市", "CityID": 78, "DisSort": null}, {
        "Id": 796,
        "DisName": "萧山区",
        "CityID": 78,
        "DisSort": null
    }, {"Id": 797, "DisName": "吴兴区", "CityID": 79, "DisSort": null}, {
        "Id": 798,
        "DisName": "南浔区",
        "CityID": 79,
        "DisSort": null
    }, {"Id": 799, "DisName": "德清县", "CityID": 79, "DisSort": null}, {
        "Id": 800,
        "DisName": "长兴县",
        "CityID": 79,
        "DisSort": null
    }, {"Id": 801, "DisName": "安吉县", "CityID": 79, "DisSort": null}, {
        "Id": 802,
        "DisName": " 南湖区",
        "CityID": 80,
        "DisSort": null
    }, {"Id": 803, "DisName": " 秀洲区", "CityID": 80, "DisSort": null}, {
        "Id": 804,
        "DisName": " 嘉善县",
        "CityID": 80,
        "DisSort": null
    }, {"Id": 805, "DisName": " 海盐县", "CityID": 80, "DisSort": null}, {
        "Id": 806,
        "DisName": " 海宁市",
        "CityID": 80,
        "DisSort": null
    }, {"Id": 807, "DisName": " 平湖市", "CityID": 80, "DisSort": null}, {
        "Id": 808,
        "DisName": " 桐乡市 ",
        "CityID": 80,
        "DisSort": null
    }, {"Id": 809, "DisName": "海曙区", "CityID": 81, "DisSort": null}, {
        "Id": 810,
        "DisName": "江东区",
        "CityID": 81,
        "DisSort": null
    }, {"Id": 811, "DisName": "江北区", "CityID": 81, "DisSort": null}, {
        "Id": 812,
        "DisName": "北仑区",
        "CityID": 81,
        "DisSort": null
    }, {"Id": 813, "DisName": "镇海区", "CityID": 81, "DisSort": null}, {
        "Id": 814,
        "DisName": "鄞州区",
        "CityID": 81,
        "DisSort": null
    }, {"Id": 815, "DisName": "象山县", "CityID": 81, "DisSort": null}, {
        "Id": 816,
        "DisName": "宁海县",
        "CityID": 81,
        "DisSort": null
    }, {"Id": 817, "DisName": "余姚市", "CityID": 81, "DisSort": null}, {
        "Id": 818,
        "DisName": "慈溪市",
        "CityID": 81,
        "DisSort": null
    }, {"Id": 819, "DisName": "奉化市", "CityID": 81, "DisSort": null}, {
        "Id": 820,
        "DisName": "越城区",
        "CityID": 82,
        "DisSort": null
    }, {"Id": 821, "DisName": "绍兴县", "CityID": 82, "DisSort": null}, {
        "Id": 822,
        "DisName": "新昌县",
        "CityID": 82,
        "DisSort": null
    }, {"Id": 823, "DisName": "诸暨市", "CityID": 82, "DisSort": null}, {
        "Id": 824,
        "DisName": "上虞市",
        "CityID": 82,
        "DisSort": null
    }, {"Id": 825, "DisName": "嵊州市", "CityID": 82, "DisSort": null}, {
        "Id": 826,
        "DisName": "鹿城区",
        "CityID": 83,
        "DisSort": null
    }, {"Id": 827, "DisName": "龙湾区", "CityID": 83, "DisSort": null}, {
        "Id": 828,
        "DisName": "瓯海区",
        "CityID": 83,
        "DisSort": null
    }, {"Id": 829, "DisName": "洞头县", "CityID": 83, "DisSort": null}, {
        "Id": 830,
        "DisName": "永嘉县",
        "CityID": 83,
        "DisSort": null
    }, {"Id": 831, "DisName": "平阳县", "CityID": 83, "DisSort": null}, {
        "Id": 832,
        "DisName": "苍南县",
        "CityID": 83,
        "DisSort": null
    }, {"Id": 833, "DisName": "文成县", "CityID": 83, "DisSort": null}, {
        "Id": 834,
        "DisName": "泰顺县",
        "CityID": 83,
        "DisSort": null
    }, {"Id": 835, "DisName": "瑞安市", "CityID": 83, "DisSort": null}, {
        "Id": 836,
        "DisName": "乐清市",
        "CityID": 83,
        "DisSort": null
    }, {"Id": 837, "DisName": "莲都区", "CityID": 84, "DisSort": null}, {
        "Id": 838,
        "DisName": "青田县",
        "CityID": 84,
        "DisSort": null
    }, {"Id": 839, "DisName": "缙云县", "CityID": 84, "DisSort": null}, {
        "Id": 840,
        "DisName": "遂昌县",
        "CityID": 84,
        "DisSort": null
    }, {"Id": 841, "DisName": "松阳县", "CityID": 84, "DisSort": null}, {
        "Id": 842,
        "DisName": "云和县",
        "CityID": 84,
        "DisSort": null
    }, {"Id": 843, "DisName": "庆元县", "CityID": 84, "DisSort": null}, {
        "Id": 844,
        "DisName": "景宁畲族自治县",
        "CityID": 84,
        "DisSort": null
    }, {"Id": 845, "DisName": "龙泉市", "CityID": 84, "DisSort": null}, {
        "Id": 846,
        "DisName": "婺城区",
        "CityID": 85,
        "DisSort": null
    }, {"Id": 847, "DisName": "金东区", "CityID": 85, "DisSort": null}, {
        "Id": 848,
        "DisName": "武义县",
        "CityID": 85,
        "DisSort": null
    }, {"Id": 849, "DisName": "浦江县", "CityID": 85, "DisSort": null}, {
        "Id": 850,
        "DisName": "磐安县",
        "CityID": 85,
        "DisSort": null
    }, {"Id": 851, "DisName": "兰溪市", "CityID": 85, "DisSort": null}, {
        "Id": 852,
        "DisName": "义乌市",
        "CityID": 85,
        "DisSort": null
    }, {"Id": 853, "DisName": "东阳市", "CityID": 85, "DisSort": null}, {
        "Id": 854,
        "DisName": "永康市",
        "CityID": 85,
        "DisSort": null
    }, {"Id": 855, "DisName": "椒江区", "CityID": 86, "DisSort": null}, {
        "Id": 856,
        "DisName": "黄岩区",
        "CityID": 86,
        "DisSort": null
    }, {"Id": 857, "DisName": "路桥区", "CityID": 86, "DisSort": null}, {
        "Id": 858,
        "DisName": "玉环县",
        "CityID": 86,
        "DisSort": null
    }, {"Id": 859, "DisName": "三门县", "CityID": 86, "DisSort": null}, {
        "Id": 860,
        "DisName": "天台县",
        "CityID": 86,
        "DisSort": null
    }, {"Id": 861, "DisName": "仙居县", "CityID": 86, "DisSort": null}, {
        "Id": 862,
        "DisName": "温岭市",
        "CityID": 86,
        "DisSort": null
    }, {"Id": 863, "DisName": "临海市", "CityID": 86, "DisSort": null}, {
        "Id": 864,
        "DisName": "瑶海区",
        "CityID": 87,
        "DisSort": null
    }, {"Id": 865, "DisName": "庐阳区", "CityID": 87, "DisSort": null}, {
        "Id": 866,
        "DisName": "蜀山区",
        "CityID": 87,
        "DisSort": null
    }, {"Id": 867, "DisName": "包河区", "CityID": 87, "DisSort": null}, {
        "Id": 868,
        "DisName": "长丰县",
        "CityID": 87,
        "DisSort": null
    }, {"Id": 869, "DisName": "肥东县", "CityID": 87, "DisSort": null}, {
        "Id": 870,
        "DisName": "肥西县",
        "CityID": 87,
        "DisSort": null
    }, {"Id": 871, "DisName": "镜湖区", "CityID": 88, "DisSort": null}, {
        "Id": 872,
        "DisName": "弋江区",
        "CityID": 88,
        "DisSort": null
    }, {"Id": 873, "DisName": "鸠江区", "CityID": 88, "DisSort": null}, {
        "Id": 874,
        "DisName": "三山区",
        "CityID": 88,
        "DisSort": null
    }, {"Id": 875, "DisName": "芜湖县", "CityID": 88, "DisSort": null}, {
        "Id": 876,
        "DisName": "繁昌县",
        "CityID": 88,
        "DisSort": null
    }, {"Id": 877, "DisName": "南陵县", "CityID": 88, "DisSort": null}, {
        "Id": 878,
        "DisName": "龙子湖区",
        "CityID": 89,
        "DisSort": null
    }, {"Id": 879, "DisName": "蚌山区", "CityID": 89, "DisSort": null}, {
        "Id": 880,
        "DisName": "禹会区",
        "CityID": 89,
        "DisSort": null
    }, {"Id": 881, "DisName": "淮上区", "CityID": 89, "DisSort": null}, {
        "Id": 882,
        "DisName": "怀远县",
        "CityID": 89,
        "DisSort": null
    }, {"Id": 883, "DisName": "五河县", "CityID": 89, "DisSort": null}, {
        "Id": 884,
        "DisName": "固镇县",
        "CityID": 89,
        "DisSort": null
    }, {"Id": 885, "DisName": "大通区", "CityID": 90, "DisSort": null}, {
        "Id": 886,
        "DisName": "田家庵区",
        "CityID": 90,
        "DisSort": null
    }, {"Id": 887, "DisName": "谢家集区", "CityID": 90, "DisSort": null}, {
        "Id": 888,
        "DisName": "八公山区",
        "CityID": 90,
        "DisSort": null
    }, {"Id": 889, "DisName": "潘集区", "CityID": 90, "DisSort": null}, {
        "Id": 890,
        "DisName": "凤台县",
        "CityID": 90,
        "DisSort": null
    }, {"Id": 891, "DisName": "金家庄区", "CityID": 91, "DisSort": null}, {
        "Id": 892,
        "DisName": "花山区",
        "CityID": 91,
        "DisSort": null
    }, {"Id": 893, "DisName": "雨山区", "CityID": 91, "DisSort": null}, {
        "Id": 894,
        "DisName": "当涂县",
        "CityID": 91,
        "DisSort": null
    }, {"Id": 895, "DisName": "杜集区", "CityID": 92, "DisSort": null}, {
        "Id": 896,
        "DisName": "相山区",
        "CityID": 92,
        "DisSort": null
    }, {"Id": 897, "DisName": "烈山区", "CityID": 92, "DisSort": null}, {
        "Id": 898,
        "DisName": "濉溪县 ",
        "CityID": 92,
        "DisSort": null
    }, {"Id": 899, "DisName": "铜官山区", "CityID": 93, "DisSort": null}, {
        "Id": 900,
        "DisName": "狮子山区",
        "CityID": 93,
        "DisSort": null
    }, {"Id": 901, "DisName": "铜陵县", "CityID": 93, "DisSort": null}, {
        "Id": 902,
        "DisName": "迎江区",
        "CityID": 94,
        "DisSort": null
    }, {"Id": 903, "DisName": "大观区", "CityID": 94, "DisSort": null}, {
        "Id": 904,
        "DisName": "宜秀区",
        "CityID": 94,
        "DisSort": null
    }, {"Id": 905, "DisName": "怀宁县", "CityID": 94, "DisSort": null}, {
        "Id": 906,
        "DisName": "枞阳县",
        "CityID": 94,
        "DisSort": null
    }, {"Id": 907, "DisName": "潜山县", "CityID": 94, "DisSort": null}, {
        "Id": 908,
        "DisName": "太湖县",
        "CityID": 94,
        "DisSort": null
    }, {"Id": 909, "DisName": "宿松县", "CityID": 94, "DisSort": null}, {
        "Id": 910,
        "DisName": "望江县",
        "CityID": 94,
        "DisSort": null
    }, {"Id": 911, "DisName": "岳西县", "CityID": 94, "DisSort": null}, {
        "Id": 912,
        "DisName": "桐城市",
        "CityID": 94,
        "DisSort": null
    }, {"Id": 913, "DisName": "屯溪区", "CityID": 95, "DisSort": null}, {
        "Id": 914,
        "DisName": "黄山区",
        "CityID": 95,
        "DisSort": null
    }, {"Id": 915, "DisName": "徽州区", "CityID": 95, "DisSort": null}, {
        "Id": 916,
        "DisName": "歙县",
        "CityID": 95,
        "DisSort": null
    }, {"Id": 917, "DisName": "休宁县", "CityID": 95, "DisSort": null}, {
        "Id": 918,
        "DisName": "黟县",
        "CityID": 95,
        "DisSort": null
    }, {"Id": 919, "DisName": "祁门县", "CityID": 95, "DisSort": null}, {
        "Id": 920,
        "DisName": "琅琊区",
        "CityID": 96,
        "DisSort": null
    }, {"Id": 921, "DisName": "南谯区", "CityID": 96, "DisSort": null}, {
        "Id": 922,
        "DisName": "来安县",
        "CityID": 96,
        "DisSort": null
    }, {"Id": 923, "DisName": "全椒县", "CityID": 96, "DisSort": null}, {
        "Id": 924,
        "DisName": "定远县",
        "CityID": 96,
        "DisSort": null
    }, {"Id": 925, "DisName": "凤阳县", "CityID": 96, "DisSort": null}, {
        "Id": 926,
        "DisName": "天长市",
        "CityID": 96,
        "DisSort": null
    }, {"Id": 927, "DisName": "明光市", "CityID": 96, "DisSort": null}, {
        "Id": 928,
        "DisName": "颍州区",
        "CityID": 97,
        "DisSort": null
    }, {"Id": 929, "DisName": "颍东区", "CityID": 97, "DisSort": null}, {
        "Id": 930,
        "DisName": "颍泉区",
        "CityID": 97,
        "DisSort": null
    }, {"Id": 931, "DisName": "临泉县", "CityID": 97, "DisSort": null}, {
        "Id": 932,
        "DisName": "太和县",
        "CityID": 97,
        "DisSort": null
    }, {"Id": 933, "DisName": "阜南县", "CityID": 97, "DisSort": null}, {
        "Id": 934,
        "DisName": "颍上县",
        "CityID": 97,
        "DisSort": null
    }, {"Id": 935, "DisName": "界首市", "CityID": 97, "DisSort": null}, {
        "Id": 936,
        "DisName": "埇桥区",
        "CityID": 98,
        "DisSort": null
    }, {"Id": 937, "DisName": "砀山县", "CityID": 98, "DisSort": null}, {
        "Id": 938,
        "DisName": "萧县",
        "CityID": 98,
        "DisSort": null
    }, {"Id": 939, "DisName": "灵璧县", "CityID": 98, "DisSort": null}, {
        "Id": 940,
        "DisName": "泗县 ",
        "CityID": 98,
        "DisSort": null
    }, {"Id": 941, "DisName": "居巢区", "CityID": 99, "DisSort": null}, {
        "Id": 942,
        "DisName": "庐江县",
        "CityID": 99,
        "DisSort": null
    }, {"Id": 943, "DisName": "无为县", "CityID": 99, "DisSort": null}, {
        "Id": 944,
        "DisName": "含山县",
        "CityID": 99,
        "DisSort": null
    }, {"Id": 945, "DisName": "和县 ", "CityID": 99, "DisSort": null}, {
        "Id": 946,
        "DisName": "金安区",
        "CityID": 100,
        "DisSort": null
    }, {"Id": 947, "DisName": "裕安区", "CityID": 100, "DisSort": null}, {
        "Id": 948,
        "DisName": "寿县",
        "CityID": 100,
        "DisSort": null
    }, {"Id": 949, "DisName": "霍邱县", "CityID": 100, "DisSort": null}, {
        "Id": 950,
        "DisName": "舒城县",
        "CityID": 100,
        "DisSort": null
    }, {"Id": 951, "DisName": "金寨县", "CityID": 100, "DisSort": null}, {
        "Id": 952,
        "DisName": "霍山县",
        "CityID": 100,
        "DisSort": null
    }, {"Id": 953, "DisName": "谯城区", "CityID": 101, "DisSort": null}, {
        "Id": 954,
        "DisName": "涡阳县",
        "CityID": 101,
        "DisSort": null
    }, {"Id": 955, "DisName": "蒙城县", "CityID": 101, "DisSort": null}, {
        "Id": 956,
        "DisName": "利辛县",
        "CityID": 101,
        "DisSort": null
    }, {"Id": 957, "DisName": "贵池区", "CityID": 102, "DisSort": null}, {
        "Id": 958,
        "DisName": "东至县",
        "CityID": 102,
        "DisSort": null
    }, {"Id": 959, "DisName": "石台县", "CityID": 102, "DisSort": null}, {
        "Id": 960,
        "DisName": "青阳县",
        "CityID": 102,
        "DisSort": null
    }, {"Id": 961, "DisName": "宣州区", "CityID": 103, "DisSort": null}, {
        "Id": 962,
        "DisName": "郎溪县",
        "CityID": 103,
        "DisSort": null
    }, {"Id": 963, "DisName": "广德县", "CityID": 103, "DisSort": null}, {
        "Id": 964,
        "DisName": "泾县",
        "CityID": 103,
        "DisSort": null
    }, {"Id": 965, "DisName": "绩溪县", "CityID": 103, "DisSort": null}, {
        "Id": 966,
        "DisName": "旌德县",
        "CityID": 103,
        "DisSort": null
    }, {"Id": 967, "DisName": "宁国市", "CityID": 103, "DisSort": null}, {
        "Id": 968,
        "DisName": "鼓楼区",
        "CityID": 104,
        "DisSort": null
    }, {"Id": 969, "DisName": "台江区", "CityID": 104, "DisSort": null}, {
        "Id": 970,
        "DisName": "仓山区",
        "CityID": 104,
        "DisSort": null
    }, {"Id": 971, "DisName": "马尾区", "CityID": 104, "DisSort": null}, {
        "Id": 972,
        "DisName": "晋安区",
        "CityID": 104,
        "DisSort": null
    }, {"Id": 973, "DisName": "闽侯县", "CityID": 104, "DisSort": null}, {
        "Id": 974,
        "DisName": "连江县",
        "CityID": 104,
        "DisSort": null
    }, {"Id": 975, "DisName": "罗源县", "CityID": 104, "DisSort": null}, {
        "Id": 976,
        "DisName": "闽清县",
        "CityID": 104,
        "DisSort": null
    }, {"Id": 977, "DisName": "永泰县", "CityID": 104, "DisSort": null}, {
        "Id": 978,
        "DisName": "平潭县",
        "CityID": 104,
        "DisSort": null
    }, {"Id": 979, "DisName": "福清市", "CityID": 104, "DisSort": null}, {
        "Id": 980,
        "DisName": "长乐市",
        "CityID": 104,
        "DisSort": null
    }, {"Id": 981, "DisName": "思明区", "CityID": 105, "DisSort": null}, {
        "Id": 982,
        "DisName": "海沧区",
        "CityID": 105,
        "DisSort": null
    }, {"Id": 983, "DisName": "湖里区", "CityID": 105, "DisSort": null}, {
        "Id": 984,
        "DisName": "集美区",
        "CityID": 105,
        "DisSort": null
    }, {"Id": 985, "DisName": "同安区", "CityID": 105, "DisSort": null}, {
        "Id": 986,
        "DisName": "翔安区",
        "CityID": 105,
        "DisSort": null
    }, {"Id": 987, "DisName": "蕉城区", "CityID": 106, "DisSort": null}, {
        "Id": 988,
        "DisName": "霞浦县",
        "CityID": 106,
        "DisSort": null
    }, {"Id": 989, "DisName": "古田县", "CityID": 106, "DisSort": null}, {
        "Id": 990,
        "DisName": "屏南县",
        "CityID": 106,
        "DisSort": null
    }, {"Id": 991, "DisName": "寿宁县", "CityID": 106, "DisSort": null}, {
        "Id": 992,
        "DisName": "周宁县",
        "CityID": 106,
        "DisSort": null
    }, {"Id": 993, "DisName": "柘荣县", "CityID": 106, "DisSort": null}, {
        "Id": 994,
        "DisName": "福安市",
        "CityID": 106,
        "DisSort": null
    }, {"Id": 995, "DisName": "福鼎市", "CityID": 106, "DisSort": null}, {
        "Id": 996,
        "DisName": "城厢区",
        "CityID": 107,
        "DisSort": null
    }, {"Id": 997, "DisName": "涵江区", "CityID": 107, "DisSort": null}, {
        "Id": 998,
        "DisName": "荔城区",
        "CityID": 107,
        "DisSort": null
    }, {"Id": 999, "DisName": "秀屿区", "CityID": 107, "DisSort": null}, {
        "Id": 1000,
        "DisName": "仙游县",
        "CityID": 107,
        "DisSort": null
    }, {"Id": 1001, "DisName": "鲤城区", "CityID": 108, "DisSort": null}, {
        "Id": 1002,
        "DisName": "丰泽区",
        "CityID": 108,
        "DisSort": null
    }, {"Id": 1003, "DisName": "洛江区", "CityID": 108, "DisSort": null}, {
        "Id": 1004,
        "DisName": "泉港区",
        "CityID": 108,
        "DisSort": null
    }, {"Id": 1005, "DisName": "惠安县", "CityID": 108, "DisSort": null}, {
        "Id": 1006,
        "DisName": "安溪县",
        "CityID": 108,
        "DisSort": null
    }, {"Id": 1007, "DisName": "永春县", "CityID": 108, "DisSort": null}, {
        "Id": 1008,
        "DisName": "德化县",
        "CityID": 108,
        "DisSort": null
    }, {"Id": 1009, "DisName": "石狮市", "CityID": 108, "DisSort": null}, {
        "Id": 1010,
        "DisName": "晋江市",
        "CityID": 108,
        "DisSort": null
    }, {"Id": 1011, "DisName": "南安市", "CityID": 108, "DisSort": null}, {
        "Id": 1012,
        "DisName": "芗城区",
        "CityID": 109,
        "DisSort": null
    }, {"Id": 1013, "DisName": "龙文区", "CityID": 109, "DisSort": null}, {
        "Id": 1014,
        "DisName": "云霄县",
        "CityID": 109,
        "DisSort": null
    }, {"Id": 1015, "DisName": "漳浦县", "CityID": 109, "DisSort": null}, {
        "Id": 1016,
        "DisName": "诏安县",
        "CityID": 109,
        "DisSort": null
    }, {"Id": 1017, "DisName": "长泰县", "CityID": 109, "DisSort": null}, {
        "Id": 1018,
        "DisName": "东山县",
        "CityID": 109,
        "DisSort": null
    }, {"Id": 1019, "DisName": "南靖县", "CityID": 109, "DisSort": null}, {
        "Id": 1020,
        "DisName": "平和县",
        "CityID": 109,
        "DisSort": null
    }, {"Id": 1021, "DisName": "华安县", "CityID": 109, "DisSort": null}, {
        "Id": 1022,
        "DisName": "龙海市",
        "CityID": 109,
        "DisSort": null
    }, {"Id": 1023, "DisName": "新罗区", "CityID": 110, "DisSort": null}, {
        "Id": 1024,
        "DisName": "长汀县",
        "CityID": 110,
        "DisSort": null
    }, {"Id": 1025, "DisName": "永定县", "CityID": 110, "DisSort": null}, {
        "Id": 1026,
        "DisName": "上杭县",
        "CityID": 110,
        "DisSort": null
    }, {"Id": 1027, "DisName": "武平县", "CityID": 110, "DisSort": null}, {
        "Id": 1028,
        "DisName": "连城县",
        "CityID": 110,
        "DisSort": null
    }, {"Id": 1029, "DisName": "漳平市", "CityID": 110, "DisSort": null}, {
        "Id": 1030,
        "DisName": "梅列区",
        "CityID": 111,
        "DisSort": null
    }, {"Id": 1031, "DisName": "三元区", "CityID": 111, "DisSort": null}, {
        "Id": 1032,
        "DisName": "明溪县",
        "CityID": 111,
        "DisSort": null
    }, {"Id": 1033, "DisName": "清流县", "CityID": 111, "DisSort": null}, {
        "Id": 1034,
        "DisName": "宁化县",
        "CityID": 111,
        "DisSort": null
    }, {"Id": 1035, "DisName": "大田县", "CityID": 111, "DisSort": null}, {
        "Id": 1036,
        "DisName": "尤溪县",
        "CityID": 111,
        "DisSort": null
    }, {"Id": 1037, "DisName": "沙县", "CityID": 111, "DisSort": null}, {
        "Id": 1038,
        "DisName": "将乐县",
        "CityID": 111,
        "DisSort": null
    }, {"Id": 1039, "DisName": "泰宁县", "CityID": 111, "DisSort": null}, {
        "Id": 1040,
        "DisName": "建宁县",
        "CityID": 111,
        "DisSort": null
    }, {"Id": 1041, "DisName": "永安市", "CityID": 111, "DisSort": null}, {
        "Id": 1042,
        "DisName": "延平区",
        "CityID": 112,
        "DisSort": null
    }, {"Id": 1043, "DisName": "顺昌县", "CityID": 112, "DisSort": null}, {
        "Id": 1044,
        "DisName": "浦城县",
        "CityID": 112,
        "DisSort": null
    }, {"Id": 1045, "DisName": "光泽县", "CityID": 112, "DisSort": null}, {
        "Id": 1046,
        "DisName": "松溪县",
        "CityID": 112,
        "DisSort": null
    }, {"Id": 1047, "DisName": "政和县", "CityID": 112, "DisSort": null}, {
        "Id": 1048,
        "DisName": "邵武市",
        "CityID": 112,
        "DisSort": null
    }, {"Id": 1049, "DisName": "武夷山市", "CityID": 112, "DisSort": null}, {
        "Id": 1050,
        "DisName": "建瓯市",
        "CityID": 112,
        "DisSort": null
    }, {"Id": 1051, "DisName": "建阳市", "CityID": 112, "DisSort": null}, {
        "Id": 1052,
        "DisName": "月湖区",
        "CityID": 113,
        "DisSort": null
    }, {"Id": 1053, "DisName": "余江县", "CityID": 113, "DisSort": null}, {
        "Id": 1054,
        "DisName": "贵溪市",
        "CityID": 113,
        "DisSort": null
    }, {"Id": 1055, "DisName": "渝水区", "CityID": 114, "DisSort": null}, {
        "Id": 1056,
        "DisName": "分宜县",
        "CityID": 114,
        "DisSort": null
    }, {"Id": 1057, "DisName": "东湖区", "CityID": 115, "DisSort": null}, {
        "Id": 1058,
        "DisName": "西湖区",
        "CityID": 115,
        "DisSort": null
    }, {"Id": 1059, "DisName": "青云谱区", "CityID": 115, "DisSort": null}, {
        "Id": 1060,
        "DisName": "湾里区",
        "CityID": 115,
        "DisSort": null
    }, {"Id": 1061, "DisName": "青山湖区", "CityID": 115, "DisSort": null}, {
        "Id": 1062,
        "DisName": "南昌县",
        "CityID": 115,
        "DisSort": null
    }, {"Id": 1063, "DisName": "新建县", "CityID": 115, "DisSort": null}, {
        "Id": 1064,
        "DisName": "安义县",
        "CityID": 115,
        "DisSort": null
    }, {"Id": 1065, "DisName": "进贤县", "CityID": 115, "DisSort": null}, {
        "Id": 1066,
        "DisName": "庐山区",
        "CityID": 116,
        "DisSort": null
    }, {"Id": 1067, "DisName": "浔阳区", "CityID": 116, "DisSort": null}, {
        "Id": 1068,
        "DisName": "九江县",
        "CityID": 116,
        "DisSort": null
    }, {"Id": 1069, "DisName": "武宁县", "CityID": 116, "DisSort": null}, {
        "Id": 1070,
        "DisName": "修水县",
        "CityID": 116,
        "DisSort": null
    }, {"Id": 1071, "DisName": "永修县", "CityID": 116, "DisSort": null}, {
        "Id": 1072,
        "DisName": "德安县",
        "CityID": 116,
        "DisSort": null
    }, {"Id": 1073, "DisName": "星子县", "CityID": 116, "DisSort": null}, {
        "Id": 1074,
        "DisName": "都昌县",
        "CityID": 116,
        "DisSort": null
    }, {"Id": 1075, "DisName": "湖口县", "CityID": 116, "DisSort": null}, {
        "Id": 1076,
        "DisName": "彭泽县",
        "CityID": 116,
        "DisSort": null
    }, {"Id": 1077, "DisName": "瑞昌市", "CityID": 116, "DisSort": null}, {
        "Id": 1078,
        "DisName": "信州区",
        "CityID": 117,
        "DisSort": null
    }, {"Id": 1079, "DisName": "上饶县", "CityID": 117, "DisSort": null}, {
        "Id": 1080,
        "DisName": "广丰县",
        "CityID": 117,
        "DisSort": null
    }, {"Id": 1081, "DisName": "玉山县", "CityID": 117, "DisSort": null}, {
        "Id": 1082,
        "DisName": "铅山县",
        "CityID": 117,
        "DisSort": null
    }, {"Id": 1083, "DisName": "横峰县", "CityID": 117, "DisSort": null}, {
        "Id": 1084,
        "DisName": "弋阳县",
        "CityID": 117,
        "DisSort": null
    }, {"Id": 1085, "DisName": "余干县", "CityID": 117, "DisSort": null}, {
        "Id": 1086,
        "DisName": "鄱阳县",
        "CityID": 117,
        "DisSort": null
    }, {"Id": 1087, "DisName": "万年县", "CityID": 117, "DisSort": null}, {
        "Id": 1088,
        "DisName": "婺源县",
        "CityID": 117,
        "DisSort": null
    }, {"Id": 1089, "DisName": "德兴市", "CityID": 117, "DisSort": null}, {
        "Id": 1090,
        "DisName": "临川区",
        "CityID": 118,
        "DisSort": null
    }, {"Id": 1091, "DisName": "南城县", "CityID": 118, "DisSort": null}, {
        "Id": 1092,
        "DisName": "黎川县",
        "CityID": 118,
        "DisSort": null
    }, {"Id": 1093, "DisName": "南丰县", "CityID": 118, "DisSort": null}, {
        "Id": 1094,
        "DisName": "崇仁县",
        "CityID": 118,
        "DisSort": null
    }, {"Id": 1095, "DisName": "乐安县", "CityID": 118, "DisSort": null}, {
        "Id": 1096,
        "DisName": "宜黄县",
        "CityID": 118,
        "DisSort": null
    }, {"Id": 1097, "DisName": "金溪县", "CityID": 118, "DisSort": null}, {
        "Id": 1098,
        "DisName": "资溪县",
        "CityID": 118,
        "DisSort": null
    }, {"Id": 1099, "DisName": "东乡县", "CityID": 118, "DisSort": null}, {
        "Id": 1100,
        "DisName": "广昌县",
        "CityID": 118,
        "DisSort": null
    }, {"Id": 1101, "DisName": "袁州区", "CityID": 119, "DisSort": null}, {
        "Id": 1102,
        "DisName": "奉新县",
        "CityID": 119,
        "DisSort": null
    }, {"Id": 1103, "DisName": "万载县", "CityID": 119, "DisSort": null}, {
        "Id": 1104,
        "DisName": "上高县",
        "CityID": 119,
        "DisSort": null
    }, {"Id": 1105, "DisName": "宜丰县", "CityID": 119, "DisSort": null}, {
        "Id": 1106,
        "DisName": "靖安县",
        "CityID": 119,
        "DisSort": null
    }, {"Id": 1107, "DisName": "铜鼓县", "CityID": 119, "DisSort": null}, {
        "Id": 1108,
        "DisName": "丰城市",
        "CityID": 119,
        "DisSort": null
    }, {"Id": 1109, "DisName": "樟树市", "CityID": 119, "DisSort": null}, {
        "Id": 1110,
        "DisName": "高安市",
        "CityID": 119,
        "DisSort": null
    }, {"Id": 1111, "DisName": "吉州区", "CityID": 120, "DisSort": null}, {
        "Id": 1112,
        "DisName": "青原区",
        "CityID": 120,
        "DisSort": null
    }, {"Id": 1113, "DisName": "吉安县", "CityID": 120, "DisSort": null}, {
        "Id": 1114,
        "DisName": "吉水县",
        "CityID": 120,
        "DisSort": null
    }, {"Id": 1115, "DisName": "峡江县", "CityID": 120, "DisSort": null}, {
        "Id": 1116,
        "DisName": "新干县",
        "CityID": 120,
        "DisSort": null
    }, {"Id": 1117, "DisName": "永丰县", "CityID": 120, "DisSort": null}, {
        "Id": 1118,
        "DisName": "泰和县",
        "CityID": 120,
        "DisSort": null
    }, {"Id": 1119, "DisName": "遂川县", "CityID": 120, "DisSort": null}, {
        "Id": 1120,
        "DisName": "万安县",
        "CityID": 120,
        "DisSort": null
    }, {"Id": 1121, "DisName": "安福县", "CityID": 120, "DisSort": null}, {
        "Id": 1122,
        "DisName": "永新县",
        "CityID": 120,
        "DisSort": null
    }, {"Id": 1123, "DisName": "井冈山市", "CityID": 120, "DisSort": null}, {
        "Id": 1124,
        "DisName": "章贡区",
        "CityID": 121,
        "DisSort": null
    }, {"Id": 1125, "DisName": "赣县", "CityID": 121, "DisSort": null}, {
        "Id": 1126,
        "DisName": "信丰县",
        "CityID": 121,
        "DisSort": null
    }, {"Id": 1127, "DisName": "大余县", "CityID": 121, "DisSort": null}, {
        "Id": 1128,
        "DisName": "上犹县",
        "CityID": 121,
        "DisSort": null
    }, {"Id": 1129, "DisName": "崇义县", "CityID": 121, "DisSort": null}, {
        "Id": 1130,
        "DisName": "安远县",
        "CityID": 121,
        "DisSort": null
    }, {"Id": 1131, "DisName": "龙南县", "CityID": 121, "DisSort": null}, {
        "Id": 1132,
        "DisName": "定南县",
        "CityID": 121,
        "DisSort": null
    }, {"Id": 1133, "DisName": "全南县", "CityID": 121, "DisSort": null}, {
        "Id": 1134,
        "DisName": "宁都县",
        "CityID": 121,
        "DisSort": null
    }, {"Id": 1135, "DisName": "于都县", "CityID": 121, "DisSort": null}, {
        "Id": 1136,
        "DisName": "兴国县",
        "CityID": 121,
        "DisSort": null
    }, {"Id": 1137, "DisName": "会昌县", "CityID": 121, "DisSort": null}, {
        "Id": 1138,
        "DisName": "寻乌县",
        "CityID": 121,
        "DisSort": null
    }, {"Id": 1139, "DisName": "石城县", "CityID": 121, "DisSort": null}, {
        "Id": 1140,
        "DisName": "瑞金市",
        "CityID": 121,
        "DisSort": null
    }, {"Id": 1141, "DisName": "南康市", "CityID": 121, "DisSort": null}, {
        "Id": 1142,
        "DisName": "昌江区",
        "CityID": 122,
        "DisSort": null
    }, {"Id": 1143, "DisName": "珠山区", "CityID": 122, "DisSort": null}, {
        "Id": 1144,
        "DisName": "浮梁县",
        "CityID": 122,
        "DisSort": null
    }, {"Id": 1145, "DisName": "乐平市", "CityID": 122, "DisSort": null}, {
        "Id": 1146,
        "DisName": "安源区",
        "CityID": 123,
        "DisSort": null
    }, {"Id": 1147, "DisName": "湘东区", "CityID": 123, "DisSort": null}, {
        "Id": 1148,
        "DisName": "莲花县",
        "CityID": 123,
        "DisSort": null
    }, {"Id": 1149, "DisName": "上栗县", "CityID": 123, "DisSort": null}, {
        "Id": 1150,
        "DisName": "芦溪县",
        "CityID": 123,
        "DisSort": null
    }, {"Id": 1151, "DisName": "牡丹区", "CityID": 124, "DisSort": null}, {
        "Id": 1152,
        "DisName": "曹县",
        "CityID": 124,
        "DisSort": null
    }, {"Id": 1153, "DisName": "单县", "CityID": 124, "DisSort": null}, {
        "Id": 1154,
        "DisName": "成武县",
        "CityID": 124,
        "DisSort": null
    }, {"Id": 1155, "DisName": "巨野县", "CityID": 124, "DisSort": null}, {
        "Id": 1156,
        "DisName": "郓城县",
        "CityID": 124,
        "DisSort": null
    }, {"Id": 1157, "DisName": "鄄城县", "CityID": 124, "DisSort": null}, {
        "Id": 1158,
        "DisName": "定陶县",
        "CityID": 124,
        "DisSort": null
    }, {"Id": 1159, "DisName": "东明县", "CityID": 124, "DisSort": null}, {
        "Id": 1160,
        "DisName": "历下区",
        "CityID": 125,
        "DisSort": null
    }, {"Id": 1161, "DisName": "市中区", "CityID": 125, "DisSort": null}, {
        "Id": 1162,
        "DisName": "槐荫区",
        "CityID": 125,
        "DisSort": null
    }, {"Id": 1163, "DisName": "天桥区", "CityID": 125, "DisSort": null}, {
        "Id": 1164,
        "DisName": "历城区",
        "CityID": 125,
        "DisSort": null
    }, {"Id": 1165, "DisName": "长清区", "CityID": 125, "DisSort": null}, {
        "Id": 1166,
        "DisName": "平阴县",
        "CityID": 125,
        "DisSort": null
    }, {"Id": 1167, "DisName": "济阳县", "CityID": 125, "DisSort": null}, {
        "Id": 1168,
        "DisName": "商河县",
        "CityID": 125,
        "DisSort": null
    }, {"Id": 1169, "DisName": "章丘市", "CityID": 125, "DisSort": null}, {
        "Id": 1170,
        "DisName": "市南区",
        "CityID": 126,
        "DisSort": null
    }, {"Id": 1171, "DisName": "市北区", "CityID": 126, "DisSort": null}, {
        "Id": 1172,
        "DisName": "四方区",
        "CityID": 126,
        "DisSort": null
    }, {"Id": 1173, "DisName": "黄岛区", "CityID": 126, "DisSort": null}, {
        "Id": 1174,
        "DisName": "崂山区",
        "CityID": 126,
        "DisSort": null
    }, {"Id": 1175, "DisName": "李沧区", "CityID": 126, "DisSort": null}, {
        "Id": 1176,
        "DisName": "城阳区",
        "CityID": 126,
        "DisSort": null
    }, {"Id": 1177, "DisName": "胶州市", "CityID": 126, "DisSort": null}, {
        "Id": 1178,
        "DisName": "即墨市",
        "CityID": 126,
        "DisSort": null
    }, {"Id": 1179, "DisName": "平度市", "CityID": 126, "DisSort": null}, {
        "Id": 1180,
        "DisName": "胶南市",
        "CityID": 126,
        "DisSort": null
    }, {"Id": 1181, "DisName": "莱西市", "CityID": 126, "DisSort": null}, {
        "Id": 1182,
        "DisName": "淄川区",
        "CityID": 127,
        "DisSort": null
    }, {"Id": 1183, "DisName": "张店区", "CityID": 127, "DisSort": null}, {
        "Id": 1184,
        "DisName": "博山区",
        "CityID": 127,
        "DisSort": null
    }, {"Id": 1185, "DisName": "临淄区", "CityID": 127, "DisSort": null}, {
        "Id": 1186,
        "DisName": "周村区",
        "CityID": 127,
        "DisSort": null
    }, {"Id": 1187, "DisName": "桓台县", "CityID": 127, "DisSort": null}, {
        "Id": 1188,
        "DisName": "高青县",
        "CityID": 127,
        "DisSort": null
    }, {"Id": 1189, "DisName": "沂源县", "CityID": 127, "DisSort": null}, {
        "Id": 1190,
        "DisName": "德城区",
        "CityID": 128,
        "DisSort": null
    }, {"Id": 1191, "DisName": "陵县", "CityID": 128, "DisSort": null}, {
        "Id": 1192,
        "DisName": "宁津县",
        "CityID": 128,
        "DisSort": null
    }, {"Id": 1193, "DisName": "庆云县", "CityID": 128, "DisSort": null}, {
        "Id": 1194,
        "DisName": "临邑县",
        "CityID": 128,
        "DisSort": null
    }, {"Id": 1195, "DisName": "齐河县", "CityID": 128, "DisSort": null}, {
        "Id": 1196,
        "DisName": "平原县",
        "CityID": 128,
        "DisSort": null
    }, {"Id": 1197, "DisName": "夏津县", "CityID": 128, "DisSort": null}, {
        "Id": 1198,
        "DisName": "武城县",
        "CityID": 128,
        "DisSort": null
    }, {"Id": 1199, "DisName": "乐陵市", "CityID": 128, "DisSort": null}, {
        "Id": 1200,
        "DisName": "禹城市",
        "CityID": 128,
        "DisSort": null
    }, {"Id": 1201, "DisName": "芝罘区", "CityID": 129, "DisSort": null}, {
        "Id": 1202,
        "DisName": "福山区",
        "CityID": 129,
        "DisSort": null
    }, {"Id": 1203, "DisName": "牟平区", "CityID": 129, "DisSort": null}, {
        "Id": 1204,
        "DisName": "莱山区",
        "CityID": 129,
        "DisSort": null
    }, {"Id": 1205, "DisName": "长岛县", "CityID": 129, "DisSort": null}, {
        "Id": 1206,
        "DisName": "龙口市",
        "CityID": 129,
        "DisSort": null
    }, {"Id": 1207, "DisName": "莱阳市", "CityID": 129, "DisSort": null}, {
        "Id": 1208,
        "DisName": "莱州市",
        "CityID": 129,
        "DisSort": null
    }, {"Id": 1209, "DisName": "蓬莱市", "CityID": 129, "DisSort": null}, {
        "Id": 1210,
        "DisName": "招远市",
        "CityID": 129,
        "DisSort": null
    }, {"Id": 1211, "DisName": "栖霞市", "CityID": 129, "DisSort": null}, {
        "Id": 1212,
        "DisName": "海阳市",
        "CityID": 129,
        "DisSort": null
    }, {"Id": 1213, "DisName": "潍城区", "CityID": 130, "DisSort": null}, {
        "Id": 1214,
        "DisName": "寒亭区",
        "CityID": 130,
        "DisSort": null
    }, {"Id": 1215, "DisName": "坊子区", "CityID": 130, "DisSort": null}, {
        "Id": 1216,
        "DisName": "奎文区",
        "CityID": 130,
        "DisSort": null
    }, {"Id": 1217, "DisName": "临朐县", "CityID": 130, "DisSort": null}, {
        "Id": 1218,
        "DisName": "昌乐县",
        "CityID": 130,
        "DisSort": null
    }, {"Id": 1219, "DisName": "青州市", "CityID": 130, "DisSort": null}, {
        "Id": 1220,
        "DisName": "诸城市",
        "CityID": 130,
        "DisSort": null
    }, {"Id": 1221, "DisName": "寿光市", "CityID": 130, "DisSort": null}, {
        "Id": 1222,
        "DisName": "安丘市",
        "CityID": 130,
        "DisSort": null
    }, {"Id": 1223, "DisName": "高密市", "CityID": 130, "DisSort": null}, {
        "Id": 1224,
        "DisName": "昌邑市",
        "CityID": 130,
        "DisSort": null
    }, {"Id": 1225, "DisName": "市中区", "CityID": 131, "DisSort": null}, {
        "Id": 1226,
        "DisName": "任城区",
        "CityID": 131,
        "DisSort": null
    }, {"Id": 1227, "DisName": "微山县", "CityID": 131, "DisSort": null}, {
        "Id": 1228,
        "DisName": "鱼台县",
        "CityID": 131,
        "DisSort": null
    }, {"Id": 1229, "DisName": "金乡县", "CityID": 131, "DisSort": null}, {
        "Id": 1230,
        "DisName": "嘉祥县",
        "CityID": 131,
        "DisSort": null
    }, {"Id": 1231, "DisName": "汶上县", "CityID": 131, "DisSort": null}, {
        "Id": 1232,
        "DisName": "泗水县",
        "CityID": 131,
        "DisSort": null
    }, {"Id": 1233, "DisName": "梁山县", "CityID": 131, "DisSort": null}, {
        "Id": 1234,
        "DisName": "曲阜市",
        "CityID": 131,
        "DisSort": null
    }, {"Id": 1235, "DisName": "兖州市", "CityID": 131, "DisSort": null}, {
        "Id": 1236,
        "DisName": "邹城市",
        "CityID": 131,
        "DisSort": null
    }, {"Id": 1237, "DisName": "泰山区", "CityID": 132, "DisSort": null}, {
        "Id": 1238,
        "DisName": "岱岳区",
        "CityID": 132,
        "DisSort": null
    }, {"Id": 1239, "DisName": "宁阳县", "CityID": 132, "DisSort": null}, {
        "Id": 1240,
        "DisName": "东平县",
        "CityID": 132,
        "DisSort": null
    }, {"Id": 1241, "DisName": "新泰市", "CityID": 132, "DisSort": null}, {
        "Id": 1242,
        "DisName": "肥城市",
        "CityID": 132,
        "DisSort": null
    }, {"Id": 1243, "DisName": "兰山区", "CityID": 133, "DisSort": null}, {
        "Id": 1244,
        "DisName": "罗庄区",
        "CityID": 133,
        "DisSort": null
    }, {"Id": 1245, "DisName": "河东区", "CityID": 133, "DisSort": null}, {
        "Id": 1246,
        "DisName": "沂南县",
        "CityID": 133,
        "DisSort": null
    }, {"Id": 1247, "DisName": "郯城县", "CityID": 133, "DisSort": null}, {
        "Id": 1248,
        "DisName": "沂水县",
        "CityID": 133,
        "DisSort": null
    }, {"Id": 1249, "DisName": "苍山县", "CityID": 133, "DisSort": null}, {
        "Id": 1250,
        "DisName": "费县",
        "CityID": 133,
        "DisSort": null
    }, {"Id": 1251, "DisName": "平邑县", "CityID": 133, "DisSort": null}, {
        "Id": 1252,
        "DisName": "莒南县",
        "CityID": 133,
        "DisSort": null
    }, {"Id": 1253, "DisName": "蒙阴县", "CityID": 133, "DisSort": null}, {
        "Id": 1254,
        "DisName": "临沭县",
        "CityID": 133,
        "DisSort": null
    }, {"Id": 1255, "DisName": "滨城区", "CityID": 134, "DisSort": null}, {
        "Id": 1256,
        "DisName": "惠民县",
        "CityID": 134,
        "DisSort": null
    }, {"Id": 1257, "DisName": "阳信县", "CityID": 134, "DisSort": null}, {
        "Id": 1258,
        "DisName": "无棣县",
        "CityID": 134,
        "DisSort": null
    }, {"Id": 1259, "DisName": "沾化县", "CityID": 134, "DisSort": null}, {
        "Id": 1260,
        "DisName": "博兴县",
        "CityID": 134,
        "DisSort": null
    }, {"Id": 1261, "DisName": "邹平县", "CityID": 134, "DisSort": null}, {
        "Id": 1262,
        "DisName": "东营区",
        "CityID": 135,
        "DisSort": null
    }, {"Id": 1263, "DisName": "河口区", "CityID": 135, "DisSort": null}, {
        "Id": 1264,
        "DisName": "垦利县",
        "CityID": 135,
        "DisSort": null
    }, {"Id": 1265, "DisName": "利津县", "CityID": 135, "DisSort": null}, {
        "Id": 1266,
        "DisName": "广饶县",
        "CityID": 135,
        "DisSort": null
    }, {"Id": 1267, "DisName": "环翠区", "CityID": 136, "DisSort": null}, {
        "Id": 1268,
        "DisName": "文登市",
        "CityID": 136,
        "DisSort": null
    }, {"Id": 1269, "DisName": "荣成市", "CityID": 136, "DisSort": null}, {
        "Id": 1270,
        "DisName": "乳山市",
        "CityID": 136,
        "DisSort": null
    }, {"Id": 1271, "DisName": "市中区", "CityID": 137, "DisSort": null}, {
        "Id": 1272,
        "DisName": "薛城区",
        "CityID": 137,
        "DisSort": null
    }, {"Id": 1273, "DisName": "峄城区", "CityID": 137, "DisSort": null}, {
        "Id": 1274,
        "DisName": "台儿庄区",
        "CityID": 137,
        "DisSort": null
    }, {"Id": 1275, "DisName": "山亭区", "CityID": 137, "DisSort": null}, {
        "Id": 1276,
        "DisName": "滕州市",
        "CityID": 137,
        "DisSort": null
    }, {"Id": 1277, "DisName": "东港区", "CityID": 138, "DisSort": null}, {
        "Id": 1278,
        "DisName": "岚山区",
        "CityID": 138,
        "DisSort": null
    }, {"Id": 1279, "DisName": "五莲县", "CityID": 138, "DisSort": null}, {
        "Id": 1280,
        "DisName": "莒县",
        "CityID": 138,
        "DisSort": null
    }, {"Id": 1281, "DisName": "莱城区", "CityID": 139, "DisSort": null}, {
        "Id": 1282,
        "DisName": "钢城区",
        "CityID": 139,
        "DisSort": null
    }, {"Id": 1283, "DisName": "东昌府区", "CityID": 140, "DisSort": null}, {
        "Id": 1284,
        "DisName": "阳谷县",
        "CityID": 140,
        "DisSort": null
    }, {"Id": 1285, "DisName": "莘县", "CityID": 140, "DisSort": null}, {
        "Id": 1286,
        "DisName": "茌平县",
        "CityID": 140,
        "DisSort": null
    }, {"Id": 1287, "DisName": "东阿县", "CityID": 140, "DisSort": null}, {
        "Id": 1288,
        "DisName": "冠县",
        "CityID": 140,
        "DisSort": null
    }, {"Id": 1289, "DisName": "高唐县", "CityID": 140, "DisSort": null}, {
        "Id": 1290,
        "DisName": "临清市",
        "CityID": 140,
        "DisSort": null
    }, {"Id": 1291, "DisName": "梁园区", "CityID": 141, "DisSort": null}, {
        "Id": 1292,
        "DisName": "睢阳区",
        "CityID": 141,
        "DisSort": null
    }, {"Id": 1293, "DisName": "民权县", "CityID": 141, "DisSort": null}, {
        "Id": 1294,
        "DisName": "睢县",
        "CityID": 141,
        "DisSort": null
    }, {"Id": 1295, "DisName": "宁陵县", "CityID": 141, "DisSort": null}, {
        "Id": 1296,
        "DisName": "柘城县",
        "CityID": 141,
        "DisSort": null
    }, {"Id": 1297, "DisName": "虞城县", "CityID": 141, "DisSort": null}, {
        "Id": 1298,
        "DisName": "夏邑县",
        "CityID": 141,
        "DisSort": null
    }, {"Id": 1299, "DisName": "永城市", "CityID": 141, "DisSort": null}, {
        "Id": 1300,
        "DisName": "中原区",
        "CityID": 142,
        "DisSort": null
    }, {"Id": 1301, "DisName": "二七区", "CityID": 142, "DisSort": null}, {
        "Id": 1302,
        "DisName": "管城回族区",
        "CityID": 142,
        "DisSort": null
    }, {"Id": 1303, "DisName": "金水区", "CityID": 142, "DisSort": null}, {
        "Id": 1304,
        "DisName": "上街区",
        "CityID": 142,
        "DisSort": null
    }, {"Id": 1305, "DisName": "惠济区", "CityID": 142, "DisSort": null}, {
        "Id": 1306,
        "DisName": "中牟县",
        "CityID": 142,
        "DisSort": null
    }, {"Id": 1307, "DisName": "巩义市", "CityID": 142, "DisSort": null}, {
        "Id": 1308,
        "DisName": "荥阳市",
        "CityID": 142,
        "DisSort": null
    }, {"Id": 1309, "DisName": "新密市", "CityID": 142, "DisSort": null}, {
        "Id": 1310,
        "DisName": "新郑市",
        "CityID": 142,
        "DisSort": null
    }, {"Id": 1311, "DisName": "登封市", "CityID": 142, "DisSort": null}, {
        "Id": 1312,
        "DisName": "文峰区",
        "CityID": 143,
        "DisSort": null
    }, {"Id": 1313, "DisName": "北关区", "CityID": 143, "DisSort": null}, {
        "Id": 1314,
        "DisName": "殷都区",
        "CityID": 143,
        "DisSort": null
    }, {"Id": 1315, "DisName": "龙安区", "CityID": 143, "DisSort": null}, {
        "Id": 1316,
        "DisName": "安阳县",
        "CityID": 143,
        "DisSort": null
    }, {"Id": 1317, "DisName": "汤阴县", "CityID": 143, "DisSort": null}, {
        "Id": 1318,
        "DisName": "滑县",
        "CityID": 143,
        "DisSort": null
    }, {"Id": 1319, "DisName": "内黄县", "CityID": 143, "DisSort": null}, {
        "Id": 1320,
        "DisName": "林州市",
        "CityID": 143,
        "DisSort": null
    }, {"Id": 1321, "DisName": "红旗区", "CityID": 144, "DisSort": null}, {
        "Id": 1322,
        "DisName": "卫滨区",
        "CityID": 144,
        "DisSort": null
    }, {"Id": 1323, "DisName": "凤泉区", "CityID": 144, "DisSort": null}, {
        "Id": 1324,
        "DisName": "牧野区",
        "CityID": 144,
        "DisSort": null
    }, {"Id": 1325, "DisName": "新乡县", "CityID": 144, "DisSort": null}, {
        "Id": 1326,
        "DisName": "获嘉县",
        "CityID": 144,
        "DisSort": null
    }, {"Id": 1327, "DisName": "原阳县", "CityID": 144, "DisSort": null}, {
        "Id": 1328,
        "DisName": "延津县",
        "CityID": 144,
        "DisSort": null
    }, {"Id": 1329, "DisName": "封丘县", "CityID": 144, "DisSort": null}, {
        "Id": 1330,
        "DisName": "长垣县",
        "CityID": 144,
        "DisSort": null
    }, {"Id": 1331, "DisName": "卫辉市", "CityID": 144, "DisSort": null}, {
        "Id": 1332,
        "DisName": "辉县市",
        "CityID": 144,
        "DisSort": null
    }, {"Id": 1333, "DisName": "魏都区", "CityID": 145, "DisSort": null}, {
        "Id": 1334,
        "DisName": "许昌县",
        "CityID": 145,
        "DisSort": null
    }, {"Id": 1335, "DisName": "鄢陵县", "CityID": 145, "DisSort": null}, {
        "Id": 1336,
        "DisName": "襄城县",
        "CityID": 145,
        "DisSort": null
    }, {"Id": 1337, "DisName": "禹州市", "CityID": 145, "DisSort": null}, {
        "Id": 1338,
        "DisName": "长葛市",
        "CityID": 145,
        "DisSort": null
    }, {"Id": 1339, "DisName": "新华区", "CityID": 146, "DisSort": null}, {
        "Id": 1340,
        "DisName": "卫东区",
        "CityID": 146,
        "DisSort": null
    }, {"Id": 1341, "DisName": "石龙区", "CityID": 146, "DisSort": null}, {
        "Id": 1342,
        "DisName": "湛河区",
        "CityID": 146,
        "DisSort": null
    }, {"Id": 1343, "DisName": "宝丰县", "CityID": 146, "DisSort": null}, {
        "Id": 1344,
        "DisName": "叶县",
        "CityID": 146,
        "DisSort": null
    }, {"Id": 1345, "DisName": "鲁山县", "CityID": 146, "DisSort": null}, {
        "Id": 1346,
        "DisName": "郏县",
        "CityID": 146,
        "DisSort": null
    }, {"Id": 1347, "DisName": "舞钢市", "CityID": 146, "DisSort": null}, {
        "Id": 1348,
        "DisName": "汝州市",
        "CityID": 146,
        "DisSort": null
    }, {"Id": 1349, "DisName": "浉河区", "CityID": 147, "DisSort": null}, {
        "Id": 1350,
        "DisName": "平桥区",
        "CityID": 147,
        "DisSort": null
    }, {"Id": 1351, "DisName": "罗山县", "CityID": 147, "DisSort": null}, {
        "Id": 1352,
        "DisName": "光山县",
        "CityID": 147,
        "DisSort": null
    }, {"Id": 1353, "DisName": "新县", "CityID": 147, "DisSort": null}, {
        "Id": 1354,
        "DisName": "商城县",
        "CityID": 147,
        "DisSort": null
    }, {"Id": 1355, "DisName": "固始县", "CityID": 147, "DisSort": null}, {
        "Id": 1356,
        "DisName": "潢川县",
        "CityID": 147,
        "DisSort": null
    }, {"Id": 1357, "DisName": "淮滨县", "CityID": 147, "DisSort": null}, {
        "Id": 1358,
        "DisName": "息县",
        "CityID": 147,
        "DisSort": null
    }, {"Id": 1359, "DisName": "宛城区", "CityID": 148, "DisSort": null}, {
        "Id": 1360,
        "DisName": "卧龙区",
        "CityID": 148,
        "DisSort": null
    }, {"Id": 1361, "DisName": "南召县", "CityID": 148, "DisSort": null}, {
        "Id": 1362,
        "DisName": "方城县",
        "CityID": 148,
        "DisSort": null
    }, {"Id": 1363, "DisName": "西峡县", "CityID": 148, "DisSort": null}, {
        "Id": 1364,
        "DisName": "镇平县",
        "CityID": 148,
        "DisSort": null
    }, {"Id": 1365, "DisName": "内乡县", "CityID": 148, "DisSort": null}, {
        "Id": 1366,
        "DisName": "淅川县",
        "CityID": 148,
        "DisSort": null
    }, {"Id": 1367, "DisName": "社旗县", "CityID": 148, "DisSort": null}, {
        "Id": 1368,
        "DisName": "唐河县",
        "CityID": 148,
        "DisSort": null
    }, {"Id": 1369, "DisName": "新野县", "CityID": 148, "DisSort": null}, {
        "Id": 1370,
        "DisName": "桐柏县",
        "CityID": 148,
        "DisSort": null
    }, {"Id": 1371, "DisName": "邓州市", "CityID": 148, "DisSort": null}, {
        "Id": 1372,
        "DisName": "龙亭区",
        "CityID": 149,
        "DisSort": null
    }, {"Id": 1373, "DisName": "顺河回族区", "CityID": 149, "DisSort": null}, {
        "Id": 1374,
        "DisName": "鼓楼区",
        "CityID": 149,
        "DisSort": null
    }, {"Id": 1375, "DisName": "禹王台区", "CityID": 149, "DisSort": null}, {
        "Id": 1376,
        "DisName": "金明区",
        "CityID": 149,
        "DisSort": null
    }, {"Id": 1377, "DisName": "杞县", "CityID": 149, "DisSort": null}, {
        "Id": 1378,
        "DisName": "通许县",
        "CityID": 149,
        "DisSort": null
    }, {"Id": 1379, "DisName": "尉氏县", "CityID": 149, "DisSort": null}, {
        "Id": 1380,
        "DisName": "开封县",
        "CityID": 149,
        "DisSort": null
    }, {"Id": 1381, "DisName": "兰考县", "CityID": 149, "DisSort": null}, {
        "Id": 1382,
        "DisName": "老城区",
        "CityID": 150,
        "DisSort": null
    }, {"Id": 1383, "DisName": "西工区", "CityID": 150, "DisSort": null}, {
        "Id": 1384,
        "DisName": "瀍河回族区",
        "CityID": 150,
        "DisSort": null
    }, {"Id": 1385, "DisName": "涧西区", "CityID": 150, "DisSort": null}, {
        "Id": 1386,
        "DisName": "吉利区",
        "CityID": 150,
        "DisSort": null
    }, {"Id": 1387, "DisName": "洛龙区", "CityID": 150, "DisSort": null}, {
        "Id": 1388,
        "DisName": "孟津县",
        "CityID": 150,
        "DisSort": null
    }, {"Id": 1389, "DisName": "新安县", "CityID": 150, "DisSort": null}, {
        "Id": 1390,
        "DisName": "栾川县",
        "CityID": 150,
        "DisSort": null
    }, {"Id": 1391, "DisName": "嵩县", "CityID": 150, "DisSort": null}, {
        "Id": 1392,
        "DisName": "汝阳县",
        "CityID": 150,
        "DisSort": null
    }, {"Id": 1393, "DisName": "宜阳县", "CityID": 150, "DisSort": null}, {
        "Id": 1394,
        "DisName": "洛宁县",
        "CityID": 150,
        "DisSort": null
    }, {"Id": 1395, "DisName": "伊川县", "CityID": 150, "DisSort": null}, {
        "Id": 1396,
        "DisName": "偃师市",
        "CityID": 150,
        "DisSort": null
    }, {"Id": 1397, "DisName": "解放区", "CityID": 152, "DisSort": null}, {
        "Id": 1398,
        "DisName": "中站区",
        "CityID": 152,
        "DisSort": null
    }, {"Id": 1399, "DisName": "马村区", "CityID": 152, "DisSort": null}, {
        "Id": 1400,
        "DisName": "山阳区",
        "CityID": 152,
        "DisSort": null
    }, {"Id": 1401, "DisName": "修武县", "CityID": 152, "DisSort": null}, {
        "Id": 1402,
        "DisName": "博爱县",
        "CityID": 152,
        "DisSort": null
    }, {"Id": 1403, "DisName": "武陟县", "CityID": 152, "DisSort": null}, {
        "Id": 1404,
        "DisName": "温县",
        "CityID": 152,
        "DisSort": null
    }, {"Id": 1405, "DisName": "沁阳市", "CityID": 152, "DisSort": null}, {
        "Id": 1406,
        "DisName": "孟州市",
        "CityID": 152,
        "DisSort": null
    }, {"Id": 1407, "DisName": "鹤山区", "CityID": 153, "DisSort": null}, {
        "Id": 1408,
        "DisName": "山城区",
        "CityID": 153,
        "DisSort": null
    }, {"Id": 1409, "DisName": "淇滨区", "CityID": 153, "DisSort": null}, {
        "Id": 1410,
        "DisName": "浚县",
        "CityID": 153,
        "DisSort": null
    }, {"Id": 1411, "DisName": "淇县", "CityID": 153, "DisSort": null}, {
        "Id": 1412,
        "DisName": "华龙区",
        "CityID": 154,
        "DisSort": null
    }, {"Id": 1413, "DisName": "清丰县", "CityID": 154, "DisSort": null}, {
        "Id": 1414,
        "DisName": "南乐县",
        "CityID": 154,
        "DisSort": null
    }, {"Id": 1415, "DisName": "范县", "CityID": 154, "DisSort": null}, {
        "Id": 1416,
        "DisName": "台前县",
        "CityID": 154,
        "DisSort": null
    }, {"Id": 1417, "DisName": "濮阳县", "CityID": 154, "DisSort": null}, {
        "Id": 1418,
        "DisName": "川汇区",
        "CityID": 155,
        "DisSort": null
    }, {"Id": 1419, "DisName": "扶沟县", "CityID": 155, "DisSort": null}, {
        "Id": 1420,
        "DisName": "西华县",
        "CityID": 155,
        "DisSort": null
    }, {"Id": 1421, "DisName": "商水县", "CityID": 155, "DisSort": null}, {
        "Id": 1422,
        "DisName": "沈丘县",
        "CityID": 155,
        "DisSort": null
    }, {"Id": 1423, "DisName": "郸城县", "CityID": 155, "DisSort": null}, {
        "Id": 1424,
        "DisName": "淮阳县",
        "CityID": 155,
        "DisSort": null
    }, {"Id": 1425, "DisName": "太康县", "CityID": 155, "DisSort": null}, {
        "Id": 1426,
        "DisName": "鹿邑县",
        "CityID": 155,
        "DisSort": null
    }, {"Id": 1427, "DisName": "项城市", "CityID": 155, "DisSort": null}, {
        "Id": 1428,
        "DisName": "源汇区",
        "CityID": 156,
        "DisSort": null
    }, {"Id": 1429, "DisName": "郾城区", "CityID": 156, "DisSort": null}, {
        "Id": 1430,
        "DisName": "召陵区",
        "CityID": 156,
        "DisSort": null
    }, {"Id": 1431, "DisName": "舞阳县", "CityID": 156, "DisSort": null}, {
        "Id": 1432,
        "DisName": "临颍县",
        "CityID": 156,
        "DisSort": null
    }, {"Id": 1433, "DisName": "驿城区", "CityID": 157, "DisSort": null}, {
        "Id": 1434,
        "DisName": "西平县",
        "CityID": 157,
        "DisSort": null
    }, {"Id": 1435, "DisName": "上蔡县", "CityID": 157, "DisSort": null}, {
        "Id": 1436,
        "DisName": "平舆县",
        "CityID": 157,
        "DisSort": null
    }, {"Id": 1437, "DisName": "正阳县", "CityID": 157, "DisSort": null}, {
        "Id": 1438,
        "DisName": "确山县",
        "CityID": 157,
        "DisSort": null
    }, {"Id": 1439, "DisName": "泌阳县", "CityID": 157, "DisSort": null}, {
        "Id": 1440,
        "DisName": "汝南县",
        "CityID": 157,
        "DisSort": null
    }, {"Id": 1441, "DisName": "遂平县", "CityID": 157, "DisSort": null}, {
        "Id": 1442,
        "DisName": "新蔡县",
        "CityID": 157,
        "DisSort": null
    }, {"Id": 1443, "DisName": "湖滨区", "CityID": 158, "DisSort": null}, {
        "Id": 1444,
        "DisName": "渑池县",
        "CityID": 158,
        "DisSort": null
    }, {"Id": 1445, "DisName": "陕县", "CityID": 158, "DisSort": null}, {
        "Id": 1446,
        "DisName": "卢氏县",
        "CityID": 158,
        "DisSort": null
    }, {"Id": 1447, "DisName": "义马市", "CityID": 158, "DisSort": null}, {
        "Id": 1448,
        "DisName": "灵宝市",
        "CityID": 158,
        "DisSort": null
    }, {"Id": 1449, "DisName": "江岸区", "CityID": 159, "DisSort": null}, {
        "Id": 1450,
        "DisName": "江汉区",
        "CityID": 159,
        "DisSort": null
    }, {"Id": 1451, "DisName": "硚口区", "CityID": 159, "DisSort": null}, {
        "Id": 1452,
        "DisName": "汉阳区",
        "CityID": 159,
        "DisSort": null
    }, {"Id": 1453, "DisName": "武昌区", "CityID": 159, "DisSort": null}, {
        "Id": 1454,
        "DisName": "青山区",
        "CityID": 159,
        "DisSort": null
    }, {"Id": 1455, "DisName": "洪山区", "CityID": 159, "DisSort": null}, {
        "Id": 1456,
        "DisName": "东西湖区",
        "CityID": 159,
        "DisSort": null
    }, {"Id": 1457, "DisName": "汉南区", "CityID": 159, "DisSort": null}, {
        "Id": 1458,
        "DisName": "蔡甸区",
        "CityID": 159,
        "DisSort": null
    }, {"Id": 1459, "DisName": "江夏区", "CityID": 159, "DisSort": null}, {
        "Id": 1460,
        "DisName": "黄陂区",
        "CityID": 159,
        "DisSort": null
    }, {"Id": 1461, "DisName": "新洲区", "CityID": 159, "DisSort": null}, {
        "Id": 1462,
        "DisName": "襄城区",
        "CityID": 160,
        "DisSort": null
    }, {"Id": 1463, "DisName": "樊城区", "CityID": 160, "DisSort": null}, {
        "Id": 1464,
        "DisName": "襄阳区",
        "CityID": 160,
        "DisSort": null
    }, {"Id": 1465, "DisName": "南漳县", "CityID": 160, "DisSort": null}, {
        "Id": 1466,
        "DisName": "谷城县",
        "CityID": 160,
        "DisSort": null
    }, {"Id": 1467, "DisName": "保康县", "CityID": 160, "DisSort": null}, {
        "Id": 1468,
        "DisName": "老河口市",
        "CityID": 160,
        "DisSort": null
    }, {"Id": 1469, "DisName": "枣阳市", "CityID": 160, "DisSort": null}, {
        "Id": 1470,
        "DisName": "宜城市",
        "CityID": 160,
        "DisSort": null
    }, {"Id": 1471, "DisName": "梁子湖区", "CityID": 161, "DisSort": null}, {
        "Id": 1472,
        "DisName": "华容区",
        "CityID": 161,
        "DisSort": null
    }, {"Id": 1473, "DisName": "鄂城区", "CityID": 161, "DisSort": null}, {
        "Id": 1474,
        "DisName": "孝南区",
        "CityID": 162,
        "DisSort": null
    }, {"Id": 1475, "DisName": "孝昌县", "CityID": 162, "DisSort": null}, {
        "Id": 1476,
        "DisName": "大悟县",
        "CityID": 162,
        "DisSort": null
    }, {"Id": 1477, "DisName": "云梦县", "CityID": 162, "DisSort": null}, {
        "Id": 1478,
        "DisName": "应城市",
        "CityID": 162,
        "DisSort": null
    }, {"Id": 1479, "DisName": "安陆市", "CityID": 162, "DisSort": null}, {
        "Id": 1480,
        "DisName": "汉川市",
        "CityID": 162,
        "DisSort": null
    }, {"Id": 1481, "DisName": "黄州区", "CityID": 163, "DisSort": null}, {
        "Id": 1482,
        "DisName": "团风县",
        "CityID": 163,
        "DisSort": null
    }, {"Id": 1483, "DisName": "红安县", "CityID": 163, "DisSort": null}, {
        "Id": 1484,
        "DisName": "罗田县",
        "CityID": 163,
        "DisSort": null
    }, {"Id": 1485, "DisName": "英山县", "CityID": 163, "DisSort": null}, {
        "Id": 1486,
        "DisName": "浠水县",
        "CityID": 163,
        "DisSort": null
    }, {"Id": 1487, "DisName": "蕲春县", "CityID": 163, "DisSort": null}, {
        "Id": 1488,
        "DisName": "黄梅县",
        "CityID": 163,
        "DisSort": null
    }, {"Id": 1489, "DisName": "麻城市", "CityID": 163, "DisSort": null}, {
        "Id": 1490,
        "DisName": "武穴市",
        "CityID": 163,
        "DisSort": null
    }, {"Id": 1491, "DisName": "黄石港区", "CityID": 164, "DisSort": null}, {
        "Id": 1492,
        "DisName": "西塞山区",
        "CityID": 164,
        "DisSort": null
    }, {"Id": 1493, "DisName": "下陆区", "CityID": 164, "DisSort": null}, {
        "Id": 1494,
        "DisName": "铁山区",
        "CityID": 164,
        "DisSort": null
    }, {"Id": 1495, "DisName": "阳新县", "CityID": 164, "DisSort": null}, {
        "Id": 1496,
        "DisName": "大冶市",
        "CityID": 164,
        "DisSort": null
    }, {"Id": 1497, "DisName": "咸安区", "CityID": 165, "DisSort": null}, {
        "Id": 1498,
        "DisName": "嘉鱼县",
        "CityID": 165,
        "DisSort": null
    }, {"Id": 1499, "DisName": "通城县", "CityID": 165, "DisSort": null}, {
        "Id": 1500,
        "DisName": "崇阳县",
        "CityID": 165,
        "DisSort": null
    }, {"Id": 1501, "DisName": "通山县", "CityID": 165, "DisSort": null}, {
        "Id": 1502,
        "DisName": "赤壁市",
        "CityID": 165,
        "DisSort": null
    }, {"Id": 1503, "DisName": "沙市区", "CityID": 166, "DisSort": null}, {
        "Id": 1504,
        "DisName": "荆州区",
        "CityID": 166,
        "DisSort": null
    }, {"Id": 1505, "DisName": "公安县", "CityID": 166, "DisSort": null}, {
        "Id": 1506,
        "DisName": "监利县",
        "CityID": 166,
        "DisSort": null
    }, {"Id": 1507, "DisName": "江陵县", "CityID": 166, "DisSort": null}, {
        "Id": 1508,
        "DisName": "石首市",
        "CityID": 166,
        "DisSort": null
    }, {"Id": 1509, "DisName": "洪湖市", "CityID": 166, "DisSort": null}, {
        "Id": 1510,
        "DisName": "松滋市",
        "CityID": 166,
        "DisSort": null
    }, {"Id": 1511, "DisName": "西陵区", "CityID": 167, "DisSort": null}, {
        "Id": 1512,
        "DisName": "伍家岗区",
        "CityID": 167,
        "DisSort": null
    }, {"Id": 1513, "DisName": "点军区", "CityID": 167, "DisSort": null}, {
        "Id": 1514,
        "DisName": "猇亭区",
        "CityID": 167,
        "DisSort": null
    }, {"Id": 1515, "DisName": "夷陵区", "CityID": 167, "DisSort": null}, {
        "Id": 1516,
        "DisName": "远安县",
        "CityID": 167,
        "DisSort": null
    }, {"Id": 1517, "DisName": "兴山县", "CityID": 167, "DisSort": null}, {
        "Id": 1518,
        "DisName": "秭归县",
        "CityID": 167,
        "DisSort": null
    }, {"Id": 1519, "DisName": "长阳土家族自治县", "CityID": 167, "DisSort": null}, {
        "Id": 1520,
        "DisName": "五峰土家族自治县",
        "CityID": 167,
        "DisSort": null
    }, {"Id": 1521, "DisName": "宜都市", "CityID": 167, "DisSort": null}, {
        "Id": 1522,
        "DisName": "当阳市",
        "CityID": 167,
        "DisSort": null
    }, {"Id": 1523, "DisName": "枝江市", "CityID": 167, "DisSort": null}, {
        "Id": 1524,
        "DisName": "恩施市",
        "CityID": 168,
        "DisSort": null
    }, {"Id": 1525, "DisName": "利川市", "CityID": 168, "DisSort": null}, {
        "Id": 1526,
        "DisName": "建始县",
        "CityID": 168,
        "DisSort": null
    }, {"Id": 1527, "DisName": "巴东县", "CityID": 168, "DisSort": null}, {
        "Id": 1528,
        "DisName": "宣恩县",
        "CityID": 168,
        "DisSort": null
    }, {"Id": 1529, "DisName": "咸丰县", "CityID": 168, "DisSort": null}, {
        "Id": 1530,
        "DisName": "来凤县",
        "CityID": 168,
        "DisSort": null
    }, {"Id": 1531, "DisName": "鹤峰县", "CityID": 168, "DisSort": null}, {
        "Id": 1532,
        "DisName": "茅箭区",
        "CityID": 170,
        "DisSort": null
    }, {"Id": 1533, "DisName": "张湾区", "CityID": 170, "DisSort": null}, {
        "Id": 1534,
        "DisName": "郧县",
        "CityID": 170,
        "DisSort": null
    }, {"Id": 1535, "DisName": "郧西县", "CityID": 170, "DisSort": null}, {
        "Id": 1536,
        "DisName": "竹山县",
        "CityID": 170,
        "DisSort": null
    }, {"Id": 1537, "DisName": "竹溪县", "CityID": 170, "DisSort": null}, {
        "Id": 1538,
        "DisName": "房县",
        "CityID": 170,
        "DisSort": null
    }, {"Id": 1539, "DisName": "丹江口市", "CityID": 170, "DisSort": null}, {
        "Id": 1540,
        "DisName": "曾都区",
        "CityID": 171,
        "DisSort": null
    }, {"Id": 1541, "DisName": "广水市", "CityID": 171, "DisSort": null}, {
        "Id": 1542,
        "DisName": "东宝区",
        "CityID": 172,
        "DisSort": null
    }, {"Id": 1543, "DisName": "掇刀区", "CityID": 172, "DisSort": null}, {
        "Id": 1544,
        "DisName": "京山县",
        "CityID": 172,
        "DisSort": null
    }, {"Id": 1545, "DisName": "沙洋县", "CityID": 172, "DisSort": null}, {
        "Id": 1546,
        "DisName": "钟祥市",
        "CityID": 172,
        "DisSort": null
    }, {"Id": 1547, "DisName": "岳阳楼区", "CityID": 176, "DisSort": null}, {
        "Id": 1548,
        "DisName": "云溪区",
        "CityID": 176,
        "DisSort": null
    }, {"Id": 1549, "DisName": "君山区", "CityID": 176, "DisSort": null}, {
        "Id": 1550,
        "DisName": "岳阳县",
        "CityID": 176,
        "DisSort": null
    }, {"Id": 1551, "DisName": "华容县", "CityID": 176, "DisSort": null}, {
        "Id": 1552,
        "DisName": "湘阴县",
        "CityID": 176,
        "DisSort": null
    }, {"Id": 1553, "DisName": "平江县", "CityID": 176, "DisSort": null}, {
        "Id": 1554,
        "DisName": "汨罗市",
        "CityID": 176,
        "DisSort": null
    }, {"Id": 1555, "DisName": "临湘市", "CityID": 176, "DisSort": null}, {
        "Id": 1556,
        "DisName": "芙蓉区",
        "CityID": 177,
        "DisSort": null
    }, {"Id": 1557, "DisName": "天心区", "CityID": 177, "DisSort": null}, {
        "Id": 1558,
        "DisName": "岳麓区",
        "CityID": 177,
        "DisSort": null
    }, {"Id": 1559, "DisName": "开福区", "CityID": 177, "DisSort": null}, {
        "Id": 1560,
        "DisName": "雨花区",
        "CityID": 177,
        "DisSort": null
    }, {"Id": 1561, "DisName": "长沙县", "CityID": 177, "DisSort": null}, {
        "Id": 1562,
        "DisName": "望城县",
        "CityID": 177,
        "DisSort": null
    }, {"Id": 1563, "DisName": "宁乡县", "CityID": 177, "DisSort": null}, {
        "Id": 1564,
        "DisName": "浏阳市",
        "CityID": 177,
        "DisSort": null
    }, {"Id": 1565, "DisName": "雨湖区", "CityID": 178, "DisSort": null}, {
        "Id": 1566,
        "DisName": "岳塘区",
        "CityID": 178,
        "DisSort": null
    }, {"Id": 1567, "DisName": "湘潭县", "CityID": 178, "DisSort": null}, {
        "Id": 1568,
        "DisName": "湘乡市",
        "CityID": 178,
        "DisSort": null
    }, {"Id": 1569, "DisName": "韶山市", "CityID": 178, "DisSort": null}, {
        "Id": 1570,
        "DisName": "荷塘区",
        "CityID": 179,
        "DisSort": null
    }, {"Id": 1571, "DisName": "芦淞区", "CityID": 179, "DisSort": null}, {
        "Id": 1572,
        "DisName": "石峰区",
        "CityID": 179,
        "DisSort": null
    }, {"Id": 1573, "DisName": "天元区", "CityID": 179, "DisSort": null}, {
        "Id": 1574,
        "DisName": "株洲县",
        "CityID": 179,
        "DisSort": null
    }, {"Id": 1575, "DisName": "攸县", "CityID": 179, "DisSort": null}, {
        "Id": 1576,
        "DisName": "茶陵县",
        "CityID": 179,
        "DisSort": null
    }, {"Id": 1577, "DisName": "炎陵县", "CityID": 179, "DisSort": null}, {
        "Id": 1578,
        "DisName": "醴陵市",
        "CityID": 179,
        "DisSort": null
    }, {"Id": 1579, "DisName": "珠晖区", "CityID": 180, "DisSort": null}, {
        "Id": 1580,
        "DisName": "雁峰区",
        "CityID": 180,
        "DisSort": null
    }, {"Id": 1581, "DisName": "石鼓区", "CityID": 180, "DisSort": null}, {
        "Id": 1582,
        "DisName": "蒸湘区",
        "CityID": 180,
        "DisSort": null
    }, {"Id": 1583, "DisName": "南岳区", "CityID": 180, "DisSort": null}, {
        "Id": 1584,
        "DisName": "衡阳县",
        "CityID": 180,
        "DisSort": null
    }, {"Id": 1585, "DisName": "衡南县", "CityID": 180, "DisSort": null}, {
        "Id": 1586,
        "DisName": "衡山县",
        "CityID": 180,
        "DisSort": null
    }, {"Id": 1587, "DisName": "衡东县", "CityID": 180, "DisSort": null}, {
        "Id": 1588,
        "DisName": "祁东县",
        "CityID": 180,
        "DisSort": null
    }, {"Id": 1589, "DisName": "耒阳市", "CityID": 180, "DisSort": null}, {
        "Id": 1590,
        "DisName": "常宁市",
        "CityID": 180,
        "DisSort": null
    }, {"Id": 1591, "DisName": "北湖区", "CityID": 181, "DisSort": null}, {
        "Id": 1592,
        "DisName": "苏仙区",
        "CityID": 181,
        "DisSort": null
    }, {"Id": 1593, "DisName": "桂阳县", "CityID": 181, "DisSort": null}, {
        "Id": 1594,
        "DisName": "宜章县",
        "CityID": 181,
        "DisSort": null
    }, {"Id": 1595, "DisName": "永兴县", "CityID": 181, "DisSort": null}, {
        "Id": 1596,
        "DisName": "嘉禾县",
        "CityID": 181,
        "DisSort": null
    }, {"Id": 1597, "DisName": "临武县", "CityID": 181, "DisSort": null}, {
        "Id": 1598,
        "DisName": "汝城县",
        "CityID": 181,
        "DisSort": null
    }, {"Id": 1599, "DisName": "桂东县", "CityID": 181, "DisSort": null}, {
        "Id": 1600,
        "DisName": "安仁县",
        "CityID": 181,
        "DisSort": null
    }, {"Id": 1601, "DisName": "资兴市", "CityID": 181, "DisSort": null}, {
        "Id": 1602,
        "DisName": "武陵区",
        "CityID": 182,
        "DisSort": null
    }, {"Id": 1603, "DisName": "鼎城区", "CityID": 182, "DisSort": null}, {
        "Id": 1604,
        "DisName": "安乡县",
        "CityID": 182,
        "DisSort": null
    }, {"Id": 1605, "DisName": "汉寿县", "CityID": 182, "DisSort": null}, {
        "Id": 1606,
        "DisName": "澧县",
        "CityID": 182,
        "DisSort": null
    }, {"Id": 1607, "DisName": "临澧县", "CityID": 182, "DisSort": null}, {
        "Id": 1608,
        "DisName": "桃源县",
        "CityID": 182,
        "DisSort": null
    }, {"Id": 1609, "DisName": "石门县", "CityID": 182, "DisSort": null}, {
        "Id": 1610,
        "DisName": "津市市",
        "CityID": 182,
        "DisSort": null
    }, {"Id": 1611, "DisName": "资阳区", "CityID": 183, "DisSort": null}, {
        "Id": 1612,
        "DisName": "赫山区",
        "CityID": 183,
        "DisSort": null
    }, {"Id": 1613, "DisName": "南县", "CityID": 183, "DisSort": null}, {
        "Id": 1614,
        "DisName": "桃江县",
        "CityID": 183,
        "DisSort": null
    }, {"Id": 1615, "DisName": "安化县", "CityID": 183, "DisSort": null}, {
        "Id": 1616,
        "DisName": "沅江市",
        "CityID": 183,
        "DisSort": null
    }, {"Id": 1617, "DisName": "娄星区", "CityID": 184, "DisSort": null}, {
        "Id": 1618,
        "DisName": "双峰县",
        "CityID": 184,
        "DisSort": null
    }, {"Id": 1619, "DisName": "新化县", "CityID": 184, "DisSort": null}, {
        "Id": 1620,
        "DisName": "冷水江市",
        "CityID": 184,
        "DisSort": null
    }, {"Id": 1621, "DisName": "涟源市", "CityID": 184, "DisSort": null}, {
        "Id": 1622,
        "DisName": "双清区",
        "CityID": 185,
        "DisSort": null
    }, {"Id": 1623, "DisName": "大祥区", "CityID": 185, "DisSort": null}, {
        "Id": 1624,
        "DisName": "北塔区",
        "CityID": 185,
        "DisSort": null
    }, {"Id": 1625, "DisName": "邵东县", "CityID": 185, "DisSort": null}, {
        "Id": 1626,
        "DisName": "新邵县",
        "CityID": 185,
        "DisSort": null
    }, {"Id": 1627, "DisName": "邵阳县", "CityID": 185, "DisSort": null}, {
        "Id": 1628,
        "DisName": "隆回县",
        "CityID": 185,
        "DisSort": null
    }, {"Id": 1629, "DisName": "洞口县", "CityID": 185, "DisSort": null}, {
        "Id": 1630,
        "DisName": "绥宁县",
        "CityID": 185,
        "DisSort": null
    }, {"Id": 1631, "DisName": "新宁县", "CityID": 185, "DisSort": null}, {
        "Id": 1632,
        "DisName": "城步苗族自治县",
        "CityID": 185,
        "DisSort": null
    }, {"Id": 1633, "DisName": "武冈市", "CityID": 185, "DisSort": null}, {
        "Id": 1634,
        "DisName": "吉首市",
        "CityID": 186,
        "DisSort": null
    }, {"Id": 1635, "DisName": "泸溪县", "CityID": 186, "DisSort": null}, {
        "Id": 1636,
        "DisName": "凤凰县",
        "CityID": 186,
        "DisSort": null
    }, {"Id": 1637, "DisName": "花垣县", "CityID": 186, "DisSort": null}, {
        "Id": 1638,
        "DisName": "保靖县",
        "CityID": 186,
        "DisSort": null
    }, {"Id": 1639, "DisName": "古丈县", "CityID": 186, "DisSort": null}, {
        "Id": 1640,
        "DisName": "永顺县",
        "CityID": 186,
        "DisSort": null
    }, {"Id": 1641, "DisName": "龙山县", "CityID": 186, "DisSort": null}, {
        "Id": 1642,
        "DisName": "永定区",
        "CityID": 187,
        "DisSort": null
    }, {"Id": 1643, "DisName": "武陵源区", "CityID": 187, "DisSort": null}, {
        "Id": 1644,
        "DisName": "慈利县",
        "CityID": 187,
        "DisSort": null
    }, {"Id": 1645, "DisName": "桑植县", "CityID": 187, "DisSort": null}, {
        "Id": 1646,
        "DisName": "鹤城区",
        "CityID": 188,
        "DisSort": null
    }, {"Id": 1647, "DisName": "中方县", "CityID": 188, "DisSort": null}, {
        "Id": 1648,
        "DisName": "沅陵县",
        "CityID": 188,
        "DisSort": null
    }, {"Id": 1649, "DisName": "辰溪县", "CityID": 188, "DisSort": null}, {
        "Id": 1650,
        "DisName": "溆浦县",
        "CityID": 188,
        "DisSort": null
    }, {"Id": 1651, "DisName": "会同县", "CityID": 188, "DisSort": null}, {
        "Id": 1652,
        "DisName": "麻阳苗族自治县",
        "CityID": 188,
        "DisSort": null
    }, {"Id": 1653, "DisName": "新晃侗族自治县", "CityID": 188, "DisSort": null}, {
        "Id": 1654,
        "DisName": "芷江侗族自治县",
        "CityID": 188,
        "DisSort": null
    }, {"Id": 1655, "DisName": "靖州苗族侗族自治县", "CityID": 188, "DisSort": null}, {
        "Id": 1656,
        "DisName": "通道侗族自治县",
        "CityID": 188,
        "DisSort": null
    }, {"Id": 1657, "DisName": "洪江市", "CityID": 188, "DisSort": null}, {
        "Id": 1658,
        "DisName": "零陵区",
        "CityID": 189,
        "DisSort": null
    }, {"Id": 1659, "DisName": "冷水滩区", "CityID": 189, "DisSort": null}, {
        "Id": 1660,
        "DisName": "祁阳县",
        "CityID": 189,
        "DisSort": null
    }, {"Id": 1661, "DisName": "东安县", "CityID": 189, "DisSort": null}, {
        "Id": 1662,
        "DisName": "双牌县",
        "CityID": 189,
        "DisSort": null
    }, {"Id": 1663, "DisName": "道县", "CityID": 189, "DisSort": null}, {
        "Id": 1664,
        "DisName": "江永县",
        "CityID": 189,
        "DisSort": null
    }, {"Id": 1665, "DisName": "宁远县", "CityID": 189, "DisSort": null}, {
        "Id": 1666,
        "DisName": "蓝山县",
        "CityID": 189,
        "DisSort": null
    }, {"Id": 1667, "DisName": "新田县", "CityID": 189, "DisSort": null}, {
        "Id": 1668,
        "DisName": "江华瑶族自治县",
        "CityID": 189,
        "DisSort": null
    }, {"Id": 1669, "DisName": "从化市", "CityID": 190, "DisSort": null}, {
        "Id": 1670,
        "DisName": "荔湾区",
        "CityID": 190,
        "DisSort": null
    }, {"Id": 1671, "DisName": "越秀区", "CityID": 190, "DisSort": null}, {
        "Id": 1672,
        "DisName": "海珠区",
        "CityID": 190,
        "DisSort": null
    }, {"Id": 1673, "DisName": "天河区", "CityID": 190, "DisSort": null}, {
        "Id": 1674,
        "DisName": "白云区",
        "CityID": 190,
        "DisSort": null
    }, {"Id": 1675, "DisName": "花都区", "CityID": 190, "DisSort": null}, {
        "Id": 1676,
        "DisName": "黄埔区",
        "CityID": 190,
        "DisSort": null
    }, {"Id": 1677, "DisName": "萝岗区", "CityID": 190, "DisSort": null}, {
        "Id": 1678,
        "DisName": "南沙区",
        "CityID": 190,
        "DisSort": null
    }, {"Id": 1679, "DisName": "番禺区", "CityID": 190, "DisSort": null}, {
        "Id": 1680,
        "DisName": "增城市",
        "CityID": 190,
        "DisSort": null
    }, {"Id": 1681, "DisName": "海丰县", "CityID": 191, "DisSort": null}, {
        "Id": 1682,
        "DisName": "陆河县",
        "CityID": 191,
        "DisSort": null
    }, {"Id": 1683, "DisName": "陆丰市", "CityID": 191, "DisSort": null}, {
        "Id": 1684,
        "DisName": "江城区",
        "CityID": 192,
        "DisSort": null
    }, {"Id": 1685, "DisName": "阳西县", "CityID": 192, "DisSort": null}, {
        "Id": 1686,
        "DisName": "阳东县",
        "CityID": 192,
        "DisSort": null
    }, {"Id": 1687, "DisName": "阳春市", "CityID": 192, "DisSort": null}, {
        "Id": 1688,
        "DisName": "榕城区",
        "CityID": 193,
        "DisSort": null
    }, {"Id": 1689, "DisName": "揭东县", "CityID": 193, "DisSort": null}, {
        "Id": 1690,
        "DisName": "揭西县",
        "CityID": 193,
        "DisSort": null
    }, {"Id": 1691, "DisName": "惠来县", "CityID": 193, "DisSort": null}, {
        "Id": 1692,
        "DisName": "普宁市",
        "CityID": 193,
        "DisSort": null
    }, {"Id": 1693, "DisName": "茂南区", "CityID": 194, "DisSort": null}, {
        "Id": 1694,
        "DisName": "茂港区",
        "CityID": 194,
        "DisSort": null
    }, {"Id": 1695, "DisName": "电白县", "CityID": 194, "DisSort": null}, {
        "Id": 1696,
        "DisName": "高州市",
        "CityID": 194,
        "DisSort": null
    }, {"Id": 1697, "DisName": "化州市", "CityID": 194, "DisSort": null}, {
        "Id": 1698,
        "DisName": "信宜市",
        "CityID": 194,
        "DisSort": null
    }, {"Id": 1699, "DisName": "惠城区", "CityID": 195, "DisSort": null}, {
        "Id": 1700,
        "DisName": "惠阳区",
        "CityID": 195,
        "DisSort": null
    }, {"Id": 1701, "DisName": "博罗县", "CityID": 195, "DisSort": null}, {
        "Id": 1702,
        "DisName": "惠东县",
        "CityID": 195,
        "DisSort": null
    }, {"Id": 1703, "DisName": "龙门县", "CityID": 195, "DisSort": null}, {
        "Id": 1704,
        "DisName": "蓬江区",
        "CityID": 196,
        "DisSort": null
    }, {"Id": 1705, "DisName": "江海区", "CityID": 196, "DisSort": null}, {
        "Id": 1706,
        "DisName": "新会区",
        "CityID": 196,
        "DisSort": null
    }, {"Id": 1707, "DisName": "台山市", "CityID": 196, "DisSort": null}, {
        "Id": 1708,
        "DisName": "开平市",
        "CityID": 196,
        "DisSort": null
    }, {"Id": 1709, "DisName": "鹤山市", "CityID": 196, "DisSort": null}, {
        "Id": 1710,
        "DisName": "恩平市",
        "CityID": 196,
        "DisSort": null
    }, {"Id": 1711, "DisName": "武江区", "CityID": 197, "DisSort": null}, {
        "Id": 1712,
        "DisName": "浈江区",
        "CityID": 197,
        "DisSort": null
    }, {"Id": 1713, "DisName": "曲江区", "CityID": 197, "DisSort": null}, {
        "Id": 1714,
        "DisName": "始兴县",
        "CityID": 197,
        "DisSort": null
    }, {"Id": 1715, "DisName": "仁化县", "CityID": 197, "DisSort": null}, {
        "Id": 1716,
        "DisName": "翁源县",
        "CityID": 197,
        "DisSort": null
    }, {"Id": 1717, "DisName": "乳源瑶族自治县", "CityID": 197, "DisSort": null}, {
        "Id": 1718,
        "DisName": "新丰县",
        "CityID": 197,
        "DisSort": null
    }, {"Id": 1719, "DisName": "乐昌市", "CityID": 197, "DisSort": null}, {
        "Id": 1720,
        "DisName": "南雄市",
        "CityID": 197,
        "DisSort": null
    }, {"Id": 1721, "DisName": "梅江区", "CityID": 198, "DisSort": null}, {
        "Id": 1722,
        "DisName": "梅县",
        "CityID": 198,
        "DisSort": null
    }, {"Id": 1723, "DisName": "大埔县", "CityID": 198, "DisSort": null}, {
        "Id": 1724,
        "DisName": "丰顺县",
        "CityID": 198,
        "DisSort": null
    }, {"Id": 1725, "DisName": "五华县", "CityID": 198, "DisSort": null}, {
        "Id": 1726,
        "DisName": "平远县",
        "CityID": 198,
        "DisSort": null
    }, {"Id": 1727, "DisName": "蕉岭县", "CityID": 198, "DisSort": null}, {
        "Id": 1728,
        "DisName": "兴宁市",
        "CityID": 198,
        "DisSort": null
    }, {"Id": 1729, "DisName": "龙湖区", "CityID": 199, "DisSort": null}, {
        "Id": 1730,
        "DisName": "金平区",
        "CityID": 199,
        "DisSort": null
    }, {"Id": 1731, "DisName": "濠江区", "CityID": 199, "DisSort": null}, {
        "Id": 1732,
        "DisName": "潮阳区",
        "CityID": 199,
        "DisSort": null
    }, {"Id": 1733, "DisName": "潮南区", "CityID": 199, "DisSort": null}, {
        "Id": 1734,
        "DisName": "澄海区",
        "CityID": 199,
        "DisSort": null
    }, {"Id": 1735, "DisName": "南澳县", "CityID": 199, "DisSort": null}, {
        "Id": 1736,
        "DisName": "罗湖区",
        "CityID": 200,
        "DisSort": null
    }, {"Id": 1737, "DisName": "福田区", "CityID": 200, "DisSort": null}, {
        "Id": 1738,
        "DisName": "南山区",
        "CityID": 200,
        "DisSort": null
    }, {"Id": 1739, "DisName": "宝安区", "CityID": 200, "DisSort": null}, {
        "Id": 1740,
        "DisName": "龙岗区",
        "CityID": 200,
        "DisSort": null
    }, {"Id": 1741, "DisName": "盐田区", "CityID": 200, "DisSort": null}, {
        "Id": 1742,
        "DisName": "香洲区",
        "CityID": 201,
        "DisSort": null
    }, {"Id": 1743, "DisName": "斗门区", "CityID": 201, "DisSort": null}, {
        "Id": 1744,
        "DisName": "金湾区",
        "CityID": 201,
        "DisSort": null
    }, {"Id": 1745, "DisName": "禅城区", "CityID": 202, "DisSort": null}, {
        "Id": 1746,
        "DisName": "南海区",
        "CityID": 202,
        "DisSort": null
    }, {"Id": 1747, "DisName": "顺德区", "CityID": 202, "DisSort": null}, {
        "Id": 1748,
        "DisName": "三水区",
        "CityID": 202,
        "DisSort": null
    }, {"Id": 1749, "DisName": "高明区", "CityID": 202, "DisSort": null}, {
        "Id": 1750,
        "DisName": "端州区",
        "CityID": 203,
        "DisSort": null
    }, {"Id": 1751, "DisName": "鼎湖区", "CityID": 203, "DisSort": null}, {
        "Id": 1752,
        "DisName": "广宁县",
        "CityID": 203,
        "DisSort": null
    }, {"Id": 1753, "DisName": "怀集县", "CityID": 203, "DisSort": null}, {
        "Id": 1754,
        "DisName": "封开县",
        "CityID": 203,
        "DisSort": null
    }, {"Id": 1755, "DisName": "德庆县", "CityID": 203, "DisSort": null}, {
        "Id": 1756,
        "DisName": "高要市",
        "CityID": 203,
        "DisSort": null
    }, {"Id": 1757, "DisName": "四会市", "CityID": 203, "DisSort": null}, {
        "Id": 1758,
        "DisName": "赤坎区",
        "CityID": 204,
        "DisSort": null
    }, {"Id": 1759, "DisName": "霞山区", "CityID": 204, "DisSort": null}, {
        "Id": 1760,
        "DisName": "坡头区",
        "CityID": 204,
        "DisSort": null
    }, {"Id": 1761, "DisName": "麻章区", "CityID": 204, "DisSort": null}, {
        "Id": 1762,
        "DisName": "遂溪县",
        "CityID": 204,
        "DisSort": null
    }, {"Id": 1763, "DisName": "徐闻县", "CityID": 204, "DisSort": null}, {
        "Id": 1764,
        "DisName": "廉江市",
        "CityID": 204,
        "DisSort": null
    }, {"Id": 1765, "DisName": "雷州市", "CityID": 204, "DisSort": null}, {
        "Id": 1766,
        "DisName": "吴川市",
        "CityID": 204,
        "DisSort": null
    }, {"Id": 1767, "DisName": "源城区", "CityID": 206, "DisSort": null}, {
        "Id": 1768,
        "DisName": "紫金县",
        "CityID": 206,
        "DisSort": null
    }, {"Id": 1769, "DisName": "龙川县", "CityID": 206, "DisSort": null}, {
        "Id": 1770,
        "DisName": "连平县",
        "CityID": 206,
        "DisSort": null
    }, {"Id": 1771, "DisName": "和平县", "CityID": 206, "DisSort": null}, {
        "Id": 1772,
        "DisName": "东源县",
        "CityID": 206,
        "DisSort": null
    }, {"Id": 1773, "DisName": "清城区", "CityID": 207, "DisSort": null}, {
        "Id": 1774,
        "DisName": "佛冈县",
        "CityID": 207,
        "DisSort": null
    }, {"Id": 1775, "DisName": "阳山县", "CityID": 207, "DisSort": null}, {
        "Id": 1776,
        "DisName": "连山壮族瑶族自治县",
        "CityID": 207,
        "DisSort": null
    }, {"Id": 1777, "DisName": "连南瑶族自治县", "CityID": 207, "DisSort": null}, {
        "Id": 1778,
        "DisName": "清新县",
        "CityID": 207,
        "DisSort": null
    }, {"Id": 1779, "DisName": "英德市", "CityID": 207, "DisSort": null}, {
        "Id": 1780,
        "DisName": "连州市",
        "CityID": 207,
        "DisSort": null
    }, {"Id": 1781, "DisName": "云城区", "CityID": 208, "DisSort": null}, {
        "Id": 1782,
        "DisName": "新兴县",
        "CityID": 208,
        "DisSort": null
    }, {"Id": 1783, "DisName": "郁南县", "CityID": 208, "DisSort": null}, {
        "Id": 1784,
        "DisName": "云安县",
        "CityID": 208,
        "DisSort": null
    }, {"Id": 1785, "DisName": "罗定市", "CityID": 208, "DisSort": null}, {
        "Id": 1786,
        "DisName": "湘桥区",
        "CityID": 209,
        "DisSort": null
    }, {"Id": 1787, "DisName": "潮安县", "CityID": 209, "DisSort": null}, {
        "Id": 1788,
        "DisName": "饶平县",
        "CityID": 209,
        "DisSort": null
    }, {"Id": 1789, "DisName": "城关区", "CityID": 211, "DisSort": null}, {
        "Id": 1790,
        "DisName": "七里河区",
        "CityID": 211,
        "DisSort": null
    }, {"Id": 1791, "DisName": "西固区", "CityID": 211, "DisSort": null}, {
        "Id": 1792,
        "DisName": "安宁区",
        "CityID": 211,
        "DisSort": null
    }, {"Id": 1793, "DisName": "红古区", "CityID": 211, "DisSort": null}, {
        "Id": 1794,
        "DisName": "永登县",
        "CityID": 211,
        "DisSort": null
    }, {"Id": 1795, "DisName": "皋兰县", "CityID": 211, "DisSort": null}, {
        "Id": 1796,
        "DisName": "榆中县",
        "CityID": 211,
        "DisSort": null
    }, {"Id": 1797, "DisName": "金川区", "CityID": 212, "DisSort": null}, {
        "Id": 1798,
        "DisName": "永昌县",
        "CityID": 212,
        "DisSort": null
    }, {"Id": 1799, "DisName": "白银区", "CityID": 213, "DisSort": null}, {
        "Id": 1800,
        "DisName": "平川区",
        "CityID": 213,
        "DisSort": null
    }, {"Id": 1801, "DisName": "靖远县", "CityID": 213, "DisSort": null}, {
        "Id": 1802,
        "DisName": "会宁县",
        "CityID": 213,
        "DisSort": null
    }, {"Id": 1803, "DisName": "景泰县", "CityID": 213, "DisSort": null}, {
        "Id": 1804,
        "DisName": "秦州区",
        "CityID": 214,
        "DisSort": null
    }, {"Id": 1805, "DisName": "麦积区", "CityID": 214, "DisSort": null}, {
        "Id": 1806,
        "DisName": "清水县",
        "CityID": 214,
        "DisSort": null
    }, {"Id": 1807, "DisName": "秦安县", "CityID": 214, "DisSort": null}, {
        "Id": 1808,
        "DisName": "甘谷县",
        "CityID": 214,
        "DisSort": null
    }, {"Id": 1809, "DisName": "武山县", "CityID": 214, "DisSort": null}, {
        "Id": 1810,
        "DisName": "张家川回族自治县",
        "CityID": 214,
        "DisSort": null
    }, {"Id": 1811, "DisName": "凉州区", "CityID": 216, "DisSort": null}, {
        "Id": 1812,
        "DisName": "民勤县",
        "CityID": 216,
        "DisSort": null
    }, {"Id": 1813, "DisName": "古浪县", "CityID": 216, "DisSort": null}, {
        "Id": 1814,
        "DisName": "天祝藏族自治县",
        "CityID": 216,
        "DisSort": null
    }, {"Id": 1815, "DisName": "甘州区", "CityID": 217, "DisSort": null}, {
        "Id": 1816,
        "DisName": "肃南裕固族自治县",
        "CityID": 217,
        "DisSort": null
    }, {"Id": 1817, "DisName": "民乐县", "CityID": 217, "DisSort": null}, {
        "Id": 1818,
        "DisName": "临泽县",
        "CityID": 217,
        "DisSort": null
    }, {"Id": 1819, "DisName": "高台县", "CityID": 217, "DisSort": null}, {
        "Id": 1820,
        "DisName": "山丹县",
        "CityID": 217,
        "DisSort": null
    }, {"Id": 1821, "DisName": "崆峒区", "CityID": 218, "DisSort": null}, {
        "Id": 1822,
        "DisName": "泾川县",
        "CityID": 218,
        "DisSort": null
    }, {"Id": 1823, "DisName": "灵台县", "CityID": 218, "DisSort": null}, {
        "Id": 1824,
        "DisName": "崇信县",
        "CityID": 218,
        "DisSort": null
    }, {"Id": 1825, "DisName": "华亭县", "CityID": 218, "DisSort": null}, {
        "Id": 1826,
        "DisName": "庄浪县",
        "CityID": 218,
        "DisSort": null
    }, {"Id": 1827, "DisName": "静宁县", "CityID": 218, "DisSort": null}, {
        "Id": 1828,
        "DisName": "肃州区",
        "CityID": 219,
        "DisSort": null
    }, {"Id": 1829, "DisName": "金塔县", "CityID": 219, "DisSort": null}, {
        "Id": 1830,
        "DisName": "瓜州县",
        "CityID": 219,
        "DisSort": null
    }, {"Id": 1831, "DisName": "肃北蒙古族自治县", "CityID": 219, "DisSort": null}, {
        "Id": 1832,
        "DisName": "阿克塞哈萨克族自治县",
        "CityID": 219,
        "DisSort": null
    }, {"Id": 1833, "DisName": "玉门市", "CityID": 219, "DisSort": null}, {
        "Id": 1834,
        "DisName": "敦煌市",
        "CityID": 219,
        "DisSort": null
    }, {"Id": 1835, "DisName": "西峰区", "CityID": 220, "DisSort": null}, {
        "Id": 1836,
        "DisName": "庆城县",
        "CityID": 220,
        "DisSort": null
    }, {"Id": 1837, "DisName": "环县", "CityID": 220, "DisSort": null}, {
        "Id": 1838,
        "DisName": "华池县",
        "CityID": 220,
        "DisSort": null
    }, {"Id": 1839, "DisName": "合水县", "CityID": 220, "DisSort": null}, {
        "Id": 1840,
        "DisName": "正宁县",
        "CityID": 220,
        "DisSort": null
    }, {"Id": 1841, "DisName": "宁县", "CityID": 220, "DisSort": null}, {
        "Id": 1842,
        "DisName": "镇原县",
        "CityID": 220,
        "DisSort": null
    }, {"Id": 1843, "DisName": "安定区", "CityID": 221, "DisSort": null}, {
        "Id": 1844,
        "DisName": "通渭县",
        "CityID": 221,
        "DisSort": null
    }, {"Id": 1845, "DisName": "陇西县", "CityID": 221, "DisSort": null}, {
        "Id": 1846,
        "DisName": "渭源县",
        "CityID": 221,
        "DisSort": null
    }, {"Id": 1847, "DisName": "临洮县", "CityID": 221, "DisSort": null}, {
        "Id": 1848,
        "DisName": "漳县",
        "CityID": 221,
        "DisSort": null
    }, {"Id": 1849, "DisName": "岷县", "CityID": 221, "DisSort": null}, {
        "Id": 1850,
        "DisName": "武都区",
        "CityID": 222,
        "DisSort": null
    }, {"Id": 1851, "DisName": "成县", "CityID": 222, "DisSort": null}, {
        "Id": 1852,
        "DisName": "文县",
        "CityID": 222,
        "DisSort": null
    }, {"Id": 1853, "DisName": "宕昌县", "CityID": 222, "DisSort": null}, {
        "Id": 1854,
        "DisName": "康县",
        "CityID": 222,
        "DisSort": null
    }, {"Id": 1855, "DisName": "西和县", "CityID": 222, "DisSort": null}, {
        "Id": 1856,
        "DisName": "礼县",
        "CityID": 222,
        "DisSort": null
    }, {"Id": 1857, "DisName": "徽县", "CityID": 222, "DisSort": null}, {
        "Id": 1858,
        "DisName": "两当县",
        "CityID": 222,
        "DisSort": null
    }, {"Id": 1859, "DisName": "临夏市", "CityID": 223, "DisSort": null}, {
        "Id": 1860,
        "DisName": "临夏县",
        "CityID": 223,
        "DisSort": null
    }, {"Id": 1861, "DisName": "康乐县", "CityID": 223, "DisSort": null}, {
        "Id": 1862,
        "DisName": "永靖县",
        "CityID": 223,
        "DisSort": null
    }, {"Id": 1863, "DisName": "广河县", "CityID": 223, "DisSort": null}, {
        "Id": 1864,
        "DisName": "和政县",
        "CityID": 223,
        "DisSort": null
    }, {"Id": 1865, "DisName": "东乡族自治县", "CityID": 223, "DisSort": null}, {
        "Id": 1866,
        "DisName": "积石山保安族东乡族撒拉族自治县",
        "CityID": 223,
        "DisSort": null
    }, {"Id": 1867, "DisName": "合作市", "CityID": 224, "DisSort": null}, {
        "Id": 1868,
        "DisName": "临潭县",
        "CityID": 224,
        "DisSort": null
    }, {"Id": 1869, "DisName": "卓尼县", "CityID": 224, "DisSort": null}, {
        "Id": 1870,
        "DisName": "舟曲县",
        "CityID": 224,
        "DisSort": null
    }, {"Id": 1871, "DisName": "迭部县", "CityID": 224, "DisSort": null}, {
        "Id": 1872,
        "DisName": "玛曲县",
        "CityID": 224,
        "DisSort": null
    }, {"Id": 1873, "DisName": "碌曲县", "CityID": 224, "DisSort": null}, {
        "Id": 1874,
        "DisName": "夏河县",
        "CityID": 224,
        "DisSort": null
    }, {"Id": 1875, "DisName": "锦江区", "CityID": 225, "DisSort": null}, {
        "Id": 1876,
        "DisName": "青羊区",
        "CityID": 225,
        "DisSort": null
    }, {"Id": 1877, "DisName": "金牛区", "CityID": 225, "DisSort": null}, {
        "Id": 1878,
        "DisName": "武侯区",
        "CityID": 225,
        "DisSort": null
    }, {"Id": 1879, "DisName": "成华区", "CityID": 225, "DisSort": null}, {
        "Id": 1880,
        "DisName": "龙泉驿区",
        "CityID": 225,
        "DisSort": null
    }, {"Id": 1881, "DisName": "青白江区", "CityID": 225, "DisSort": null}, {
        "Id": 1882,
        "DisName": "新都区",
        "CityID": 225,
        "DisSort": null
    }, {"Id": 1883, "DisName": "温江区", "CityID": 225, "DisSort": null}, {
        "Id": 1884,
        "DisName": "金堂县",
        "CityID": 225,
        "DisSort": null
    }, {"Id": 1885, "DisName": "双流县", "CityID": 225, "DisSort": null}, {
        "Id": 1886,
        "DisName": "郫县",
        "CityID": 225,
        "DisSort": null
    }, {"Id": 1887, "DisName": "大邑县", "CityID": 225, "DisSort": null}, {
        "Id": 1888,
        "DisName": "蒲江县",
        "CityID": 225,
        "DisSort": null
    }, {"Id": 1889, "DisName": "新津县", "CityID": 225, "DisSort": null}, {
        "Id": 1890,
        "DisName": "都江堰市",
        "CityID": 225,
        "DisSort": null
    }, {"Id": 1891, "DisName": "彭州市", "CityID": 225, "DisSort": null}, {
        "Id": 1892,
        "DisName": "邛崃市",
        "CityID": 225,
        "DisSort": null
    }, {"Id": 1893, "DisName": "崇州市", "CityID": 225, "DisSort": null}, {
        "Id": 1894,
        "DisName": "东区",
        "CityID": 226,
        "DisSort": null
    }, {"Id": 1895, "DisName": "西区", "CityID": 226, "DisSort": null}, {
        "Id": 1896,
        "DisName": "仁和区",
        "CityID": 226,
        "DisSort": null
    }, {"Id": 1897, "DisName": "米易县", "CityID": 226, "DisSort": null}, {
        "Id": 1898,
        "DisName": "盐边县",
        "CityID": 226,
        "DisSort": null
    }, {"Id": 1899, "DisName": "自流井区", "CityID": 227, "DisSort": null}, {
        "Id": 1900,
        "DisName": "贡井区",
        "CityID": 227,
        "DisSort": null
    }, {"Id": 1901, "DisName": "大安区", "CityID": 227, "DisSort": null}, {
        "Id": 1902,
        "DisName": "沿滩区",
        "CityID": 227,
        "DisSort": null
    }, {"Id": 1903, "DisName": "荣县", "CityID": 227, "DisSort": null}, {
        "Id": 1904,
        "DisName": "富顺县",
        "CityID": 227,
        "DisSort": null
    }, {"Id": 1905, "DisName": "涪城区", "CityID": 228, "DisSort": null}, {
        "Id": 1906,
        "DisName": "游仙区",
        "CityID": 228,
        "DisSort": null
    }, {"Id": 1907, "DisName": "三台县", "CityID": 228, "DisSort": null}, {
        "Id": 1908,
        "DisName": "盐亭县",
        "CityID": 228,
        "DisSort": null
    }, {"Id": 1909, "DisName": "安县", "CityID": 228, "DisSort": null}, {
        "Id": 1910,
        "DisName": "梓潼县",
        "CityID": 228,
        "DisSort": null
    }, {"Id": 1911, "DisName": "北川羌族自治县", "CityID": 228, "DisSort": null}, {
        "Id": 1912,
        "DisName": "平武县",
        "CityID": 228,
        "DisSort": null
    }, {"Id": 1913, "DisName": "江油市", "CityID": 228, "DisSort": null}, {
        "Id": 1914,
        "DisName": "顺庆区",
        "CityID": 229,
        "DisSort": null
    }, {"Id": 1915, "DisName": "高坪区", "CityID": 229, "DisSort": null}, {
        "Id": 1916,
        "DisName": "嘉陵区",
        "CityID": 229,
        "DisSort": null
    }, {"Id": 1917, "DisName": "南部县", "CityID": 229, "DisSort": null}, {
        "Id": 1918,
        "DisName": "营山县",
        "CityID": 229,
        "DisSort": null
    }, {"Id": 1919, "DisName": "蓬安县", "CityID": 229, "DisSort": null}, {
        "Id": 1920,
        "DisName": "仪陇县",
        "CityID": 229,
        "DisSort": null
    }, {"Id": 1921, "DisName": "西充县", "CityID": 229, "DisSort": null}, {
        "Id": 1922,
        "DisName": "阆中市",
        "CityID": 229,
        "DisSort": null
    }, {"Id": 1923, "DisName": "通川区", "CityID": 230, "DisSort": null}, {
        "Id": 1924,
        "DisName": "达县",
        "CityID": 230,
        "DisSort": null
    }, {"Id": 1925, "DisName": "宣汉县", "CityID": 230, "DisSort": null}, {
        "Id": 1926,
        "DisName": "开江县",
        "CityID": 230,
        "DisSort": null
    }, {"Id": 1927, "DisName": "大竹县", "CityID": 230, "DisSort": null}, {
        "Id": 1928,
        "DisName": "渠县",
        "CityID": 230,
        "DisSort": null
    }, {"Id": 1929, "DisName": "万源市", "CityID": 230, "DisSort": null}, {
        "Id": 1930,
        "DisName": "船山区",
        "CityID": 231,
        "DisSort": null
    }, {"Id": 1931, "DisName": "安居区", "CityID": 231, "DisSort": null}, {
        "Id": 1932,
        "DisName": "蓬溪县",
        "CityID": 231,
        "DisSort": null
    }, {"Id": 1933, "DisName": "射洪县", "CityID": 231, "DisSort": null}, {
        "Id": 1934,
        "DisName": "大英县",
        "CityID": 231,
        "DisSort": null
    }, {"Id": 1935, "DisName": "广安区", "CityID": 232, "DisSort": null}, {
        "Id": 1936,
        "DisName": "岳池县",
        "CityID": 232,
        "DisSort": null
    }, {"Id": 1937, "DisName": "武胜县", "CityID": 232, "DisSort": null}, {
        "Id": 1938,
        "DisName": "邻水县",
        "CityID": 232,
        "DisSort": null
    }, {"Id": 1939, "DisName": "华蓥市", "CityID": 232, "DisSort": null}, {
        "Id": 1940,
        "DisName": "巴州区",
        "CityID": 233,
        "DisSort": null
    }, {"Id": 1941, "DisName": "通江县", "CityID": 233, "DisSort": null}, {
        "Id": 1942,
        "DisName": "南江县",
        "CityID": 233,
        "DisSort": null
    }, {"Id": 1943, "DisName": "平昌县", "CityID": 233, "DisSort": null}, {
        "Id": 1944,
        "DisName": "江阳区",
        "CityID": 234,
        "DisSort": null
    }, {"Id": 1945, "DisName": "纳溪区", "CityID": 234, "DisSort": null}, {
        "Id": 1946,
        "DisName": "龙马潭区",
        "CityID": 234,
        "DisSort": null
    }, {"Id": 1947, "DisName": "泸县", "CityID": 234, "DisSort": null}, {
        "Id": 1948,
        "DisName": "合江县",
        "CityID": 234,
        "DisSort": null
    }, {"Id": 1949, "DisName": "叙永县", "CityID": 234, "DisSort": null}, {
        "Id": 1950,
        "DisName": "古蔺县",
        "CityID": 234,
        "DisSort": null
    }, {"Id": 1951, "DisName": "翠屏区", "CityID": 235, "DisSort": null}, {
        "Id": 1952,
        "DisName": "宜宾县",
        "CityID": 235,
        "DisSort": null
    }, {"Id": 1953, "DisName": "南溪县", "CityID": 235, "DisSort": null}, {
        "Id": 1954,
        "DisName": "江安县",
        "CityID": 235,
        "DisSort": null
    }, {"Id": 1955, "DisName": "长宁县", "CityID": 235, "DisSort": null}, {
        "Id": 1956,
        "DisName": "高县",
        "CityID": 235,
        "DisSort": null
    }, {"Id": 1957, "DisName": "珙县", "CityID": 235, "DisSort": null}, {
        "Id": 1958,
        "DisName": "筠连县",
        "CityID": 235,
        "DisSort": null
    }, {"Id": 1959, "DisName": "兴文县", "CityID": 235, "DisSort": null}, {
        "Id": 1960,
        "DisName": "屏山县",
        "CityID": 235,
        "DisSort": null
    }, {"Id": 1961, "DisName": "雁江区", "CityID": 236, "DisSort": null}, {
        "Id": 1962,
        "DisName": "安岳县",
        "CityID": 236,
        "DisSort": null
    }, {"Id": 1963, "DisName": "乐至县", "CityID": 236, "DisSort": null}, {
        "Id": 1964,
        "DisName": "简阳市",
        "CityID": 236,
        "DisSort": null
    }, {"Id": 1965, "DisName": "市中区", "CityID": 237, "DisSort": null}, {
        "Id": 1966,
        "DisName": "东兴区",
        "CityID": 237,
        "DisSort": null
    }, {"Id": 1967, "DisName": "威远县", "CityID": 237, "DisSort": null}, {
        "Id": 1968,
        "DisName": "资中县",
        "CityID": 237,
        "DisSort": null
    }, {"Id": 1969, "DisName": "隆昌县", "CityID": 237, "DisSort": null}, {
        "Id": 1970,
        "DisName": "市中区",
        "CityID": 238,
        "DisSort": null
    }, {"Id": 1971, "DisName": "沙湾区", "CityID": 238, "DisSort": null}, {
        "Id": 1972,
        "DisName": "五通桥区",
        "CityID": 238,
        "DisSort": null
    }, {"Id": 1973, "DisName": "金口河区", "CityID": 238, "DisSort": null}, {
        "Id": 1974,
        "DisName": "犍为县",
        "CityID": 238,
        "DisSort": null
    }, {"Id": 1975, "DisName": "井研县", "CityID": 238, "DisSort": null}, {
        "Id": 1976,
        "DisName": "夹江县",
        "CityID": 238,
        "DisSort": null
    }, {"Id": 1977, "DisName": "沐川县", "CityID": 238, "DisSort": null}, {
        "Id": 1978,
        "DisName": "峨边彝族自治县",
        "CityID": 238,
        "DisSort": null
    }, {"Id": 1979, "DisName": "马边彝族自治县", "CityID": 238, "DisSort": null}, {
        "Id": 1980,
        "DisName": "峨眉山市",
        "CityID": 238,
        "DisSort": null
    }, {"Id": 1981, "DisName": "东坡区", "CityID": 239, "DisSort": null}, {
        "Id": 1982,
        "DisName": "仁寿县",
        "CityID": 239,
        "DisSort": null
    }, {"Id": 1983, "DisName": "彭山县", "CityID": 239, "DisSort": null}, {
        "Id": 1984,
        "DisName": "洪雅县",
        "CityID": 239,
        "DisSort": null
    }, {"Id": 1985, "DisName": "丹棱县", "CityID": 239, "DisSort": null}, {
        "Id": 1986,
        "DisName": "青神县",
        "CityID": 239,
        "DisSort": null
    }, {"Id": 1987, "DisName": "西昌市", "CityID": 240, "DisSort": null}, {
        "Id": 1988,
        "DisName": "木里藏族自治县",
        "CityID": 240,
        "DisSort": null
    }, {"Id": 1989, "DisName": "盐源县", "CityID": 240, "DisSort": null}, {
        "Id": 1990,
        "DisName": "德昌县",
        "CityID": 240,
        "DisSort": null
    }, {"Id": 1991, "DisName": "会理县", "CityID": 240, "DisSort": null}, {
        "Id": 1992,
        "DisName": "会东县",
        "CityID": 240,
        "DisSort": null
    }, {"Id": 1993, "DisName": "宁南县", "CityID": 240, "DisSort": null}, {
        "Id": 1994,
        "DisName": "普格县",
        "CityID": 240,
        "DisSort": null
    }, {"Id": 1995, "DisName": "布拖县", "CityID": 240, "DisSort": null}, {
        "Id": 1996,
        "DisName": "金阳县",
        "CityID": 240,
        "DisSort": null
    }, {"Id": 1997, "DisName": "昭觉县", "CityID": 240, "DisSort": null}, {
        "Id": 1998,
        "DisName": "喜德县",
        "CityID": 240,
        "DisSort": null
    }, {"Id": 1999, "DisName": "冕宁县", "CityID": 240, "DisSort": null}, {
        "Id": 2000,
        "DisName": "越西县",
        "CityID": 240,
        "DisSort": null
    }, {"Id": 2001, "DisName": "甘洛县", "CityID": 240, "DisSort": null}, {
        "Id": 2002,
        "DisName": "美姑县",
        "CityID": 240,
        "DisSort": null
    }, {"Id": 2003, "DisName": "雷波县", "CityID": 240, "DisSort": null}, {
        "Id": 2004,
        "DisName": "雨城区",
        "CityID": 241,
        "DisSort": null
    }, {"Id": 2005, "DisName": "名山县", "CityID": 241, "DisSort": null}, {
        "Id": 2006,
        "DisName": "荥经县",
        "CityID": 241,
        "DisSort": null
    }, {"Id": 2007, "DisName": "汉源县", "CityID": 241, "DisSort": null}, {
        "Id": 2008,
        "DisName": "石棉县",
        "CityID": 241,
        "DisSort": null
    }, {"Id": 2009, "DisName": "天全县", "CityID": 241, "DisSort": null}, {
        "Id": 2010,
        "DisName": "芦山县",
        "CityID": 241,
        "DisSort": null
    }, {"Id": 2011, "DisName": "宝兴县", "CityID": 241, "DisSort": null}, {
        "Id": 2012,
        "DisName": "康定县",
        "CityID": 242,
        "DisSort": null
    }, {"Id": 2013, "DisName": "泸定县", "CityID": 242, "DisSort": null}, {
        "Id": 2014,
        "DisName": "丹巴县",
        "CityID": 242,
        "DisSort": null
    }, {"Id": 2015, "DisName": "九龙县", "CityID": 242, "DisSort": null}, {
        "Id": 2016,
        "DisName": "雅江县",
        "CityID": 242,
        "DisSort": null
    }, {"Id": 2017, "DisName": "道孚县", "CityID": 242, "DisSort": null}, {
        "Id": 2018,
        "DisName": "炉霍县",
        "CityID": 242,
        "DisSort": null
    }, {"Id": 2019, "DisName": "甘孜县", "CityID": 242, "DisSort": null}, {
        "Id": 2020,
        "DisName": "新龙县",
        "CityID": 242,
        "DisSort": null
    }, {"Id": 2021, "DisName": "德格县", "CityID": 242, "DisSort": null}, {
        "Id": 2022,
        "DisName": "白玉县",
        "CityID": 242,
        "DisSort": null
    }, {"Id": 2023, "DisName": "石渠县", "CityID": 242, "DisSort": null}, {
        "Id": 2024,
        "DisName": "色达县",
        "CityID": 242,
        "DisSort": null
    }, {"Id": 2025, "DisName": "理塘县", "CityID": 242, "DisSort": null}, {
        "Id": 2026,
        "DisName": "巴塘县",
        "CityID": 242,
        "DisSort": null
    }, {"Id": 2027, "DisName": "乡城县", "CityID": 242, "DisSort": null}, {
        "Id": 2028,
        "DisName": "稻城县",
        "CityID": 242,
        "DisSort": null
    }, {"Id": 2029, "DisName": "得荣县", "CityID": 242, "DisSort": null}, {
        "Id": 2030,
        "DisName": "汶川县",
        "CityID": 243,
        "DisSort": null
    }, {"Id": 2031, "DisName": "理县", "CityID": 243, "DisSort": null}, {
        "Id": 2032,
        "DisName": "茂县",
        "CityID": 243,
        "DisSort": null
    }, {"Id": 2033, "DisName": "松潘县", "CityID": 243, "DisSort": null}, {
        "Id": 2034,
        "DisName": "九寨沟县",
        "CityID": 243,
        "DisSort": null
    }, {"Id": 2035, "DisName": "金川县", "CityID": 243, "DisSort": null}, {
        "Id": 2036,
        "DisName": "小金县",
        "CityID": 243,
        "DisSort": null
    }, {"Id": 2037, "DisName": "黑水县", "CityID": 243, "DisSort": null}, {
        "Id": 2038,
        "DisName": "马尔康县",
        "CityID": 243,
        "DisSort": null
    }, {"Id": 2039, "DisName": "壤塘县", "CityID": 243, "DisSort": null}, {
        "Id": 2040,
        "DisName": "阿坝县",
        "CityID": 243,
        "DisSort": null
    }, {"Id": 2041, "DisName": "若尔盖县", "CityID": 243, "DisSort": null}, {
        "Id": 2042,
        "DisName": "红原县",
        "CityID": 243,
        "DisSort": null
    }, {"Id": 2043, "DisName": "旌阳区", "CityID": 244, "DisSort": null}, {
        "Id": 2044,
        "DisName": "中江县",
        "CityID": 244,
        "DisSort": null
    }, {"Id": 2045, "DisName": "罗江县", "CityID": 244, "DisSort": null}, {
        "Id": 2046,
        "DisName": "广汉市",
        "CityID": 244,
        "DisSort": null
    }, {"Id": 2047, "DisName": "什邡市", "CityID": 244, "DisSort": null}, {
        "Id": 2048,
        "DisName": "绵竹市",
        "CityID": 244,
        "DisSort": null
    }, {"Id": 2049, "DisName": "市中区", "CityID": 245, "DisSort": null}, {
        "Id": 2050,
        "DisName": "元坝区",
        "CityID": 245,
        "DisSort": null
    }, {"Id": 2051, "DisName": "朝天区", "CityID": 245, "DisSort": null}, {
        "Id": 2052,
        "DisName": "旺苍县",
        "CityID": 245,
        "DisSort": null
    }, {"Id": 2053, "DisName": "青川县", "CityID": 245, "DisSort": null}, {
        "Id": 2054,
        "DisName": "剑阁县",
        "CityID": 245,
        "DisSort": null
    }, {"Id": 2055, "DisName": "苍溪县", "CityID": 245, "DisSort": null}, {
        "Id": 2056,
        "DisName": "南明区",
        "CityID": 246,
        "DisSort": null
    }, {"Id": 2057, "DisName": "云岩区", "CityID": 246, "DisSort": null}, {
        "Id": 2058,
        "DisName": "花溪区",
        "CityID": 246,
        "DisSort": null
    }, {"Id": 2059, "DisName": "乌当区", "CityID": 246, "DisSort": null}, {
        "Id": 2060,
        "DisName": "白云区",
        "CityID": 246,
        "DisSort": null
    }, {"Id": 2061, "DisName": "小河区", "CityID": 246, "DisSort": null}, {
        "Id": 2062,
        "DisName": "开阳县",
        "CityID": 246,
        "DisSort": null
    }, {"Id": 2063, "DisName": "息烽县", "CityID": 246, "DisSort": null}, {
        "Id": 2064,
        "DisName": "修文县",
        "CityID": 246,
        "DisSort": null
    }, {"Id": 2065, "DisName": "清镇市", "CityID": 246, "DisSort": null}, {
        "Id": 2066,
        "DisName": "红花岗区",
        "CityID": 247,
        "DisSort": null
    }, {"Id": 2067, "DisName": "汇川区", "CityID": 247, "DisSort": null}, {
        "Id": 2068,
        "DisName": "遵义县",
        "CityID": 247,
        "DisSort": null
    }, {"Id": 2069, "DisName": "桐梓县", "CityID": 247, "DisSort": null}, {
        "Id": 2070,
        "DisName": "绥阳县",
        "CityID": 247,
        "DisSort": null
    }, {"Id": 2071, "DisName": "正安县", "CityID": 247, "DisSort": null}, {
        "Id": 2072,
        "DisName": "道真仡佬族苗族自治县",
        "CityID": 247,
        "DisSort": null
    }, {"Id": 2073, "DisName": "务川仡佬族苗族自治县", "CityID": 247, "DisSort": null}, {
        "Id": 2074,
        "DisName": "凤冈县",
        "CityID": 247,
        "DisSort": null
    }, {"Id": 2075, "DisName": "湄潭县", "CityID": 247, "DisSort": null}, {
        "Id": 2076,
        "DisName": "余庆县",
        "CityID": 247,
        "DisSort": null
    }, {"Id": 2077, "DisName": "习水县", "CityID": 247, "DisSort": null}, {
        "Id": 2078,
        "DisName": "赤水市",
        "CityID": 247,
        "DisSort": null
    }, {"Id": 2079, "DisName": "仁怀市", "CityID": 247, "DisSort": null}, {
        "Id": 2080,
        "DisName": "西秀区",
        "CityID": 248,
        "DisSort": null
    }, {"Id": 2081, "DisName": "平坝县", "CityID": 248, "DisSort": null}, {
        "Id": 2082,
        "DisName": "普定县",
        "CityID": 248,
        "DisSort": null
    }, {"Id": 2083, "DisName": "镇宁布依族苗族自治县", "CityID": 248, "DisSort": null}, {
        "Id": 2084,
        "DisName": "关岭布依族苗族自治县",
        "CityID": 248,
        "DisSort": null
    }, {"Id": 2085, "DisName": "紫云苗族布依族自治县", "CityID": 248, "DisSort": null}, {
        "Id": 2086,
        "DisName": "都匀市",
        "CityID": 249,
        "DisSort": null
    }, {"Id": 2087, "DisName": "福泉市", "CityID": 249, "DisSort": null}, {
        "Id": 2088,
        "DisName": "荔波县",
        "CityID": 249,
        "DisSort": null
    }, {"Id": 2089, "DisName": "贵定县", "CityID": 249, "DisSort": null}, {
        "Id": 2090,
        "DisName": "瓮安县",
        "CityID": 249,
        "DisSort": null
    }, {"Id": 2091, "DisName": "独山县", "CityID": 249, "DisSort": null}, {
        "Id": 2092,
        "DisName": "平塘县",
        "CityID": 249,
        "DisSort": null
    }, {"Id": 2093, "DisName": "罗甸县", "CityID": 249, "DisSort": null}, {
        "Id": 2094,
        "DisName": "长顺县",
        "CityID": 249,
        "DisSort": null
    }, {"Id": 2095, "DisName": "龙里县", "CityID": 249, "DisSort": null}, {
        "Id": 2096,
        "DisName": "惠水县",
        "CityID": 249,
        "DisSort": null
    }, {"Id": 2097, "DisName": "三都水族自治县", "CityID": 249, "DisSort": null}, {
        "Id": 2098,
        "DisName": "凯里市",
        "CityID": 250,
        "DisSort": null
    }, {"Id": 2099, "DisName": "黄平县", "CityID": 250, "DisSort": null}, {
        "Id": 2100,
        "DisName": "施秉县",
        "CityID": 250,
        "DisSort": null
    }, {"Id": 2101, "DisName": "三穗县", "CityID": 250, "DisSort": null}, {
        "Id": 2102,
        "DisName": "镇远县",
        "CityID": 250,
        "DisSort": null
    }, {"Id": 2103, "DisName": "岑巩县", "CityID": 250, "DisSort": null}, {
        "Id": 2104,
        "DisName": "天柱县",
        "CityID": 250,
        "DisSort": null
    }, {"Id": 2105, "DisName": "锦屏县", "CityID": 250, "DisSort": null}, {
        "Id": 2106,
        "DisName": "剑河县",
        "CityID": 250,
        "DisSort": null
    }, {"Id": 2107, "DisName": "台江县", "CityID": 250, "DisSort": null}, {
        "Id": 2108,
        "DisName": "黎平县",
        "CityID": 250,
        "DisSort": null
    }, {"Id": 2109, "DisName": "榕江县", "CityID": 250, "DisSort": null}, {
        "Id": 2110,
        "DisName": "从江县",
        "CityID": 250,
        "DisSort": null
    }, {"Id": 2111, "DisName": "雷山县", "CityID": 250, "DisSort": null}, {
        "Id": 2112,
        "DisName": "麻江县",
        "CityID": 250,
        "DisSort": null
    }, {"Id": 2113, "DisName": "丹寨县", "CityID": 250, "DisSort": null}, {
        "Id": 2114,
        "DisName": "铜仁市",
        "CityID": 251,
        "DisSort": null
    }, {"Id": 2115, "DisName": "江口县", "CityID": 251, "DisSort": null}, {
        "Id": 2116,
        "DisName": "玉屏侗族自治县",
        "CityID": 251,
        "DisSort": null
    }, {"Id": 2117, "DisName": "石阡县", "CityID": 251, "DisSort": null}, {
        "Id": 2118,
        "DisName": "思南县",
        "CityID": 251,
        "DisSort": null
    }, {"Id": 2119, "DisName": "印江土家族苗族自治县", "CityID": 251, "DisSort": null}, {
        "Id": 2120,
        "DisName": "德江县",
        "CityID": 251,
        "DisSort": null
    }, {"Id": 2121, "DisName": "沿河土家族自治县", "CityID": 251, "DisSort": null}, {
        "Id": 2122,
        "DisName": "松桃苗族自治县",
        "CityID": 251,
        "DisSort": null
    }, {"Id": 2123, "DisName": "万山特区", "CityID": 251, "DisSort": null}, {
        "Id": 2124,
        "DisName": "毕节市",
        "CityID": 252,
        "DisSort": null
    }, {"Id": 2125, "DisName": "大方县", "CityID": 252, "DisSort": null}, {
        "Id": 2126,
        "DisName": "黔西县",
        "CityID": 252,
        "DisSort": null
    }, {"Id": 2127, "DisName": "金沙县", "CityID": 252, "DisSort": null}, {
        "Id": 2128,
        "DisName": "织金县",
        "CityID": 252,
        "DisSort": null
    }, {"Id": 2129, "DisName": "纳雍县", "CityID": 252, "DisSort": null}, {
        "Id": 2130,
        "DisName": "威宁彝族回族苗族自治县",
        "CityID": 252,
        "DisSort": null
    }, {"Id": 2131, "DisName": "赫章县", "CityID": 252, "DisSort": null}, {
        "Id": 2132,
        "DisName": "钟山区",
        "CityID": 253,
        "DisSort": null
    }, {"Id": 2133, "DisName": "六枝特区", "CityID": 253, "DisSort": null}, {
        "Id": 2134,
        "DisName": "水城县",
        "CityID": 253,
        "DisSort": null
    }, {"Id": 2135, "DisName": "盘县", "CityID": 253, "DisSort": null}, {
        "Id": 2136,
        "DisName": "兴义市",
        "CityID": 254,
        "DisSort": null
    }, {"Id": 2137, "DisName": "兴仁县", "CityID": 254, "DisSort": null}, {
        "Id": 2138,
        "DisName": "普安县",
        "CityID": 254,
        "DisSort": null
    }, {"Id": 2139, "DisName": "晴隆县", "CityID": 254, "DisSort": null}, {
        "Id": 2140,
        "DisName": "贞丰县",
        "CityID": 254,
        "DisSort": null
    }, {"Id": 2141, "DisName": "望谟县", "CityID": 254, "DisSort": null}, {
        "Id": 2142,
        "DisName": "册亨县",
        "CityID": 254,
        "DisSort": null
    }, {"Id": 2143, "DisName": "安龙县", "CityID": 254, "DisSort": null}, {
        "Id": 2144,
        "DisName": "秀英区",
        "CityID": 255,
        "DisSort": null
    }, {"Id": 2145, "DisName": "龙华区", "CityID": 255, "DisSort": null}, {
        "Id": 2146,
        "DisName": "琼山区",
        "CityID": 255,
        "DisSort": null
    }, {"Id": 2147, "DisName": "美兰区", "CityID": 255, "DisSort": null}, {
        "Id": 2148,
        "DisName": "景洪市",
        "CityID": 273,
        "DisSort": null
    }, {"Id": 2149, "DisName": "勐海县", "CityID": 273, "DisSort": null}, {
        "Id": 2150,
        "DisName": "勐腊县",
        "CityID": 273,
        "DisSort": null
    }, {"Id": 2151, "DisName": "瑞丽市", "CityID": 274, "DisSort": null}, {
        "Id": 2152,
        "DisName": "潞西市",
        "CityID": 274,
        "DisSort": null
    }, {"Id": 2153, "DisName": "梁河县", "CityID": 274, "DisSort": null}, {
        "Id": 2154,
        "DisName": "盈江县",
        "CityID": 274,
        "DisSort": null
    }, {"Id": 2155, "DisName": "陇川县", "CityID": 274, "DisSort": null}, {
        "Id": 2156,
        "DisName": "昭阳区",
        "CityID": 275,
        "DisSort": null
    }, {"Id": 2157, "DisName": "鲁甸县", "CityID": 275, "DisSort": null}, {
        "Id": 2158,
        "DisName": "巧家县",
        "CityID": 275,
        "DisSort": null
    }, {"Id": 2159, "DisName": "盐津县", "CityID": 275, "DisSort": null}, {
        "Id": 2160,
        "DisName": "大关县",
        "CityID": 275,
        "DisSort": null
    }, {"Id": 2161, "DisName": "永善县", "CityID": 275, "DisSort": null}, {
        "Id": 2162,
        "DisName": "绥江县",
        "CityID": 275,
        "DisSort": null
    }, {"Id": 2163, "DisName": "镇雄县", "CityID": 275, "DisSort": null}, {
        "Id": 2164,
        "DisName": "彝良县",
        "CityID": 275,
        "DisSort": null
    }, {"Id": 2165, "DisName": "威信县", "CityID": 275, "DisSort": null}, {
        "Id": 2166,
        "DisName": "水富县",
        "CityID": 275,
        "DisSort": null
    }, {"Id": 2167, "DisName": "五华区", "CityID": 276, "DisSort": null}, {
        "Id": 2168,
        "DisName": "盘龙区",
        "CityID": 276,
        "DisSort": null
    }, {"Id": 2169, "DisName": "官渡区", "CityID": 276, "DisSort": null}, {
        "Id": 2170,
        "DisName": "西山区",
        "CityID": 276,
        "DisSort": null
    }, {"Id": 2171, "DisName": "东川区", "CityID": 276, "DisSort": null}, {
        "Id": 2172,
        "DisName": "呈贡县",
        "CityID": 276,
        "DisSort": null
    }, {"Id": 2173, "DisName": "晋宁县", "CityID": 276, "DisSort": null}, {
        "Id": 2174,
        "DisName": "富民县",
        "CityID": 276,
        "DisSort": null
    }, {"Id": 2175, "DisName": "宜良县", "CityID": 276, "DisSort": null}, {
        "Id": 2176,
        "DisName": "石林彝族自治县",
        "CityID": 276,
        "DisSort": null
    }, {"Id": 2177, "DisName": "嵩明县", "CityID": 276, "DisSort": null}, {
        "Id": 2178,
        "DisName": "禄劝彝族苗族自治县",
        "CityID": 276,
        "DisSort": null
    }, {"Id": 2179, "DisName": "寻甸回族彝族自治县", "CityID": 276, "DisSort": null}, {
        "Id": 2180,
        "DisName": "安宁市",
        "CityID": 276,
        "DisSort": null
    }, {"Id": 2181, "DisName": "大理市", "CityID": 277, "DisSort": null}, {
        "Id": 2182,
        "DisName": "漾濞彝族自治县",
        "CityID": 277,
        "DisSort": null
    }, {"Id": 2183, "DisName": "祥云县", "CityID": 277, "DisSort": null}, {
        "Id": 2184,
        "DisName": "宾川县",
        "CityID": 277,
        "DisSort": null
    }, {"Id": 2185, "DisName": "弥渡县", "CityID": 277, "DisSort": null}, {
        "Id": 2186,
        "DisName": "南涧彝族自治县",
        "CityID": 277,
        "DisSort": null
    }, {"Id": 2187, "DisName": "巍山彝族回族自治县", "CityID": 277, "DisSort": null}, {
        "Id": 2188,
        "DisName": "永平县",
        "CityID": 277,
        "DisSort": null
    }, {"Id": 2189, "DisName": "云龙县", "CityID": 277, "DisSort": null}, {
        "Id": 2190,
        "DisName": "洱源县",
        "CityID": 277,
        "DisSort": null
    }, {"Id": 2191, "DisName": "剑川县", "CityID": 277, "DisSort": null}, {
        "Id": 2192,
        "DisName": "鹤庆县",
        "CityID": 277,
        "DisSort": null
    }, {"Id": 2193, "DisName": "个旧市", "CityID": 278, "DisSort": null}, {
        "Id": 2194,
        "DisName": "开远市",
        "CityID": 278,
        "DisSort": null
    }, {"Id": 2195, "DisName": "蒙自县", "CityID": 278, "DisSort": null}, {
        "Id": 2196,
        "DisName": "屏边苗族自治县",
        "CityID": 278,
        "DisSort": null
    }, {"Id": 2197, "DisName": "建水县", "CityID": 278, "DisSort": null}, {
        "Id": 2198,
        "DisName": "石屏县",
        "CityID": 278,
        "DisSort": null
    }, {"Id": 2199, "DisName": "弥勒县", "CityID": 278, "DisSort": null}, {
        "Id": 2200,
        "DisName": "泸西县",
        "CityID": 278,
        "DisSort": null
    }, {"Id": 2201, "DisName": "元阳县", "CityID": 278, "DisSort": null}, {
        "Id": 2202,
        "DisName": "红河县",
        "CityID": 278,
        "DisSort": null
    }, {"Id": 2203, "DisName": "金平苗族瑶族傣族自治县", "CityID": 278, "DisSort": null}, {
        "Id": 2204,
        "DisName": "绿春县",
        "CityID": 278,
        "DisSort": null
    }, {"Id": 2205, "DisName": "河口瑶族自治县", "CityID": 278, "DisSort": null}, {
        "Id": 2206,
        "DisName": "麒麟区",
        "CityID": 279,
        "DisSort": null
    }, {"Id": 2207, "DisName": "马龙县", "CityID": 279, "DisSort": null}, {
        "Id": 2208,
        "DisName": "陆良县",
        "CityID": 279,
        "DisSort": null
    }, {"Id": 2209, "DisName": "师宗县", "CityID": 279, "DisSort": null}, {
        "Id": 2210,
        "DisName": "罗平县",
        "CityID": 279,
        "DisSort": null
    }, {"Id": 2211, "DisName": "富源县", "CityID": 279, "DisSort": null}, {
        "Id": 2212,
        "DisName": "会泽县",
        "CityID": 279,
        "DisSort": null
    }, {"Id": 2213, "DisName": "沾益县", "CityID": 279, "DisSort": null}, {
        "Id": 2214,
        "DisName": "宣威市",
        "CityID": 279,
        "DisSort": null
    }, {"Id": 2215, "DisName": "隆阳区", "CityID": 280, "DisSort": null}, {
        "Id": 2216,
        "DisName": "施甸县",
        "CityID": 280,
        "DisSort": null
    }, {"Id": 2217, "DisName": "腾冲县", "CityID": 280, "DisSort": null}, {
        "Id": 2218,
        "DisName": "龙陵县",
        "CityID": 280,
        "DisSort": null
    }, {"Id": 2219, "DisName": "昌宁县", "CityID": 280, "DisSort": null}, {
        "Id": 2220,
        "DisName": "文山县",
        "CityID": 281,
        "DisSort": null
    }, {"Id": 2221, "DisName": "砚山县", "CityID": 281, "DisSort": null}, {
        "Id": 2222,
        "DisName": "西畴县",
        "CityID": 281,
        "DisSort": null
    }, {"Id": 2223, "DisName": "麻栗坡县", "CityID": 281, "DisSort": null}, {
        "Id": 2224,
        "DisName": "马关县",
        "CityID": 281,
        "DisSort": null
    }, {"Id": 2225, "DisName": "丘北县", "CityID": 281, "DisSort": null}, {
        "Id": 2226,
        "DisName": "广南县",
        "CityID": 281,
        "DisSort": null
    }, {"Id": 2227, "DisName": "富宁县", "CityID": 281, "DisSort": null}, {
        "Id": 2228,
        "DisName": "红塔区",
        "CityID": 282,
        "DisSort": null
    }, {"Id": 2229, "DisName": "江川县", "CityID": 282, "DisSort": null}, {
        "Id": 2230,
        "DisName": "澄江县",
        "CityID": 282,
        "DisSort": null
    }, {"Id": 2231, "DisName": "通海县", "CityID": 282, "DisSort": null}, {
        "Id": 2232,
        "DisName": "华宁县",
        "CityID": 282,
        "DisSort": null
    }, {"Id": 2233, "DisName": "易门县", "CityID": 282, "DisSort": null}, {
        "Id": 2234,
        "DisName": "峨山彝族自治县",
        "CityID": 282,
        "DisSort": null
    }, {"Id": 2235, "DisName": "新平彝族傣族自治县", "CityID": 282, "DisSort": null}, {
        "Id": 2236,
        "DisName": "元江哈尼族彝族傣族自治县",
        "CityID": 282,
        "DisSort": null
    }, {"Id": 2237, "DisName": "楚雄市", "CityID": 283, "DisSort": null}, {
        "Id": 2238,
        "DisName": "双柏县",
        "CityID": 283,
        "DisSort": null
    }, {"Id": 2239, "DisName": "牟定县", "CityID": 283, "DisSort": null}, {
        "Id": 2240,
        "DisName": "南华县",
        "CityID": 283,
        "DisSort": null
    }, {"Id": 2241, "DisName": "姚安县", "CityID": 283, "DisSort": null}, {
        "Id": 2242,
        "DisName": "大姚县",
        "CityID": 283,
        "DisSort": null
    }, {"Id": 2243, "DisName": "永仁县", "CityID": 283, "DisSort": null}, {
        "Id": 2244,
        "DisName": "元谋县",
        "CityID": 283,
        "DisSort": null
    }, {"Id": 2245, "DisName": "武定县", "CityID": 283, "DisSort": null}, {
        "Id": 2246,
        "DisName": "禄丰县",
        "CityID": 283,
        "DisSort": null
    }, {"Id": 2247, "DisName": "思茅区", "CityID": 284, "DisSort": null}, {
        "Id": 2248,
        "DisName": "宁洱哈尼族彝族自治县",
        "CityID": 284,
        "DisSort": null
    }, {"Id": 2249, "DisName": "墨江哈尼族自治县", "CityID": 284, "DisSort": null}, {
        "Id": 2250,
        "DisName": "景东彝族自治县",
        "CityID": 284,
        "DisSort": null
    }, {"Id": 2251, "DisName": "景谷傣族彝族自治县", "CityID": 284, "DisSort": null}, {
        "Id": 2252,
        "DisName": "镇沅彝族哈尼族拉祜族自治县",
        "CityID": 284,
        "DisSort": null
    }, {"Id": 2253, "DisName": "江城哈尼族彝族自治县", "CityID": 284, "DisSort": null}, {
        "Id": 2254,
        "DisName": "孟连傣族拉祜族佤族自治县",
        "CityID": 284,
        "DisSort": null
    }, {"Id": 2255, "DisName": "澜沧拉祜族自治县", "CityID": 284, "DisSort": null}, {
        "Id": 2256,
        "DisName": "西盟佤族自治县",
        "CityID": 284,
        "DisSort": null
    }, {"Id": 2257, "DisName": "临翔区", "CityID": 285, "DisSort": null}, {
        "Id": 2258,
        "DisName": "凤庆县",
        "CityID": 285,
        "DisSort": null
    }, {"Id": 2259, "DisName": "云县", "CityID": 285, "DisSort": null}, {
        "Id": 2260,
        "DisName": "永德县",
        "CityID": 285,
        "DisSort": null
    }, {"Id": 2261, "DisName": "镇康县", "CityID": 285, "DisSort": null}, {
        "Id": 2262,
        "DisName": "双江拉祜族佤族布朗族傣族自治县",
        "CityID": 285,
        "DisSort": null
    }, {"Id": 2263, "DisName": "耿马傣族佤族自治县", "CityID": 285, "DisSort": null}, {
        "Id": 2264,
        "DisName": "沧源佤族自治县",
        "CityID": 285,
        "DisSort": null
    }, {"Id": 2265, "DisName": "泸水县", "CityID": 286, "DisSort": null}, {
        "Id": 2266,
        "DisName": "福贡县",
        "CityID": 286,
        "DisSort": null
    }, {"Id": 2267, "DisName": "贡山独龙族怒族自治县", "CityID": 286, "DisSort": null}, {
        "Id": 2268,
        "DisName": "兰坪白族普米族自治县",
        "CityID": 286,
        "DisSort": null
    }, {"Id": 2269, "DisName": "香格里拉县", "CityID": 287, "DisSort": null}, {
        "Id": 2270,
        "DisName": "德钦县",
        "CityID": 287,
        "DisSort": null
    }, {"Id": 2271, "DisName": "维西傈僳族自治县", "CityID": 287, "DisSort": null}, {
        "Id": 2272,
        "DisName": "古城区",
        "CityID": 288,
        "DisSort": null
    }, {"Id": 2273, "DisName": "玉龙纳西族自治县", "CityID": 288, "DisSort": null}, {
        "Id": 2274,
        "DisName": "永胜县",
        "CityID": 288,
        "DisSort": null
    }, {"Id": 2275, "DisName": "华坪县", "CityID": 288, "DisSort": null}, {
        "Id": 2276,
        "DisName": "宁蒗彝族自治县",
        "CityID": 288,
        "DisSort": null
    }, {"Id": 2277, "DisName": "门源回族自治县", "CityID": 289, "DisSort": null}, {
        "Id": 2278,
        "DisName": "祁连县",
        "CityID": 289,
        "DisSort": null
    }, {"Id": 2279, "DisName": "海晏县", "CityID": 289, "DisSort": null}, {
        "Id": 2280,
        "DisName": "刚察县",
        "CityID": 289,
        "DisSort": null
    }, {"Id": 2281, "DisName": "城东区", "CityID": 290, "DisSort": null}, {
        "Id": 2282,
        "DisName": "城中区",
        "CityID": 290,
        "DisSort": null
    }, {"Id": 2283, "DisName": "城西区", "CityID": 290, "DisSort": null}, {
        "Id": 2284,
        "DisName": "城北区",
        "CityID": 290,
        "DisSort": null
    }, {"Id": 2285, "DisName": "大通回族土族自治县", "CityID": 290, "DisSort": null}, {
        "Id": 2286,
        "DisName": "湟中县",
        "CityID": 290,
        "DisSort": null
    }, {"Id": 2287, "DisName": "湟源县", "CityID": 290, "DisSort": null}, {
        "Id": 2288,
        "DisName": "平安县",
        "CityID": 291,
        "DisSort": null
    }, {"Id": 2289, "DisName": "民和回族土族自治县", "CityID": 291, "DisSort": null}, {
        "Id": 2290,
        "DisName": "乐都县",
        "CityID": 291,
        "DisSort": null
    }, {"Id": 2291, "DisName": "互助土族自治县", "CityID": 291, "DisSort": null}, {
        "Id": 2292,
        "DisName": "化隆回族自治县",
        "CityID": 291,
        "DisSort": null
    }, {"Id": 2293, "DisName": "循化撒拉族自治县", "CityID": 291, "DisSort": null}, {
        "Id": 2294,
        "DisName": "同仁县",
        "CityID": 292,
        "DisSort": null
    }, {"Id": 2295, "DisName": "尖扎县", "CityID": 292, "DisSort": null}, {
        "Id": 2296,
        "DisName": "泽库县",
        "CityID": 292,
        "DisSort": null
    }, {"Id": 2297, "DisName": "河南蒙古族自治县", "CityID": 292, "DisSort": null}, {
        "Id": 2298,
        "DisName": "共和县",
        "CityID": 293,
        "DisSort": null
    }, {"Id": 2299, "DisName": "同德县", "CityID": 293, "DisSort": null}, {
        "Id": 2300,
        "DisName": "贵德县",
        "CityID": 293,
        "DisSort": null
    }, {"Id": 2301, "DisName": "兴海县", "CityID": 293, "DisSort": null}, {
        "Id": 2302,
        "DisName": "贵南县",
        "CityID": 293,
        "DisSort": null
    }, {"Id": 2303, "DisName": "玛沁县", "CityID": 294, "DisSort": null}, {
        "Id": 2304,
        "DisName": "班玛县",
        "CityID": 294,
        "DisSort": null
    }, {"Id": 2305, "DisName": "甘德县", "CityID": 294, "DisSort": null}, {
        "Id": 2306,
        "DisName": "达日县",
        "CityID": 294,
        "DisSort": null
    }, {"Id": 2307, "DisName": "久治县", "CityID": 294, "DisSort": null}, {
        "Id": 2308,
        "DisName": "玛多县",
        "CityID": 294,
        "DisSort": null
    }, {"Id": 2309, "DisName": "玉树县", "CityID": 295, "DisSort": null}, {
        "Id": 2310,
        "DisName": "杂多县",
        "CityID": 295,
        "DisSort": null
    }, {"Id": 2311, "DisName": "称多县", "CityID": 295, "DisSort": null}, {
        "Id": 2312,
        "DisName": "治多县",
        "CityID": 295,
        "DisSort": null
    }, {"Id": 2313, "DisName": "囊谦县", "CityID": 295, "DisSort": null}, {
        "Id": 2314,
        "DisName": "曲麻莱县",
        "CityID": 295,
        "DisSort": null
    }, {"Id": 2315, "DisName": "格尔木市", "CityID": 296, "DisSort": null}, {
        "Id": 2316,
        "DisName": "德令哈市",
        "CityID": 296,
        "DisSort": null
    }, {"Id": 2317, "DisName": "乌兰县", "CityID": 296, "DisSort": null}, {
        "Id": 2318,
        "DisName": "都兰县",
        "CityID": 296,
        "DisSort": null
    }, {"Id": 2319, "DisName": "天峻县", "CityID": 296, "DisSort": null}, {
        "Id": 2320,
        "DisName": "新城区",
        "CityID": 297,
        "DisSort": null
    }, {"Id": 2321, "DisName": "碑林区", "CityID": 297, "DisSort": null}, {
        "Id": 2322,
        "DisName": "莲湖区",
        "CityID": 297,
        "DisSort": null
    }, {"Id": 2323, "DisName": "灞桥区", "CityID": 297, "DisSort": null}, {
        "Id": 2324,
        "DisName": "未央区",
        "CityID": 297,
        "DisSort": null
    }, {"Id": 2325, "DisName": "雁塔区", "CityID": 297, "DisSort": null}, {
        "Id": 2326,
        "DisName": "阎良区",
        "CityID": 297,
        "DisSort": null
    }, {"Id": 2327, "DisName": "临潼区", "CityID": 297, "DisSort": null}, {
        "Id": 2328,
        "DisName": "长安区",
        "CityID": 297,
        "DisSort": null
    }, {"Id": 2329, "DisName": "蓝田县", "CityID": 297, "DisSort": null}, {
        "Id": 2330,
        "DisName": "周至县",
        "CityID": 297,
        "DisSort": null
    }, {"Id": 2331, "DisName": "户县", "CityID": 297, "DisSort": null}, {
        "Id": 2332,
        "DisName": "高陵县",
        "CityID": 297,
        "DisSort": null
    }, {"Id": 2333, "DisName": "秦都区", "CityID": 298, "DisSort": null}, {
        "Id": 2334,
        "DisName": "杨陵区",
        "CityID": 298,
        "DisSort": null
    }, {"Id": 2335, "DisName": "渭城区", "CityID": 298, "DisSort": null}, {
        "Id": 2336,
        "DisName": "三原县",
        "CityID": 298,
        "DisSort": null
    }, {"Id": 2337, "DisName": "泾阳县", "CityID": 298, "DisSort": null}, {
        "Id": 2338,
        "DisName": "乾县",
        "CityID": 298,
        "DisSort": null
    }, {"Id": 2339, "DisName": "礼泉县", "CityID": 298, "DisSort": null}, {
        "Id": 2340,
        "DisName": "永寿县",
        "CityID": 298,
        "DisSort": null
    }, {"Id": 2341, "DisName": "彬县", "CityID": 298, "DisSort": null}, {
        "Id": 2342,
        "DisName": "长武县",
        "CityID": 298,
        "DisSort": null
    }, {"Id": 2343, "DisName": "旬邑县", "CityID": 298, "DisSort": null}, {
        "Id": 2344,
        "DisName": "淳化县",
        "CityID": 298,
        "DisSort": null
    }, {"Id": 2345, "DisName": "武功县", "CityID": 298, "DisSort": null}, {
        "Id": 2346,
        "DisName": "兴平市",
        "CityID": 298,
        "DisSort": null
    }, {"Id": 2347, "DisName": "宝塔区", "CityID": 299, "DisSort": null}, {
        "Id": 2348,
        "DisName": "延长县",
        "CityID": 299,
        "DisSort": null
    }, {"Id": 2349, "DisName": "延川县", "CityID": 299, "DisSort": null}, {
        "Id": 2350,
        "DisName": "子长县",
        "CityID": 299,
        "DisSort": null
    }, {"Id": 2351, "DisName": "安塞县", "CityID": 299, "DisSort": null}, {
        "Id": 2352,
        "DisName": "志丹县",
        "CityID": 299,
        "DisSort": null
    }, {"Id": 2353, "DisName": "吴起县", "CityID": 299, "DisSort": null}, {
        "Id": 2354,
        "DisName": "甘泉县",
        "CityID": 299,
        "DisSort": null
    }, {"Id": 2355, "DisName": "富县", "CityID": 299, "DisSort": null}, {
        "Id": 2356,
        "DisName": "洛川县",
        "CityID": 299,
        "DisSort": null
    }, {"Id": 2357, "DisName": "宜川县", "CityID": 299, "DisSort": null}, {
        "Id": 2358,
        "DisName": "黄龙县",
        "CityID": 299,
        "DisSort": null
    }, {"Id": 2359, "DisName": "黄陵县", "CityID": 299, "DisSort": null}, {
        "Id": 2360,
        "DisName": "榆阳区",
        "CityID": 300,
        "DisSort": null
    }, {"Id": 2361, "DisName": "神木县", "CityID": 300, "DisSort": null}, {
        "Id": 2362,
        "DisName": "府谷县",
        "CityID": 300,
        "DisSort": null
    }, {"Id": 2363, "DisName": "横山县", "CityID": 300, "DisSort": null}, {
        "Id": 2364,
        "DisName": "靖边县",
        "CityID": 300,
        "DisSort": null
    }, {"Id": 2365, "DisName": "定边县", "CityID": 300, "DisSort": null}, {
        "Id": 2366,
        "DisName": "绥德县",
        "CityID": 300,
        "DisSort": null
    }, {"Id": 2367, "DisName": "米脂县", "CityID": 300, "DisSort": null}, {
        "Id": 2368,
        "DisName": "佳县",
        "CityID": 300,
        "DisSort": null
    }, {"Id": 2369, "DisName": "吴堡县", "CityID": 300, "DisSort": null}, {
        "Id": 2370,
        "DisName": "清涧县",
        "CityID": 300,
        "DisSort": null
    }, {"Id": 2371, "DisName": "子洲县", "CityID": 300, "DisSort": null}, {
        "Id": 2372,
        "DisName": "临渭区",
        "CityID": 301,
        "DisSort": null
    }, {"Id": 2373, "DisName": "华县", "CityID": 301, "DisSort": null}, {
        "Id": 2374,
        "DisName": "潼关县",
        "CityID": 301,
        "DisSort": null
    }, {"Id": 2375, "DisName": "大荔县", "CityID": 301, "DisSort": null}, {
        "Id": 2376,
        "DisName": "合阳县",
        "CityID": 301,
        "DisSort": null
    }, {"Id": 2377, "DisName": "澄城县", "CityID": 301, "DisSort": null}, {
        "Id": 2378,
        "DisName": "蒲城县",
        "CityID": 301,
        "DisSort": null
    }, {"Id": 2379, "DisName": "白水县", "CityID": 301, "DisSort": null}, {
        "Id": 2380,
        "DisName": "富平县",
        "CityID": 301,
        "DisSort": null
    }, {"Id": 2381, "DisName": "韩城市", "CityID": 301, "DisSort": null}, {
        "Id": 2382,
        "DisName": "华阴市",
        "CityID": 301,
        "DisSort": null
    }, {"Id": 2383, "DisName": "商州区", "CityID": 302, "DisSort": null}, {
        "Id": 2384,
        "DisName": "洛南县",
        "CityID": 302,
        "DisSort": null
    }, {"Id": 2385, "DisName": "丹凤县", "CityID": 302, "DisSort": null}, {
        "Id": 2386,
        "DisName": "商南县",
        "CityID": 302,
        "DisSort": null
    }, {"Id": 2387, "DisName": "山阳县", "CityID": 302, "DisSort": null}, {
        "Id": 2388,
        "DisName": "镇安县",
        "CityID": 302,
        "DisSort": null
    }, {"Id": 2389, "DisName": "柞水县", "CityID": 302, "DisSort": null}, {
        "Id": 2390,
        "DisName": "汉滨区",
        "CityID": 303,
        "DisSort": null
    }, {"Id": 2391, "DisName": "汉阴县", "CityID": 303, "DisSort": null}, {
        "Id": 2392,
        "DisName": "石泉县",
        "CityID": 303,
        "DisSort": null
    }, {"Id": 2393, "DisName": "宁陕县", "CityID": 303, "DisSort": null}, {
        "Id": 2394,
        "DisName": "紫阳县",
        "CityID": 303,
        "DisSort": null
    }, {"Id": 2395, "DisName": "岚皋县", "CityID": 303, "DisSort": null}, {
        "Id": 2396,
        "DisName": "平利县",
        "CityID": 303,
        "DisSort": null
    }, {"Id": 2397, "DisName": "镇坪县", "CityID": 303, "DisSort": null}, {
        "Id": 2398,
        "DisName": "旬阳县",
        "CityID": 303,
        "DisSort": null
    }, {"Id": 2399, "DisName": "白河县", "CityID": 303, "DisSort": null}, {
        "Id": 2400,
        "DisName": "汉台区",
        "CityID": 304,
        "DisSort": null
    }, {"Id": 2401, "DisName": "南郑县", "CityID": 304, "DisSort": null}, {
        "Id": 2402,
        "DisName": "城固县",
        "CityID": 304,
        "DisSort": null
    }, {"Id": 2403, "DisName": "洋县", "CityID": 304, "DisSort": null}, {
        "Id": 2404,
        "DisName": "西乡县",
        "CityID": 304,
        "DisSort": null
    }, {"Id": 2405, "DisName": "勉县", "CityID": 304, "DisSort": null}, {
        "Id": 2406,
        "DisName": "宁强县",
        "CityID": 304,
        "DisSort": null
    }, {"Id": 2407, "DisName": "略阳县", "CityID": 304, "DisSort": null}, {
        "Id": 2408,
        "DisName": "镇巴县",
        "CityID": 304,
        "DisSort": null
    }, {"Id": 2409, "DisName": "留坝县", "CityID": 304, "DisSort": null}, {
        "Id": 2410,
        "DisName": "佛坪县",
        "CityID": 304,
        "DisSort": null
    }, {"Id": 2411, "DisName": "渭滨区", "CityID": 305, "DisSort": null}, {
        "Id": 2412,
        "DisName": "金台区",
        "CityID": 305,
        "DisSort": null
    }, {"Id": 2413, "DisName": "陈仓区", "CityID": 305, "DisSort": null}, {
        "Id": 2414,
        "DisName": "凤翔县",
        "CityID": 305,
        "DisSort": null
    }, {"Id": 2415, "DisName": "岐山县", "CityID": 305, "DisSort": null}, {
        "Id": 2416,
        "DisName": "扶风县",
        "CityID": 305,
        "DisSort": null
    }, {"Id": 2417, "DisName": "眉县", "CityID": 305, "DisSort": null}, {
        "Id": 2418,
        "DisName": "陇县",
        "CityID": 305,
        "DisSort": null
    }, {"Id": 2419, "DisName": "千阳县", "CityID": 305, "DisSort": null}, {
        "Id": 2420,
        "DisName": "麟游县",
        "CityID": 305,
        "DisSort": null
    }, {"Id": 2421, "DisName": "凤县", "CityID": 305, "DisSort": null}, {
        "Id": 2422,
        "DisName": "太白县",
        "CityID": 305,
        "DisSort": null
    }, {"Id": 2423, "DisName": "王益区", "CityID": 306, "DisSort": null}, {
        "Id": 2424,
        "DisName": "印台区",
        "CityID": 306,
        "DisSort": null
    }, {"Id": 2425, "DisName": "耀州区", "CityID": 306, "DisSort": null}, {
        "Id": 2426,
        "DisName": "宜君县",
        "CityID": 306,
        "DisSort": null
    }, {"Id": 2427, "DisName": "港口区", "CityID": 307, "DisSort": null}, {
        "Id": 2428,
        "DisName": "防城区",
        "CityID": 307,
        "DisSort": null
    }, {"Id": 2429, "DisName": "上思县", "CityID": 307, "DisSort": null}, {
        "Id": 2430,
        "DisName": "东兴市",
        "CityID": 307,
        "DisSort": null
    }, {"Id": 2431, "DisName": "兴宁区", "CityID": 308, "DisSort": null}, {
        "Id": 2432,
        "DisName": "青秀区",
        "CityID": 308,
        "DisSort": null
    }, {"Id": 2433, "DisName": "江南区", "CityID": 308, "DisSort": null}, {
        "Id": 2434,
        "DisName": "西乡塘区",
        "CityID": 308,
        "DisSort": null
    }, {"Id": 2435, "DisName": "良庆区", "CityID": 308, "DisSort": null}, {
        "Id": 2436,
        "DisName": "邕宁区",
        "CityID": 308,
        "DisSort": null
    }, {"Id": 2437, "DisName": "武鸣县", "CityID": 308, "DisSort": null}, {
        "Id": 2438,
        "DisName": "隆安县",
        "CityID": 308,
        "DisSort": null
    }, {"Id": 2439, "DisName": "马山县", "CityID": 308, "DisSort": null}, {
        "Id": 2440,
        "DisName": "上林县",
        "CityID": 308,
        "DisSort": null
    }, {"Id": 2441, "DisName": "宾阳县", "CityID": 308, "DisSort": null}, {
        "Id": 2442,
        "DisName": "横县",
        "CityID": 308,
        "DisSort": null
    }, {"Id": 2443, "DisName": "江洲区", "CityID": 309, "DisSort": null}, {
        "Id": 2444,
        "DisName": "扶绥县",
        "CityID": 309,
        "DisSort": null
    }, {"Id": 2445, "DisName": "宁明县", "CityID": 309, "DisSort": null}, {
        "Id": 2446,
        "DisName": "龙州县",
        "CityID": 309,
        "DisSort": null
    }, {"Id": 2447, "DisName": "大新县", "CityID": 309, "DisSort": null}, {
        "Id": 2448,
        "DisName": "天等县",
        "CityID": 309,
        "DisSort": null
    }, {"Id": 2449, "DisName": "凭祥市", "CityID": 309, "DisSort": null}, {
        "Id": 2450,
        "DisName": "兴宾区",
        "CityID": 310,
        "DisSort": null
    }, {"Id": 2451, "DisName": "忻城县", "CityID": 310, "DisSort": null}, {
        "Id": 2452,
        "DisName": "象州县",
        "CityID": 310,
        "DisSort": null
    }, {"Id": 2453, "DisName": "武宣县", "CityID": 310, "DisSort": null}, {
        "Id": 2454,
        "DisName": "金秀瑶族自治县",
        "CityID": 310,
        "DisSort": null
    }, {"Id": 2455, "DisName": "合山市", "CityID": 310, "DisSort": null}, {
        "Id": 2456,
        "DisName": "城中区",
        "CityID": 311,
        "DisSort": null
    }, {"Id": 2457, "DisName": "鱼峰区", "CityID": 311, "DisSort": null}, {
        "Id": 2458,
        "DisName": "柳南区",
        "CityID": 311,
        "DisSort": null
    }, {"Id": 2459, "DisName": "柳北区", "CityID": 311, "DisSort": null}, {
        "Id": 2460,
        "DisName": "柳江县",
        "CityID": 311,
        "DisSort": null
    }, {"Id": 2461, "DisName": "柳城县", "CityID": 311, "DisSort": null}, {
        "Id": 2462,
        "DisName": "鹿寨县",
        "CityID": 311,
        "DisSort": null
    }, {"Id": 2463, "DisName": "融安县", "CityID": 311, "DisSort": null}, {
        "Id": 2464,
        "DisName": "融水苗族自治县",
        "CityID": 311,
        "DisSort": null
    }, {"Id": 2465, "DisName": "三江侗族自治县", "CityID": 311, "DisSort": null}, {
        "Id": 2466,
        "DisName": "秀峰区",
        "CityID": 312,
        "DisSort": null
    }, {"Id": 2467, "DisName": "叠彩区", "CityID": 312, "DisSort": null}, {
        "Id": 2468,
        "DisName": "象山区",
        "CityID": 312,
        "DisSort": null
    }, {"Id": 2469, "DisName": "七星区", "CityID": 312, "DisSort": null}, {
        "Id": 2470,
        "DisName": "雁山区",
        "CityID": 312,
        "DisSort": null
    }, {"Id": 2471, "DisName": "阳朔县", "CityID": 312, "DisSort": null}, {
        "Id": 2472,
        "DisName": "临桂县",
        "CityID": 312,
        "DisSort": null
    }, {"Id": 2473, "DisName": "灵川县", "CityID": 312, "DisSort": null}, {
        "Id": 2474,
        "DisName": "全州县",
        "CityID": 312,
        "DisSort": null
    }, {"Id": 2475, "DisName": "兴安县", "CityID": 312, "DisSort": null}, {
        "Id": 2476,
        "DisName": "永福县",
        "CityID": 312,
        "DisSort": null
    }, {"Id": 2477, "DisName": "灌阳县", "CityID": 312, "DisSort": null}, {
        "Id": 2478,
        "DisName": "龙胜各族自治县",
        "CityID": 312,
        "DisSort": null
    }, {"Id": 2479, "DisName": "资源县", "CityID": 312, "DisSort": null}, {
        "Id": 2480,
        "DisName": "平乐县",
        "CityID": 312,
        "DisSort": null
    }, {"Id": 2481, "DisName": "荔浦县", "CityID": 312, "DisSort": null}, {
        "Id": 2482,
        "DisName": "恭城瑶族自治县",
        "CityID": 312,
        "DisSort": null
    }, {"Id": 2483, "DisName": "万秀区", "CityID": 313, "DisSort": null}, {
        "Id": 2484,
        "DisName": "碟山区",
        "CityID": 313,
        "DisSort": null
    }, {"Id": 2485, "DisName": "长洲区", "CityID": 313, "DisSort": null}, {
        "Id": 2486,
        "DisName": "苍梧县",
        "CityID": 313,
        "DisSort": null
    }, {"Id": 2487, "DisName": "藤县", "CityID": 313, "DisSort": null}, {
        "Id": 2488,
        "DisName": "蒙山县",
        "CityID": 313,
        "DisSort": null
    }, {"Id": 2489, "DisName": "岑溪市", "CityID": 313, "DisSort": null}, {
        "Id": 2490,
        "DisName": "八步区",
        "CityID": 314,
        "DisSort": null
    }, {"Id": 2491, "DisName": "昭平县", "CityID": 314, "DisSort": null}, {
        "Id": 2492,
        "DisName": "钟山县",
        "CityID": 314,
        "DisSort": null
    }, {"Id": 2493, "DisName": "富川瑶族自治县", "CityID": 314, "DisSort": null}, {
        "Id": 2494,
        "DisName": "港北区",
        "CityID": 315,
        "DisSort": null
    }, {"Id": 2495, "DisName": "港南区", "CityID": 315, "DisSort": null}, {
        "Id": 2496,
        "DisName": "覃塘区",
        "CityID": 315,
        "DisSort": null
    }, {"Id": 2497, "DisName": "平南县", "CityID": 315, "DisSort": null}, {
        "Id": 2498,
        "DisName": "桂平市",
        "CityID": 315,
        "DisSort": null
    }, {"Id": 2499, "DisName": "玉州区", "CityID": 316, "DisSort": null}, {
        "Id": 2500,
        "DisName": "容县",
        "CityID": 316,
        "DisSort": null
    }, {"Id": 2501, "DisName": "陆川县", "CityID": 316, "DisSort": null}, {
        "Id": 2502,
        "DisName": "博白县",
        "CityID": 316,
        "DisSort": null
    }, {"Id": 2503, "DisName": "兴业县", "CityID": 316, "DisSort": null}, {
        "Id": 2504,
        "DisName": "北流市",
        "CityID": 316,
        "DisSort": null
    }, {"Id": 2505, "DisName": "右江区", "CityID": 317, "DisSort": null}, {
        "Id": 2506,
        "DisName": "田阳县",
        "CityID": 317,
        "DisSort": null
    }, {"Id": 2507, "DisName": "田东县", "CityID": 317, "DisSort": null}, {
        "Id": 2508,
        "DisName": "平果县",
        "CityID": 317,
        "DisSort": null
    }, {"Id": 2509, "DisName": "德保县", "CityID": 317, "DisSort": null}, {
        "Id": 2510,
        "DisName": "靖西县",
        "CityID": 317,
        "DisSort": null
    }, {"Id": 2511, "DisName": "那坡县", "CityID": 317, "DisSort": null}, {
        "Id": 2512,
        "DisName": "凌云县",
        "CityID": 317,
        "DisSort": null
    }, {"Id": 2513, "DisName": "乐业县", "CityID": 317, "DisSort": null}, {
        "Id": 2514,
        "DisName": "田林县",
        "CityID": 317,
        "DisSort": null
    }, {"Id": 2515, "DisName": "西林县", "CityID": 317, "DisSort": null}, {
        "Id": 2516,
        "DisName": "隆林各族自治县",
        "CityID": 317,
        "DisSort": null
    }, {"Id": 2517, "DisName": "钦南区", "CityID": 318, "DisSort": null}, {
        "Id": 2518,
        "DisName": "钦北区",
        "CityID": 318,
        "DisSort": null
    }, {"Id": 2519, "DisName": "灵山县", "CityID": 318, "DisSort": null}, {
        "Id": 2520,
        "DisName": "浦北县",
        "CityID": 318,
        "DisSort": null
    }, {"Id": 2521, "DisName": "金城江区", "CityID": 319, "DisSort": null}, {
        "Id": 2522,
        "DisName": "南丹县",
        "CityID": 319,
        "DisSort": null
    }, {"Id": 2523, "DisName": "天峨县", "CityID": 319, "DisSort": null}, {
        "Id": 2524,
        "DisName": "凤山县",
        "CityID": 319,
        "DisSort": null
    }, {"Id": 2525, "DisName": "东兰县", "CityID": 319, "DisSort": null}, {
        "Id": 2526,
        "DisName": "罗城仫佬族自治县",
        "CityID": 319,
        "DisSort": null
    }, {"Id": 2527, "DisName": "环江毛南族自治县", "CityID": 319, "DisSort": null}, {
        "Id": 2528,
        "DisName": "巴马瑶族自治县",
        "CityID": 319,
        "DisSort": null
    }, {"Id": 2529, "DisName": "都安瑶族自治县", "CityID": 319, "DisSort": null}, {
        "Id": 2530,
        "DisName": "大化瑶族自治县",
        "CityID": 319,
        "DisSort": null
    }, {"Id": 2531, "DisName": "宜州市", "CityID": 319, "DisSort": null}, {
        "Id": 2532,
        "DisName": "海城区",
        "CityID": 320,
        "DisSort": null
    }, {"Id": 2533, "DisName": "银海区", "CityID": 320, "DisSort": null}, {
        "Id": 2534,
        "DisName": "铁山港区",
        "CityID": 320,
        "DisSort": null
    }, {"Id": 2535, "DisName": "合浦县", "CityID": 320, "DisSort": null}, {
        "Id": 2536,
        "DisName": "城关区",
        "CityID": 321,
        "DisSort": null
    }, {"Id": 2537, "DisName": "林周县", "CityID": 321, "DisSort": null}, {
        "Id": 2538,
        "DisName": "当雄县",
        "CityID": 321,
        "DisSort": null
    }, {"Id": 2539, "DisName": "尼木县", "CityID": 321, "DisSort": null}, {
        "Id": 2540,
        "DisName": "曲水县",
        "CityID": 321,
        "DisSort": null
    }, {"Id": 2541, "DisName": "堆龙德庆县", "CityID": 321, "DisSort": null}, {
        "Id": 2542,
        "DisName": "达孜县",
        "CityID": 321,
        "DisSort": null
    }, {"Id": 2543, "DisName": "墨竹工卡县", "CityID": 321, "DisSort": null}, {
        "Id": 2544,
        "DisName": "日喀则市",
        "CityID": 322,
        "DisSort": null
    }, {"Id": 2545, "DisName": "南木林县", "CityID": 322, "DisSort": null}, {
        "Id": 2546,
        "DisName": "江孜县",
        "CityID": 322,
        "DisSort": null
    }, {"Id": 2547, "DisName": "定日县", "CityID": 322, "DisSort": null}, {
        "Id": 2548,
        "DisName": "萨迦县",
        "CityID": 322,
        "DisSort": null
    }, {"Id": 2549, "DisName": "拉孜县", "CityID": 322, "DisSort": null}, {
        "Id": 2550,
        "DisName": "昂仁县",
        "CityID": 322,
        "DisSort": null
    }, {"Id": 2551, "DisName": "谢通门县", "CityID": 322, "DisSort": null}, {
        "Id": 2552,
        "DisName": "白朗县",
        "CityID": 322,
        "DisSort": null
    }, {"Id": 2553, "DisName": "仁布县", "CityID": 322, "DisSort": null}, {
        "Id": 2554,
        "DisName": "康马县",
        "CityID": 322,
        "DisSort": null
    }, {"Id": 2555, "DisName": "定结县", "CityID": 322, "DisSort": null}, {
        "Id": 2556,
        "DisName": "仲巴县",
        "CityID": 322,
        "DisSort": null
    }, {"Id": 2557, "DisName": "亚东县", "CityID": 322, "DisSort": null}, {
        "Id": 2558,
        "DisName": "吉隆县",
        "CityID": 322,
        "DisSort": null
    }, {"Id": 2559, "DisName": "聂拉木县", "CityID": 322, "DisSort": null}, {
        "Id": 2560,
        "DisName": "萨嘎县",
        "CityID": 322,
        "DisSort": null
    }, {"Id": 2561, "DisName": "岗巴县", "CityID": 322, "DisSort": null}, {
        "Id": 2562,
        "DisName": "乃东县",
        "CityID": 323,
        "DisSort": null
    }, {"Id": 2563, "DisName": "扎囊县", "CityID": 323, "DisSort": null}, {
        "Id": 2564,
        "DisName": "贡嘎县",
        "CityID": 323,
        "DisSort": null
    }, {"Id": 2565, "DisName": "桑日县", "CityID": 323, "DisSort": null}, {
        "Id": 2566,
        "DisName": "琼结县",
        "CityID": 323,
        "DisSort": null
    }, {"Id": 2567, "DisName": "曲松县", "CityID": 323, "DisSort": null}, {
        "Id": 2568,
        "DisName": "措美县",
        "CityID": 323,
        "DisSort": null
    }, {"Id": 2569, "DisName": "洛扎县", "CityID": 323, "DisSort": null}, {
        "Id": 2570,
        "DisName": "加查县",
        "CityID": 323,
        "DisSort": null
    }, {"Id": 2571, "DisName": "隆子县", "CityID": 323, "DisSort": null}, {
        "Id": 2572,
        "DisName": "错那县",
        "CityID": 323,
        "DisSort": null
    }, {"Id": 2573, "DisName": "浪卡子县", "CityID": 323, "DisSort": null}, {
        "Id": 2574,
        "DisName": "林芝县",
        "CityID": 324,
        "DisSort": null
    }, {"Id": 2575, "DisName": "工布江达县", "CityID": 324, "DisSort": null}, {
        "Id": 2576,
        "DisName": "米林县",
        "CityID": 324,
        "DisSort": null
    }, {"Id": 2577, "DisName": "墨脱县", "CityID": 324, "DisSort": null}, {
        "Id": 2578,
        "DisName": "波密县",
        "CityID": 324,
        "DisSort": null
    }, {"Id": 2579, "DisName": "察隅县", "CityID": 324, "DisSort": null}, {
        "Id": 2580,
        "DisName": "朗县",
        "CityID": 324,
        "DisSort": null
    }, {"Id": 2581, "DisName": "昌都县", "CityID": 325, "DisSort": null}, {
        "Id": 2582,
        "DisName": "江达县",
        "CityID": 325,
        "DisSort": null
    }, {"Id": 2583, "DisName": "贡觉县", "CityID": 325, "DisSort": null}, {
        "Id": 2584,
        "DisName": "类乌齐县",
        "CityID": 325,
        "DisSort": null
    }, {"Id": 2585, "DisName": "丁青县", "CityID": 325, "DisSort": null}, {
        "Id": 2586,
        "DisName": "察雅县",
        "CityID": 325,
        "DisSort": null
    }, {"Id": 2587, "DisName": "八宿县", "CityID": 325, "DisSort": null}, {
        "Id": 2588,
        "DisName": "左贡县",
        "CityID": 325,
        "DisSort": null
    }, {"Id": 2589, "DisName": "芒康县", "CityID": 325, "DisSort": null}, {
        "Id": 2590,
        "DisName": "洛隆县",
        "CityID": 325,
        "DisSort": null
    }, {"Id": 2591, "DisName": "边坝县", "CityID": 325, "DisSort": null}, {
        "Id": 2592,
        "DisName": "那曲县",
        "CityID": 326,
        "DisSort": null
    }, {"Id": 2593, "DisName": "嘉黎县", "CityID": 326, "DisSort": null}, {
        "Id": 2594,
        "DisName": "比如县",
        "CityID": 326,
        "DisSort": null
    }, {"Id": 2595, "DisName": "聂荣县", "CityID": 326, "DisSort": null}, {
        "Id": 2596,
        "DisName": "安多县",
        "CityID": 326,
        "DisSort": null
    }, {"Id": 2597, "DisName": "申扎县", "CityID": 326, "DisSort": null}, {
        "Id": 2598,
        "DisName": "索县",
        "CityID": 326,
        "DisSort": null
    }, {"Id": 2599, "DisName": "班戈县", "CityID": 326, "DisSort": null}, {
        "Id": 2600,
        "DisName": "巴青县",
        "CityID": 326,
        "DisSort": null
    }, {"Id": 2601, "DisName": "尼玛县", "CityID": 326, "DisSort": null}, {
        "Id": 2602,
        "DisName": "普兰县",
        "CityID": 327,
        "DisSort": null
    }, {"Id": 2603, "DisName": "札达县", "CityID": 327, "DisSort": null}, {
        "Id": 2604,
        "DisName": "噶尔县",
        "CityID": 327,
        "DisSort": null
    }, {"Id": 2605, "DisName": "日土县", "CityID": 327, "DisSort": null}, {
        "Id": 2606,
        "DisName": "革吉县",
        "CityID": 327,
        "DisSort": null
    }, {"Id": 2607, "DisName": "改则县", "CityID": 327, "DisSort": null}, {
        "Id": 2608,
        "DisName": "措勤县",
        "CityID": 327,
        "DisSort": null
    }, {"Id": 2609, "DisName": "兴庆区", "CityID": 328, "DisSort": null}, {
        "Id": 2610,
        "DisName": "西夏区",
        "CityID": 328,
        "DisSort": null
    }, {"Id": 2611, "DisName": "金凤区", "CityID": 328, "DisSort": null}, {
        "Id": 2612,
        "DisName": "永宁县",
        "CityID": 328,
        "DisSort": null
    }, {"Id": 2613, "DisName": "贺兰县", "CityID": 328, "DisSort": null}, {
        "Id": 2614,
        "DisName": "灵武市",
        "CityID": 328,
        "DisSort": null
    }, {"Id": 2615, "DisName": "大武口区", "CityID": 329, "DisSort": null}, {
        "Id": 2616,
        "DisName": "惠农区",
        "CityID": 329,
        "DisSort": null
    }, {"Id": 2617, "DisName": "平罗县", "CityID": 329, "DisSort": null}, {
        "Id": 2618,
        "DisName": "利通区",
        "CityID": 330,
        "DisSort": null
    }, {"Id": 2619, "DisName": "盐池县", "CityID": 330, "DisSort": null}, {
        "Id": 2620,
        "DisName": "同心县",
        "CityID": 330,
        "DisSort": null
    }, {"Id": 2621, "DisName": "青铜峡市", "CityID": 330, "DisSort": null}, {
        "Id": 2622,
        "DisName": "原州区",
        "CityID": 331,
        "DisSort": null
    }, {"Id": 2623, "DisName": "西吉县", "CityID": 331, "DisSort": null}, {
        "Id": 2624,
        "DisName": "隆德县",
        "CityID": 331,
        "DisSort": null
    }, {"Id": 2625, "DisName": "泾源县", "CityID": 331, "DisSort": null}, {
        "Id": 2626,
        "DisName": "彭阳县",
        "CityID": 331,
        "DisSort": null
    }, {"Id": 2627, "DisName": "沙坡头区", "CityID": 332, "DisSort": null}, {
        "Id": 2628,
        "DisName": "中宁县",
        "CityID": 332,
        "DisSort": null
    }, {"Id": 2629, "DisName": "海原县", "CityID": 332, "DisSort": null}, {
        "Id": 2630,
        "DisName": "塔城市",
        "CityID": 333,
        "DisSort": null
    }, {"Id": 2631, "DisName": "乌苏市", "CityID": 333, "DisSort": null}, {
        "Id": 2632,
        "DisName": "额敏县",
        "CityID": 333,
        "DisSort": null
    }, {"Id": 2633, "DisName": "沙湾县", "CityID": 333, "DisSort": null}, {
        "Id": 2634,
        "DisName": "托里县",
        "CityID": 333,
        "DisSort": null
    }, {"Id": 2635, "DisName": "裕民县", "CityID": 333, "DisSort": null}, {
        "Id": 2636,
        "DisName": "和布克赛尔蒙古自治县",
        "CityID": 333,
        "DisSort": null
    }, {"Id": 2637, "DisName": "哈密市", "CityID": 334, "DisSort": null}, {
        "Id": 2638,
        "DisName": "巴里坤哈萨克自治县",
        "CityID": 334,
        "DisSort": null
    }, {"Id": 2639, "DisName": "伊吾县", "CityID": 334, "DisSort": null}, {
        "Id": 2640,
        "DisName": "和田市",
        "CityID": 335,
        "DisSort": null
    }, {"Id": 2641, "DisName": "和田县", "CityID": 335, "DisSort": null}, {
        "Id": 2642,
        "DisName": "墨玉县",
        "CityID": 335,
        "DisSort": null
    }, {"Id": 2643, "DisName": "皮山县", "CityID": 335, "DisSort": null}, {
        "Id": 2644,
        "DisName": "洛浦县",
        "CityID": 335,
        "DisSort": null
    }, {"Id": 2645, "DisName": "策勒县", "CityID": 335, "DisSort": null}, {
        "Id": 2646,
        "DisName": "于田县",
        "CityID": 335,
        "DisSort": null
    }, {"Id": 2647, "DisName": "民丰县", "CityID": 335, "DisSort": null}, {
        "Id": 2648,
        "DisName": "阿勒泰市",
        "CityID": 336,
        "DisSort": null
    }, {"Id": 2649, "DisName": "布尔津县", "CityID": 336, "DisSort": null}, {
        "Id": 2650,
        "DisName": "富蕴县",
        "CityID": 336,
        "DisSort": null
    }, {"Id": 2651, "DisName": "福海县", "CityID": 336, "DisSort": null}, {
        "Id": 2652,
        "DisName": "哈巴河县",
        "CityID": 336,
        "DisSort": null
    }, {"Id": 2653, "DisName": "青河县", "CityID": 336, "DisSort": null}, {
        "Id": 2654,
        "DisName": "吉木乃县",
        "CityID": 336,
        "DisSort": null
    }, {"Id": 2655, "DisName": "阿图什市", "CityID": 337, "DisSort": null}, {
        "Id": 2656,
        "DisName": "阿克陶县",
        "CityID": 337,
        "DisSort": null
    }, {"Id": 2657, "DisName": "阿合奇县", "CityID": 337, "DisSort": null}, {
        "Id": 2658,
        "DisName": "乌恰县",
        "CityID": 337,
        "DisSort": null
    }, {"Id": 2659, "DisName": "博乐市", "CityID": 338, "DisSort": null}, {
        "Id": 2660,
        "DisName": "精河县",
        "CityID": 338,
        "DisSort": null
    }, {"Id": 2661, "DisName": "温泉县", "CityID": 338, "DisSort": null}, {
        "Id": 2662,
        "DisName": "独山子区",
        "CityID": 339,
        "DisSort": null
    }, {"Id": 2663, "DisName": "克拉玛依区", "CityID": 339, "DisSort": null}, {
        "Id": 2664,
        "DisName": "白碱滩区",
        "CityID": 339,
        "DisSort": null
    }, {"Id": 2665, "DisName": "乌尔禾区", "CityID": 339, "DisSort": null}, {
        "Id": 2666,
        "DisName": "天山区",
        "CityID": 340,
        "DisSort": null
    }, {"Id": 2667, "DisName": "沙依巴克区", "CityID": 340, "DisSort": null}, {
        "Id": 2668,
        "DisName": "新市区",
        "CityID": 340,
        "DisSort": null
    }, {"Id": 2669, "DisName": "水磨沟区", "CityID": 340, "DisSort": null}, {
        "Id": 2670,
        "DisName": "头屯河区",
        "CityID": 340,
        "DisSort": null
    }, {"Id": 2671, "DisName": "达坂城区", "CityID": 340, "DisSort": null}, {
        "Id": 2672,
        "DisName": "米东区",
        "CityID": 340,
        "DisSort": null
    }, {"Id": 2673, "DisName": "乌鲁木齐县", "CityID": 340, "DisSort": null}, {
        "Id": 2674,
        "DisName": "昌吉市",
        "CityID": 342,
        "DisSort": null
    }, {"Id": 2675, "DisName": "阜康市", "CityID": 342, "DisSort": null}, {
        "Id": 2676,
        "DisName": "呼图壁县",
        "CityID": 342,
        "DisSort": null
    }, {"Id": 2677, "DisName": "玛纳斯县", "CityID": 342, "DisSort": null}, {
        "Id": 2678,
        "DisName": "奇台县",
        "CityID": 342,
        "DisSort": null
    }, {"Id": 2679, "DisName": "吉木萨尔县", "CityID": 342, "DisSort": null}, {
        "Id": 2680,
        "DisName": "木垒哈萨克自治县",
        "CityID": 342,
        "DisSort": null
    }, {"Id": 2681, "DisName": "吐鲁番市", "CityID": 344, "DisSort": null}, {
        "Id": 2682,
        "DisName": "鄯善县",
        "CityID": 344,
        "DisSort": null
    }, {"Id": 2683, "DisName": "托克逊县", "CityID": 344, "DisSort": null}, {
        "Id": 2684,
        "DisName": "库尔勒市",
        "CityID": 345,
        "DisSort": null
    }, {"Id": 2685, "DisName": "轮台县", "CityID": 345, "DisSort": null}, {
        "Id": 2686,
        "DisName": "尉犁县",
        "CityID": 345,
        "DisSort": null
    }, {"Id": 2687, "DisName": "若羌县", "CityID": 345, "DisSort": null}, {
        "Id": 2688,
        "DisName": "且末县",
        "CityID": 345,
        "DisSort": null
    }, {"Id": 2689, "DisName": "焉耆回族自治县", "CityID": 345, "DisSort": null}, {
        "Id": 2690,
        "DisName": "和静县",
        "CityID": 345,
        "DisSort": null
    }, {"Id": 2691, "DisName": "和硕县", "CityID": 345, "DisSort": null}, {
        "Id": 2692,
        "DisName": "博湖县",
        "CityID": 345,
        "DisSort": null
    }, {"Id": 2693, "DisName": "阿克苏市", "CityID": 346, "DisSort": null}, {
        "Id": 2694,
        "DisName": "温宿县",
        "CityID": 346,
        "DisSort": null
    }, {"Id": 2695, "DisName": "库车县", "CityID": 346, "DisSort": null}, {
        "Id": 2696,
        "DisName": "沙雅县",
        "CityID": 346,
        "DisSort": null
    }, {"Id": 2697, "DisName": "新和县", "CityID": 346, "DisSort": null}, {
        "Id": 2698,
        "DisName": "拜城县",
        "CityID": 346,
        "DisSort": null
    }, {"Id": 2699, "DisName": "乌什县", "CityID": 346, "DisSort": null}, {
        "Id": 2700,
        "DisName": "阿瓦提县",
        "CityID": 346,
        "DisSort": null
    }, {"Id": 2701, "DisName": "柯坪县", "CityID": 346, "DisSort": null}, {
        "Id": 2702,
        "DisName": "喀什市",
        "CityID": 348,
        "DisSort": null
    }, {"Id": 2703, "DisName": "疏附县", "CityID": 348, "DisSort": null}, {
        "Id": 2704,
        "DisName": "疏勒县",
        "CityID": 348,
        "DisSort": null
    }, {"Id": 2705, "DisName": "英吉沙县", "CityID": 348, "DisSort": null}, {
        "Id": 2706,
        "DisName": "泽普县",
        "CityID": 348,
        "DisSort": null
    }, {"Id": 2707, "DisName": "莎车县", "CityID": 348, "DisSort": null}, {
        "Id": 2708,
        "DisName": "叶城县",
        "CityID": 348,
        "DisSort": null
    }, {"Id": 2709, "DisName": "麦盖提县", "CityID": 348, "DisSort": null}, {
        "Id": 2710,
        "DisName": "岳普湖县",
        "CityID": 348,
        "DisSort": null
    }, {"Id": 2711, "DisName": "伽师县", "CityID": 348, "DisSort": null}, {
        "Id": 2712,
        "DisName": "巴楚县",
        "CityID": 348,
        "DisSort": null
    }, {"Id": 2713, "DisName": "塔什库尔干塔吉克自治县", "CityID": 348, "DisSort": null}, {
        "Id": 2714,
        "DisName": "伊宁市",
        "CityID": 350,
        "DisSort": null
    }, {"Id": 2715, "DisName": "奎屯市", "CityID": 350, "DisSort": null}, {
        "Id": 2716,
        "DisName": "伊宁县",
        "CityID": 350,
        "DisSort": null
    }, {"Id": 2717, "DisName": "察布查尔锡伯自治县", "CityID": 350, "DisSort": null}, {
        "Id": 2718,
        "DisName": "霍城县",
        "CityID": 350,
        "DisSort": null
    }, {"Id": 2719, "DisName": "巩留县", "CityID": 350, "DisSort": null}, {
        "Id": 2720,
        "DisName": "新源县",
        "CityID": 350,
        "DisSort": null
    }, {"Id": 2721, "DisName": "昭苏县", "CityID": 350, "DisSort": null}, {
        "Id": 2722,
        "DisName": "特克斯县",
        "CityID": 350,
        "DisSort": null
    }, {"Id": 2723, "DisName": "尼勒克县", "CityID": 350, "DisSort": null}, {
        "Id": 2724,
        "DisName": "海拉尔区",
        "CityID": 351,
        "DisSort": null
    }, {"Id": 2725, "DisName": "阿荣旗", "CityID": 351, "DisSort": null}, {
        "Id": 2726,
        "DisName": "莫力达瓦达斡尔族自治旗",
        "CityID": 351,
        "DisSort": null
    }, {"Id": 2727, "DisName": "鄂伦春自治旗", "CityID": 351, "DisSort": null}, {
        "Id": 2728,
        "DisName": "鄂温克族自治旗",
        "CityID": 351,
        "DisSort": null
    }, {"Id": 2729, "DisName": "陈巴尔虎旗", "CityID": 351, "DisSort": null}, {
        "Id": 2730,
        "DisName": "新巴尔虎左旗",
        "CityID": 351,
        "DisSort": null
    }, {"Id": 2731, "DisName": "新巴尔虎右旗", "CityID": 351, "DisSort": null}, {
        "Id": 2732,
        "DisName": "满洲里市",
        "CityID": 351,
        "DisSort": null
    }, {"Id": 2733, "DisName": "牙克石市", "CityID": 351, "DisSort": null}, {
        "Id": 2734,
        "DisName": "扎兰屯市",
        "CityID": 351,
        "DisSort": null
    }, {"Id": 2735, "DisName": "额尔古纳市", "CityID": 351, "DisSort": null}, {
        "Id": 2736,
        "DisName": "根河市",
        "CityID": 351,
        "DisSort": null
    }, {"Id": 2737, "DisName": "新城区", "CityID": 352, "DisSort": null}, {
        "Id": 2738,
        "DisName": "回民区",
        "CityID": 352,
        "DisSort": null
    }, {"Id": 2739, "DisName": "玉泉区", "CityID": 352, "DisSort": null}, {
        "Id": 2740,
        "DisName": "赛罕区",
        "CityID": 352,
        "DisSort": null
    }, {"Id": 2741, "DisName": "土默特左旗", "CityID": 352, "DisSort": null}, {
        "Id": 2742,
        "DisName": "托克托县",
        "CityID": 352,
        "DisSort": null
    }, {"Id": 2743, "DisName": "和林格尔县", "CityID": 352, "DisSort": null}, {
        "Id": 2744,
        "DisName": "清水河县",
        "CityID": 352,
        "DisSort": null
    }, {"Id": 2745, "DisName": "武川县", "CityID": 352, "DisSort": null}, {
        "Id": 2746,
        "DisName": "东河区",
        "CityID": 353,
        "DisSort": null
    }, {"Id": 2747, "DisName": "昆都仑区", "CityID": 353, "DisSort": null}, {
        "Id": 2748,
        "DisName": "青山区",
        "CityID": 353,
        "DisSort": null
    }, {"Id": 2749, "DisName": "石拐区", "CityID": 353, "DisSort": null}, {
        "Id": 2750,
        "DisName": "白云鄂博矿区",
        "CityID": 353,
        "DisSort": null
    }, {"Id": 2751, "DisName": "九原区", "CityID": 353, "DisSort": null}, {
        "Id": 2752,
        "DisName": "土默特右旗",
        "CityID": 353,
        "DisSort": null
    }, {"Id": 2753, "DisName": "固阳县", "CityID": 353, "DisSort": null}, {
        "Id": 2754,
        "DisName": "达尔罕茂明安联合旗",
        "CityID": 353,
        "DisSort": null
    }, {"Id": 2755, "DisName": "海勃湾区", "CityID": 354, "DisSort": null}, {
        "Id": 2756,
        "DisName": "海南区",
        "CityID": 354,
        "DisSort": null
    }, {"Id": 2757, "DisName": "乌达区", "CityID": 354, "DisSort": null}, {
        "Id": 2758,
        "DisName": "集宁区",
        "CityID": 355,
        "DisSort": null
    }, {"Id": 2759, "DisName": "卓资县", "CityID": 355, "DisSort": null}, {
        "Id": 2760,
        "DisName": "化德县",
        "CityID": 355,
        "DisSort": null
    }, {"Id": 2761, "DisName": "商都县", "CityID": 355, "DisSort": null}, {
        "Id": 2762,
        "DisName": "兴和县",
        "CityID": 355,
        "DisSort": null
    }, {"Id": 2763, "DisName": "凉城县", "CityID": 355, "DisSort": null}, {
        "Id": 2764,
        "DisName": "察哈尔右翼前旗",
        "CityID": 355,
        "DisSort": null
    }, {"Id": 2765, "DisName": "察哈尔右翼中旗", "CityID": 355, "DisSort": null}, {
        "Id": 2766,
        "DisName": "察哈尔右翼后旗",
        "CityID": 355,
        "DisSort": null
    }, {"Id": 2767, "DisName": "四子王旗", "CityID": 355, "DisSort": null}, {
        "Id": 2768,
        "DisName": "丰镇市",
        "CityID": 355,
        "DisSort": null
    }, {"Id": 2769, "DisName": "科尔沁区", "CityID": 356, "DisSort": null}, {
        "Id": 2770,
        "DisName": "科尔沁左翼中旗",
        "CityID": 356,
        "DisSort": null
    }, {"Id": 2771, "DisName": "科尔沁左翼后旗", "CityID": 356, "DisSort": null}, {
        "Id": 2772,
        "DisName": "开鲁县",
        "CityID": 356,
        "DisSort": null
    }, {"Id": 2773, "DisName": "库伦旗", "CityID": 356, "DisSort": null}, {
        "Id": 2774,
        "DisName": "奈曼旗",
        "CityID": 356,
        "DisSort": null
    }, {"Id": 2775, "DisName": "扎鲁特旗", "CityID": 356, "DisSort": null}, {
        "Id": 2776,
        "DisName": "霍林郭勒市",
        "CityID": 356,
        "DisSort": null
    }, {"Id": 2777, "DisName": "红山区", "CityID": 357, "DisSort": null}, {
        "Id": 2778,
        "DisName": "元宝山区",
        "CityID": 357,
        "DisSort": null
    }, {"Id": 2779, "DisName": "松山区", "CityID": 357, "DisSort": null}, {
        "Id": 2780,
        "DisName": "阿鲁科尔沁旗",
        "CityID": 357,
        "DisSort": null
    }, {"Id": 2781, "DisName": "巴林左旗", "CityID": 357, "DisSort": null}, {
        "Id": 2782,
        "DisName": "巴林右旗",
        "CityID": 357,
        "DisSort": null
    }, {"Id": 2783, "DisName": "林西县", "CityID": 357, "DisSort": null}, {
        "Id": 2784,
        "DisName": "克什克腾旗",
        "CityID": 357,
        "DisSort": null
    }, {"Id": 2785, "DisName": "翁牛特旗", "CityID": 357, "DisSort": null}, {
        "Id": 2786,
        "DisName": "喀喇沁旗",
        "CityID": 357,
        "DisSort": null
    }, {"Id": 2787, "DisName": "宁城县", "CityID": 357, "DisSort": null}, {
        "Id": 2788,
        "DisName": "敖汉旗",
        "CityID": 357,
        "DisSort": null
    }, {"Id": 2789, "DisName": "东胜区", "CityID": 358, "DisSort": null}, {
        "Id": 2790,
        "DisName": "达拉特旗",
        "CityID": 358,
        "DisSort": null
    }, {"Id": 2791, "DisName": "准格尔旗", "CityID": 358, "DisSort": null}, {
        "Id": 2792,
        "DisName": "鄂托克前旗",
        "CityID": 358,
        "DisSort": null
    }, {"Id": 2793, "DisName": "鄂托克旗", "CityID": 358, "DisSort": null}, {
        "Id": 2794,
        "DisName": "杭锦旗",
        "CityID": 358,
        "DisSort": null
    }, {"Id": 2795, "DisName": "乌审旗", "CityID": 358, "DisSort": null}, {
        "Id": 2796,
        "DisName": "伊金霍洛旗",
        "CityID": 358,
        "DisSort": null
    }, {"Id": 2797, "DisName": "临河区", "CityID": 359, "DisSort": null}, {
        "Id": 2798,
        "DisName": "五原县",
        "CityID": 359,
        "DisSort": null
    }, {"Id": 2799, "DisName": "磴口县", "CityID": 359, "DisSort": null}, {
        "Id": 2800,
        "DisName": "乌拉特前旗",
        "CityID": 359,
        "DisSort": null
    }, {"Id": 2801, "DisName": "乌拉特中旗", "CityID": 359, "DisSort": null}, {
        "Id": 2802,
        "DisName": "乌拉特后旗",
        "CityID": 359,
        "DisSort": null
    }, {"Id": 2803, "DisName": "杭锦后旗", "CityID": 359, "DisSort": null}, {
        "Id": 2804,
        "DisName": "二连浩特市",
        "CityID": 360,
        "DisSort": null
    }, {"Id": 2805, "DisName": "锡林浩特市", "CityID": 360, "DisSort": null}, {
        "Id": 2806,
        "DisName": "阿巴嘎旗",
        "CityID": 360,
        "DisSort": null
    }, {"Id": 2807, "DisName": "苏尼特左旗", "CityID": 360, "DisSort": null}, {
        "Id": 2808,
        "DisName": "苏尼特右旗",
        "CityID": 360,
        "DisSort": null
    }, {"Id": 2809, "DisName": "东乌珠穆沁旗", "CityID": 360, "DisSort": null}, {
        "Id": 2810,
        "DisName": "西乌珠穆沁旗",
        "CityID": 360,
        "DisSort": null
    }, {"Id": 2811, "DisName": "太仆寺旗", "CityID": 360, "DisSort": null}, {
        "Id": 2812,
        "DisName": "镶黄旗",
        "CityID": 360,
        "DisSort": null
    }, {"Id": 2813, "DisName": "正镶白旗", "CityID": 360, "DisSort": null}, {
        "Id": 2814,
        "DisName": "正蓝旗",
        "CityID": 360,
        "DisSort": null
    }, {"Id": 2815, "DisName": "多伦县", "CityID": 360, "DisSort": null}, {
        "Id": 2816,
        "DisName": "乌兰浩特市",
        "CityID": 361,
        "DisSort": null
    }, {"Id": 2817, "DisName": "阿尔山市", "CityID": 361, "DisSort": null}, {
        "Id": 2818,
        "DisName": "科尔沁右翼前旗",
        "CityID": 361,
        "DisSort": null
    }, {"Id": 2819, "DisName": "科尔沁右翼中旗", "CityID": 361, "DisSort": null}, {
        "Id": 2820,
        "DisName": "扎赉特旗",
        "CityID": 361,
        "DisSort": null
    }, {"Id": 2821, "DisName": "突泉县", "CityID": 361, "DisSort": null}, {
        "Id": 2822,
        "DisName": "阿拉善左旗",
        "CityID": 362,
        "DisSort": null
    }, {"Id": 2823, "DisName": "阿拉善右旗", "CityID": 362, "DisSort": null}, {
        "Id": 2824,
        "DisName": "额济纳旗",
        "CityID": 362,
        "DisSort": null
    }];

    exports.district = district;
});