const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on("response", (name, id)=>{
    console.log(`data received from ${name}, id ${id}`);
})

customEmitter.on("response2", ()=>{
    console.log("data received");
})

//The "emit" method will call the Emitter if the included eventName is match with Emitter's eventName.
customEmitter.emit("response", "Noyz",25)