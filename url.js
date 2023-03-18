const url = require('url');
const http = require('http');

http.createServer((req,res)=>{
    console.log(req.url);

    const urlobjeject =url.parse(req.url);
    console.log(urlobjeject)
}).listen(8085);

