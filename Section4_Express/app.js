const express=require("express")
const app= express()
const {logger, authorize} = require("./middleware")

app.use(logger)

//access with ?user=john
app.use('/api',authorize)
    
app.get('/', (req,res)=>{
    res.write('<h1>Home </h1> <a href="/api/products"> Products Page </a>')
    res.write('<a href="/about"> About Page </a>')
    res.send()
})
app.get('/about', (req,res)=>{
    res.write('<h1>About</h1> <a href="/"> Home Page </a>')
    res.write('<a href="/api/products"> Products Page </a>')
    res.send()
})

app.get('/api/products', (req,res)=>{
    res.write('<h1>Products</h1> <a href="/"> Home Page </a>')
    res.write('<a href="/about"> About Page </a>')
    res.send()
})

app.listen(5000)