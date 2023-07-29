import asyncHandler from "../middleware/asyncHandler.js"

import Product from "../models/productModel.js"


//@desc    Fetch all products
//route    GET /api/products
//@access  Public


const getProducts= asyncHandler(async( req,res)=>
{
    const products = await Product.find({})
    
res.json(products)
})


const getProductById= asyncHandler(async (req,res)=>
{
   // const product = products.find((each)=> each._id=== req.params.id)

const product= await Product.findById(req.params.id)

if(product)
{
  return  res.json(product)
}
// res.status(404).json({message:'product not found'})
else{
    res.status(404)
    throw new Error ('Resourse not found ')
}
})
export {getProducts, getProductById}