import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB=()=>{
    console.log('Wait, connecting to database...')
    
    mongoose.connect(
        process.env.CONNECTIONSTRING
    ).then(()=>console.log('MongoDB Atlas Connected!')).catch((error)=>console.log(error))
}

export default connectDB