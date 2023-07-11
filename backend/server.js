
import express from 'express' // for this we need to add type:'module' in package.json, just instead of 'require'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/db.js'
connectDB()

import { notFound,errorHandler } from './middleware/errorMiddleware.js'
const app = express()

const port =process.env.PORT || 5000
import cors from 'cors'
app.use(cors());




import productRoutes from './routes/productRoutes.js'

app.get('/',(req,res)=>
{
res.send('api is running')
})

app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>console.log(`server is running on ${port} `))