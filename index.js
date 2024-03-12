const express = require('express');
const app = express();

app.get('/home', (req, res)=>{
    res.send('Hello World!')
});

app.get('/', (req, res)=>{
    res.send('Index!')
});

app.listen(3000)