/**
 * 1.自动路由假数据一：严格的.json文件
 * 假数据文件: '/data/user/admin.json'
 * 响应的请求: '/api/user/admin'
 * 响应的内容：'json文件的内容'
 * 
 * 2.自动路由假数据二：js文件
 * 假数据文件: '/data/user/list.js' 
 * 响应的请求: '/api/user/list'
 * 响应的内容：'js文件解析的内容'
 */
var fs = require('fs');
var path = require("path");
module.exports = function(baseDir) {
   return function(req, res, next){
        var reqPath = req.path;
        var reqBaseUrl = req.baseUrl;
        var reqFullPath = reqBaseUrl + reqPath;
        var reqDelay = req.body.delay || req.query.delay || 0;//延迟时间
        reqDelay = parseInt(reqDelay);
        
        var suffix = "";
        var mockData;

        var jsFilePath = path.join(baseDir, './data' + reqPath + '.js')
        if(fs.existsSync(jsFilePath)){
            delete require.cache[jsFilePath];
            mockData = require(jsFilePath);
            suffix = '.js';
        }

        var jsonFilePath = path.join(baseDir, './data' + reqPath + '.json');
        if(fs.existsSync(jsonFilePath)){
            delete require.cache[jsonFilePath];
            mockData = require(jsonFilePath);
            suffix = '.json';
        }
        if(suffix === '.js'){
            var delay = mockData.delay || 0;
            var returnData;
            if (mockData.rate === undefined){
                mockData.rate = 1;
            }
            if(mockData.rate > 1-Math.random()){
                returnData = mockData.successReturn;
            }else{
                returnData = mockData.errorReturn;
            }
            //延迟返回数据
            setTimeout(function(){
                res.send(returnData);
                res.end();
            }, reqDelay ? reqDelay : delay);
        }
        if(suffix === '.json'){
            //延迟返回数据
            setTimeout(function(){
                res.send(mockData);
                res.end();
            }, reqDelay);
        }
        if(suffix) return;
        res.send({
            success:false,
            replyText:"没有找到假数据接口,请检查相关文件",
        });
        res.end();
    }
}
