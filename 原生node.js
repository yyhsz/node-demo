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


if (path === '/main.js') {
    let string = fs.readFileSync('./main.js', 'utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path ==='/default.css'){
    let string = fs.readFileSync('./default.css','utf8')
    response.statusCode = 200
    response.setHeader('Content-Type','text/css;charset=utf8')
    response.write(string)
    response.end()
  }
  
  else if (path === '/xxx') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.setHeader('Access-Control-Allow-Origin', 'http://frank.com:8001')
    response.write(`
    hhhhhhhhhhh
    `)
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
      {
        "error": "not found"
      }
    `)
    response.end()
  }
})
server.listen(port)
console.log(`监听+${port}+成功`)