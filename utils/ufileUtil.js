/**
 * Created by chang on 2017/2/17.
 */
/**
 * Created by zlongxiao@126.com on 2016/4/13.
 */
var request = require('request');
var fs = require('fs');
var crypto = require('crypto');
var utf8 = require('utf8');
var uuidV1 = require('uuid/v1');

var UCloudPublicKey = "7WDb72kZd7R7WczUzzcoASG/ACkVECbGAj1NPpTXfSQzwUrFApCASg==";
var UCloudPrivateKey = "b82ad13233fe3a7c174d34c3a1d416355a87258b";
var HTTPVerb = "POST";
var ContentMD5 = "";

var MyDate = "";
var CanonicalizedUCloudHeaders = "";
var bucket = "qiaqiavip";


function Base64(content) {
    return new Buffer(content).toString('base64');
}

function HmacSha1(secretKey, content) {
    var hmac = crypto.createHmac('sha1', secretKey);
    hmac.update(content);
    return hmac.digest();
}

/**
 * 单文件上传，暂时不支持多文件
 * @param fileObj
 * @param res
 */
function upload(fileObj, res) {
    var key = uuidV1().replace(/-/ig, '');
    var ContentType = fileObj.type;
    var temp_path = fileObj.path;
    var CanonicalizedResource = "/" + bucket + "/" + key;
    var StringToSign = HTTPVerb + "\n" + ContentMD5 + "\n" + ContentType + "\n" + MyDate + "\n" +
        CanonicalizedUCloudHeaders + CanonicalizedResource;

    var Signature = Base64(HmacSha1(UCloudPrivateKey, utf8.encode(StringToSign)));
    var Authorization = "UCloud" + " " + UCloudPublicKey + ":" + Signature;

    var fileName = temp_path.substring(temp_path.lastIndexOf("\\") + 1).substring(temp_path.lastIndexOf("\/") + 1);
    var formData = {
        Authorization: Authorization,
        FileName: key,
        file: {
            value: fs.createReadStream(temp_path),
            options: {
                filename: fileName
            }
        }
    };

    var urlstr = 'http://' + bucket + '.ufile.ucloud.com.cn/';
    //cdn 跳转地址
    request.head = ({'Content-Type': 'application/octet-stream'});
    request.post({url: urlstr, formData: formData}).on('response', function (response) {
        if (response.statusCode == 200) {
            var cdnUrl = urlstr + key;

            var data = {src:cdnUrl,title:fileName};
            var ret = {code:0,data:data,msg:'上传成功'};

            res.json(ret);

        }else{
            console.log("statusCode is not 200, code:>>" + response.statusCode + ">>statusMessage:>>" + response.statusMessage);
            var ret = {code:1,msg:'上传失败'};

            res.json(ret);
        }
    }).on("error", function(e){
        console.log("this is upload error");
        console.log("e:>>" + e);
        var ret = {code:1,msg:'上传失败'};

        res.json(ret);
    });
}

exports.upload = upload;