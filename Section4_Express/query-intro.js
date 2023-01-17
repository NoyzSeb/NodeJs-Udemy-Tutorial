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
    const singleProduct = products.find((product)=> product.id = Number(Id))
    if (!singleProduct){
        res.status(404).send("This Product Does Not Exist")
    }
    res.json(singleProduct)

})

app.get('/api/v1/query', (req,res)=>{
    const {search , limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts<1){
        return res.status(200).json({sucess: true, data:[]})
    }
    res.status(200).json(sortedProducts)
})
    


app.listen(5000)