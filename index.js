import express from 'express'
import connectDB from './src/database/db.js'
import userRoute from './src/routes/user.route.js'

const port = 3000
const app = express();

connectDB()
app.use(express.json())
app.use('/user',userRoute)

app.listen(port, ()=>console.log(`Servidor aberto na porta: ${port}`))
 