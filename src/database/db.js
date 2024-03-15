const mongoose = require('mongoose')
require('dotenv').config()

const connectDB=()=>{
    console.log('Wait, connecting to database...')
    
    mongoose.connect(
        process.env.CONNECTIONSTRING
    ).then(()=>console.log('MongoDB Atlas Connected!')).catch((error)=>console.log(error))
}

module.exports=connectDB