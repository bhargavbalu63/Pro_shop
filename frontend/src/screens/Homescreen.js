import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import { useEffect, useState } from 'react'
import Product from '../components/Product'
// import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useGetProductsQuery } from '../slices/productApiSlice'
const Homescreen = () => {


// const [products, setProducts]= useState([])

// useEffect(()=>
//   {
// const fetchProducts=  async()=>
// {
//  const {data} = await axios.get('http://localhost:8000/api/products') // here we are destructuring the data from the response.

//   console.log(data);
  
//  setProducts(data)
// }

// fetchProducts()
//   },[])

const {data:products, isLoading, error} =useGetProductsQuery()

console.log(products);

  return (
    <>

 
{isLoading?(
 <Loader />
):    error?(
<Message variant='danger'>
{error?.data?.message||error.error }
</Message>):

(
  <>
  <h1> Latest Products</h1>
  <Row>
      {products.map(
          (product)=>
          (
              
          <Col key={product._id} sm={12} md={4} lg={6} xl={3}>
             <Product product={product} />
          </Col>
          
      )
      )}
  </Row>
</>)}



    </>
)
}

export default Homescreen