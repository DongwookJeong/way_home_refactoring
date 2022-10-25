const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res)=>{
  const path = url.parse(req.url, true).pathname
  if(req.method === 'get'){
    if(path === '/about'){
      res.writeHead(200,{'content-type':'text/html'})
      fs.readFile(__dirname + 'about.html', (err, data)=>{
        if (err){
          return console.error(err)
        }
        res.end(data, 'utf-8')
      })
    } else if (path === '/'){
      res.writeHead(200,{'content-type':'text/html'})
      fs.readFile(__dirname + 'main.html', (err, data)=>{
        if (err){
          return console.error(err)
        }
        res.end(data, 'utf-8')
      })
    } else {
      res.statusCode = 404
      res.end('주소없음')
    }
  }
  // return req
  // .on('error', (err)=>{
  //   console.log(err)
  // })
  // .on('data', (data)=>{
  //   console.log(data)
  // })
  // .on('end', ()=>{
  //   res.on('error', (err)=>{
  //     console.log(err)
  //   })
  //   res.statusCode = 200;
  //     res.setHeader('Content-type', 'text/plain')
    
  //     res.write('hi\n')
  //     res.end('the end')
  // })
}).listen(4554)
