const express = require('express')
const app = express()
const port = 6060


app.use(express())

app.get('/',(req,res)=>{
    res.json({"message":"server running"})
})

app.listen(port, ()=> console.log('server running under port ', port))

module.exports = app