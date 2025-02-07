const http = require("http");

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/'){
      res.writeHead(200,{'Content-Type':'Text/plain'})
      res.end("Hello this is home page")
    }else if(url === '/projects'){
      res.writeHead(200,{'Content-Type':'Text/plain'})
      res.end("Hello this is home projects page")
    }else{
      res.writeHead(404,{'Content-Type':'Text/plain'})
      res.end("Page cannot be found")
    }
})

const port = 3000;
server.listen(port,()=>{
    console.log("Server is ready");
})