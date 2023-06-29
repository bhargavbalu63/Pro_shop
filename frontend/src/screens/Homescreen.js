import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
const Homescreen = () => {
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