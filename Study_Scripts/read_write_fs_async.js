const {readFile, writeFile} = require("fs")

readFile(__dirname+"/content/first.txt", "utf8", (err,result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile(__dirname+"/content/second.txt", "utf8", (err,result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile( __dirname+"/content/result.txt", 
                "This is the result txt file.: \nExtras : " + first,(err,result) => {
                if(err){
                   console.log(err);
                   return
                }
                console.log(result);
            } 
        )
        }
    )
    }
    
)



