const http = require('http');
const server = http.createServer((req,res)=>[
    res.writeHead(200,{'content-type': 'text.html'}),
    res.write('<h1>hello anna back with same rocking performancecs </h1>'),
    res.write('<h1>hello anna back with same rocking performancecs </h1>'),
    res.write('<h1>hello anna back with same rocking performancecs </h1>'),
    res.end()
    
])

server.listen(9898);