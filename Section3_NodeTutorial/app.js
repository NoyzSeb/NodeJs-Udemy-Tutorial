const http = require("http")
const fs = require("fs")


const server = http.createServer((req,res)=>{
    const fileStreamRead = fs.createReadStream(__dirname+"/content/big-file.txt", "utf8")
    fileStreamRead.on('open', ()=>{
        fileStreamRead.pipe(res)
    })
    fileStreamRead.on('error', (err)=>{
        res.end(err)
    })
})

server.listen(3000)