const express = require('express');
const app = express();
const connectDB = require('./src/database/db')
const userRoute = require('./src/routes/user.route')
const port = 3000

connectDB()
app.use(express.json())
app.use('/',userRoute)

app.listen(port, ()=>console.log(`Servidor aberto na porta: ${port}`))
 