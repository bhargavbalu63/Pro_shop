import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from 'axios'
const Homescreen = () => {

const [products, setProducts]= useState([])

useEffect(()=>
  {
const fetchProducts=  async()=>
{
 const {data} = await axios.get('http://localhost:8000/api/products') // here we are destructuring the data from the response.

  console.log(data);
  
 setProducts(data)
}

fetchProducts()
  },[])

  return (
    <>
<h1> Latest Products</h1>
<Row>
    {products.map(
        (product, index)=>
        (
            
        <Col key={index} sm={12} md={4} lg={6} xl={3}>
           <Product product={product} />
        </Col>
        
    )
    )}
</Row>

    </>
  )
}

export default Homescreen