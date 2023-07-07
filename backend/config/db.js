import mongoose from "mongoose";

const connectDB = async ()=>
{
 try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log('MONGO DB CONNECTED');
    
 } catch (error) {
    console.log(error.message);
    
 }


}
export default connectDB