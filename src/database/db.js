const mongoose = require('mongoose')

const connectDB=()=>{
    console.log('Wait, connecting to database...')
    
    mongoose.connect(
    'mongodb+srv://igorv02004:2jh8JZ8CZkAgglbM@cluster0.t5d9o4v.mongodb.net/?retryWrites=true&w=majority'
    ).then(()=>console.log('MongoDB Atlas Connected!')).catch((error)=>console.log(error))
}

module.exports=connectDB