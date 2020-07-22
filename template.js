const fs = require('fs')
const http = require('http')
const template = require('art-template')
const serve = http.createServer((req,res)=>{
    console.log('启动成功...')
})
serve.on('request',(req,res)=>{
    res.setHeader('content-type','text/html')
    if(req.url === '/'){
        res.stausCode = 200
        let dataHtml = fs.readFileSync('./template.html').toString()
        let dirObj = fs.readdirSync('./')
        let disSize = []
        let disTime = []
        dirObj.forEach((item)=>{
            let stat = fs.statSync('./'+item)
            disSize.push(stat.size)
            disTime.push(stat.mtime)
        })
        let stringHtml = template.render(dataHtml,{
            title:'模板',
            dirObj,
            disSize,
            disTime
        })
        res.end(stringHtml)
    }else{
        res.statusCode = 404
        res.end('404')
    }
})
serve.listen(9888)