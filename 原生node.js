const fs = require('fs')
const http = require('http')
const url = require('url')
let port = process.argv[2] //将启动Node.js时的命令行参数变成数组
if(!port){
    console.log('请写端口号')
}

let server = http.createServer((request,response)=>{    //创建一个服务器
    let parsedURL = url.parse(request.url,true)      //对服务器路径进行解析
    let queryString //查询参数
    if(request.url.indexOf('?') !== -1){
      queryString  =  request.url.substring(request.url.indexOf('?'))
    }
    let path = parsedURL.pathname
    let query = parsedURL.query
    let method = request.method

//从下面开始写路由
























































})
server.listen(port)
console.log(`监听+${port}+成功`)