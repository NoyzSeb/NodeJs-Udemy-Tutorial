const express=require("express")
const app= express()

const { products, people }=require("./data")

app.get('/', (req,res)=>{
    res.send('<h1> Home Page </h1> <a href="/products" > products </a> ')
})

app.get('/products',(req,res)=>{
    const newProducts= products.map((product)=>{
        const {id, name,image} = product;
        return {id, name, image}
    })
    res.json(newProducts)

})
app.get('/products/:Id',(req,res)=>{
    const {Id} = req.params; 
    console.log(req.params);
    const singleProduct= products.find((product)=> product.id == Number(Id))
    if (!singleProduct){
        res.status(404).send("This Product Does Not Exist")
    }
    res.json(singleProduct)

})
    


app.listen(5000)