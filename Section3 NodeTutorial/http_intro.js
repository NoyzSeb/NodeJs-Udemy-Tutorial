const http = require("http");

const server = http.createServer((req, res) => {
    //We are using "return" because javascript only allows one respond per request.
    if(req.url == "/"){
        res.end("This is home page.")
        return        
    }
    if(req.url == "/about"){
        res.end("This is about page.")
        return               
    }
    
    res.end(
        ` <h1>Ooops!</h1>
        <p>we can't seem to find the page you are looking for</p>
        <a href="/"> back home</a> `
     )
                      
    
})

server.listen(3000)