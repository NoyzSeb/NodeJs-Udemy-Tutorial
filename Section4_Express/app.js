const http = require("http")

const server = http.createServer((req,res)=>{
    const url = req.url
    if (url == "/"){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write("<h1>Welcome to Berk's web page. (TITLE) </h1>")
        res.end("Welcome to Berk's web page.")
    }else if (url == "/about"){
        res.write("<h1>Welcome to Berk's web page. (TITLE) </h1>")
        res.end("About page.")
    }else{
        res.write("<h1>404 NOT FOUND</h1>")
        res.end()
    }
    
})

server.listen(5000)