
import express from 'express' // for this we need to add type:'module' in package.json, just instead of 'require'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/db.js'
connectDB()

import { notFound,errorHandler } from './middleware/errorMiddleware.js'
const app = express()

//body parser middleware
app.use(express.json())
 app.use(express.urlencoded({extended:true}))

 //cookie parser middleware
 app.use(cookieParser())
 
const port =process.env.PORT || 5000
import cors from 'cors'
app.use(cors());




import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


app.get('/',(req,res)=>
{
res.send('api is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)


app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>console.log(`server is running on ${port} `))