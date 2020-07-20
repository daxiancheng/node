const http = require('http')
const qs = require('querystring');
const serve = http.createServer()
serve.listen('9888')
let responseStr
serve.on('request',(request,response)=>{
    console.log('执行')
    const url = request.url
    const query = url.substr(url.indexOf('?')+1)
    const parme = qs.parse(query)
    response.statusCode = 200
    response.setHeader("Content-type","application/json");
    if(url === '/'){
        responseStr = '首页'
    }else if(url.indexOf('/login')>-1){
        responseStr = '登录'
        console.log(parme)
    }else{
        responseStr = '你在说啥？'
    }
    console.log(responseStr)
    response.end(responseStr)
})
