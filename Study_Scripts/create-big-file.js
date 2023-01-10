const {writeFileSync} = require("fs")

for (i=0; i<1000; i++){
    writeFileSync(__dirname+"/content/big-file.txt", "hello world\n", {flag:"a"})
}