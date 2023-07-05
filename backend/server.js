
import express from 'express' // for this we need to add type:'module' in package.json, just instead of 'require'
import products from './data/products.js' // since we use es module we use .js
import dotenv from 'dotenv'
dotenv.config()
const port =process.env.PORT || 5000
import cors from 'cors'
const app = express()
app.use(cors());
app.get('/',(req,res)=>
{
res.send('api is running')
})

app.get('/api/products',(req,res)=>
{
res.json(products)
})

app.get('/api/products/:id',(req,res)=>
{
const product = products.find((each)=> each._id=== req.params.id)
res.json(product)
})
app.listen(port, ()=>console.log(`server is running on ${port} `))