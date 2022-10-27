const http = require('http')
const fs = require('fs')
const server = http.createServer()

server.on('request', doRequest)
server.listen(7378)
console.log('server running')
function doRequest(req, res){
    // let number = Math.floor(Math.random()*3)
    fs.readFile('hello.html', 'utf-8', 
      function(err, data){

        // let title = ["pageA", "pageB", "pageC"]
        // let content = ["this is sample.", "another content", "last content"]
        // let data2 = data.
        //   replace(/@title@/g, title[number]).
        //   replace(/@content@/g, content[number])
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
      })
      // fs.readFile('./hello.css', 
      // function(err, data){
      //   // if(err)console.log(err)
      //   res.writeHead(200, {'Content-Type': 'text/css'})
      //   res.write(data)
      //   res.end()
      // })
    }



    // -----------실패-------------------
    // const server = http.createServer(function(req, res){
    //   fs.readFile('./hello.html', function(error, data){
    //     res.writeHead(200, {'Content-Type':'text/html'})
    //     res.end(data)
    //   }).listen(7378, function(){console.log('Server Start')})
    // })
    // -----------실패-------------------