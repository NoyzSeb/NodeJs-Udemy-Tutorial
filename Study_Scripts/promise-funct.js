const {readFile,writeFile} = require('fs').promises
/*const util = require("util")
const readFilePromise= util.promisify(readFile)
const writeFilePromise= util.promisify(writeFile)*/




const start = async() => {
    try {
       const first = await readFile(`${__dirname}/content/first.txt`, 'utf8') 
       const second = await readFile(`${__dirname}/content/second.txt`, 'utf8')
       await writeFile(`${__dirname}/content/result2.txt`, `THIS IS AVESOME`)
       console.log(first,'\n',second)
    }catch (error) {
        console.log(error);
     }
}

start()

// The commented lines are alternative codes of same task.
/*xxxxxxxx*/

// if we delete "promises" form require('fs'), the following code will work.
const getText = (path) => {
    return new Promise ((resolve, reject) => {
        readFile(path , 'utf8', (err,data)=> {
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}



getText(__dirname+'/content/first.txt')
.then((result)=>console.log(result))
.catch((err)=>console.log(err))

