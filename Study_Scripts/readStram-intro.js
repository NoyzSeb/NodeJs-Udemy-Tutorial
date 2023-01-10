const {createReadStream} = require("fs")

const stream = createReadStream(__dirname+"/content/big-file.txt")

stream.on('data', (result) => {
    console.log(result)
})

stream.on("error", (error)=>{
    console.log(error);
})