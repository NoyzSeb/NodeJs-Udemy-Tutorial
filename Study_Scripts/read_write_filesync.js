//we can also call the all fs module but this way is work more optimized.
const {readFileSync, writeFileSync} = require("fs")


//reads the directed file.
const first = readFileSync(__dirname+"/content/first.txt", "utf8")
console.log(first);

const second = readFileSync(__dirname+"/content/second.txt", "utf8")
console.log(second);

//This function create and rewrite the file in directed path.
writeFileSync(__dirname+"/content/result.txt", 
"This is the result txt file.: \nExtras : " + first
) 

