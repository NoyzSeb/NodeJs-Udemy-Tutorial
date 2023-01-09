const os = require("os");

//current user's info
console.log(os.userInfo())

const currentOS = {
 osName: os.type(),
 release: os.release(),
 totalMem: os.totalmem(),
 uptime: os.uptime()

}

console.log(currentOS)