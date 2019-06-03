const proxy = require('http-proxy-middleware') //导入模块

module.exports = function(app){
    app.use(proxy('/maoyan',{
        target:'http://m.maoyan.com', 
        secure: false,
        changeOrigin: true,  
        pathRewrite:{
            "^/maoyan": "/"   //清除标识符
        }
      
    }))
}