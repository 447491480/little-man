const captcha = require('../../../utils/captcha');
// 生成器
module.exports = {
    // 生成验证码
    get_captcha: function (req, res) {
        let img = captcha.makeCapcha(110, 40);
        req.session.captcha = img.str;
        res.send(img.getFileData());
    }
};