

import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col,ListGroup, Image, Form, Button, Card, Toast } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice'
import animation from '../assets/animation.gif'
const OrderScreen = () => {
    const { id: orderId} =useParams()
    const  { data:order, refetch, isLoading, error} = useGetOrderDetailsQuery(orderId)
   
    return   isLoading ?  <Loader /> : error ? <Message variant='danger' />
  :(
    <>
    <h1>
      Order id: {order._id}
    </h1>

    <Row>
      <Col md={8}>
        <ListGroup variant='flush'>
      <ListGroup.Item>
        <h2>Shipping to: </h2>
        <p>
          <strong>Name : </strong> { order.user.name}
        </p>
        <p>
        <strong>Email : </strong> { order.user.email}
        </p>

        <p>
          <strong>Address : </strong> {order.shippingAddress.address}, {order.shippingAddress.city}
          {order.shippingAddress.postalCode},{order.shippingAddress.country}
        </p>

        {order.isDelivered ? (
          <Message  variant='success'>
          Delivered on { order.deliveredAt}
          </Message>
        ):(
          <Message variant='success' >Order is ready to dispatch. You can relax!!</Message>
        )}
      </ListGroup.Item>


      <ListGroup.Item>
     
        <h2>Payment Method</h2>
        <p>
          <strong>
            Method :
          </strong> {order.paymentMethod}
        </p>
        {order.isPaid ? (
          <Message  variant='success'>
          Paid on { order.paidAt}
          </Message>
        ):(
          <Message variant='danger' >Not Paid</Message>
        )}
      </ListGroup.Item>


      <ListGroup.Item>
      <h2>Order Items</h2>
      {order.orderItems.map((item, index)=>(
        <ListGroup.Item key={index}>
      <Row>
        <Col md={1}>
        <Image src={item.image} alt={item.name}  fluid rounded/>
        </Col>

        <Col>
      <Link  to={`/product/${item.product}`}>
        {item.name}
        </Link>
        </Col>

        <Col md={4}>
          {item.qty} x ${item.price}=${ item.qty * item.price}
        </Col>
      </Row>
        </ListGroup.Item>
      ))}
      </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={4}>
        <Card>
       <ListGroup variant='flush'>
        <ListGroup.Item>
          <h2>
            Order Summary
          </h2>

        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col>Items</Col>
            <Col>${order.itemPrice}</Col>
          </Row>

          <Row>
            <Col>Shipping</Col>
            <Col>${order.shippingPrice}</Col>
          </Row>

          <Row>
            <Col>Tax</Col>
            <Col>${order.taxPrice}</Col>
          </Row>

          <Row>
            <Col>Total</Col>
            <Col>${order.totalPrice}</Col>
          </Row>
          <Message variant='success' ><b>Your order successfully placed</b></Message>
          <ListGroup.Item style={{border:'none', margin:'auto'}} >
            <Image  src={animation} />
          
          </ListGroup.Item>
        </ListGroup.Item>

         
 {/* PA ORDER PLACEHOLDER */} {/* MARK AS DELIVER PLACEHOLDER */}
       </ListGroup>
        </Card>
      </Col>
    </Row>
    </>
  )

  return (
    <div>OrderScreen</div>
  )
}

export default OrderScreen