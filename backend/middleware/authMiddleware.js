 import jwt from 'jsonwebtoken' 

 import asyncHandler from './asyncHandler.js'

 import User from '../models/userModel.js'

 //protect routes

  const  protect = asyncHandler( async (req,res, next)=>
 {
  const authHeader = req.headers.authorization; // Get the Authorization header

 
    const token = authHeader.split(' ')[1];

  
   
    if(token)
    {
        try {
            
     const decoded=  jwt.verify(token, process.env.JWT_SECRET)
     console.log('decoded', decoded);
     
  req.user =await User.findById(decoded.userId).select('-password');
  console.log('user', req.user);
  
   next();
        } catch (error) {
         console.log(error);
         res.status(401);
         throw new Error ('not authorised ,  token failed')
    
        }
    } else
    {
      console.log('tokrn not found');
      
         res.status(401);
         throw new Error ('not aauthorised, no token')
    }
 })

 //admin middleware
 
 const admin= (req,res,next)=>
 {
       if(req.user && req.user.isAdmin){
         next()
       }else{

         res.status(401)
         throw new Error('not authorised as admin ')
       }
 }

 export {protect, admin }