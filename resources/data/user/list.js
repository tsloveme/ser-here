
var successReturn = {
    success:true,
    data:[
        {userid:1, username:'cts', gender:'M', job:'front end'},
        {userid:2, username:'lili', gender:'F', job:'dancer'}
    ]
};

var errorReturn = {
    success:false,
    replyText:"服务器异常~",
    data:null
};


module.exports = {
    successReturn,  //请求成功的返回数据 - 必填
    errorReturn,    //模拟失败返回的数据 - 非必填
    rate:1,         //不填默认为1，1为 100%成功返回 0.5为50% 成功率
    delay:2000      //不填默认为0，延时返回
}
