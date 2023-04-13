const express = require('express')
const app = express()
const port = 4000;
app.get('/', (res, req) => {
    req.send('my phns information comming soon')
})
app.listen(port, () => {
    console.log(`my phn server is ${port}`)  
})