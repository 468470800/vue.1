module.exports = {
    publicPath:"./",
    devServer:{
        port:8888,//设置端口号
        https:false,//不开启https协议
        host:"localhost",
        open:true
    },
    lintOnSave:false,//关闭eslint
    productionSourceMap:false//打包时不生成.Map文件
}