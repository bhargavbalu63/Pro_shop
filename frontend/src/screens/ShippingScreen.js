

import {React, useState } from 'react'
import {Button, Form, FormLabel} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveShippingAddress } from '../slices/cartSlice'
import FormContainer  from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
const ShippingScreen = () => {

    const cart= useSelector((state)=>state.cart)
    const {shippingAddress}= cart


    const [address, setAddress]= useState(shippingAddress?.address ||'')
    const [city, setCity]= useState(shippingAddress?.city ||'')
    const [ postalCode, setPostalCode]= useState(shippingAddress?.postalCode ||'')
    const [country, setCountry]= useState(shippingAddress?.country ||'')

    const navigate= useNavigate()
    const dispatch= useDispatch()



 const submitHandler=(e)=>
 {
   e.preventDefault()
   dispatch(saveShippingAddress({address, city,postalCode, country}))
   navigate('/payment')
 }
  return (
  <FormContainer>

    <CheckoutSteps step1  />
 <h1>  Shipping</h1>


        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address' className='my-2'>

                <FormLabel>Address</FormLabel>

                <Form.Control
                type='text'
                placeholder='Enter Address'
                value={address}
                onChange={(e)=> setAddress(e.target.value)}>
                </Form.Control>

            </Form.Group>


            <Form.Group controlId='city' className='my-2'>
                <FormLabel>City</FormLabel>
                <Form.Control
                type='text'
                placeholder='Enter city'
                value={city}
                onChange={(e)=> setCity(e.target.value)}>


                </Form.Control>

                

            </Form.Group>

            
            <Form.Group controlId='postalcode' className='my-2'>
                <FormLabel>Postal Code</FormLabel>

                <Form.Control
                type='text'
                placeholder='Enter Postal Code'
                value={postalCode}
                onChange={(e)=> setPostalCode(e.target.value)}>


                </Form.Control>

            </Form.Group>

            <Form.Group controlId='country' className='my-2'>
                <FormLabel>Country</FormLabel>

                <Form.Control
                type='text'
                placeholder='Enter Country'
                value={country}
                onChange={(e)=> setCountry(e.target.value)}>


                </Form.Control>

            </Form.Group>

            <Button type='submit' variant='primary' className='my-2'>
                Continue
            </Button>
            

        </Form>

    
  </FormContainer>
  )
}

export default ShippingScreen