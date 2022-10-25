const http = require('http')
const fs = require('fs')
const server = http.createServer()

server.on('request', doRequest)
server.listen(7378)
console.log('server running')
function doRequest(req, res){
fs.readFile('./hello.html', 'utf-8', function(err, data){
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(data)
  res.end()
})
}