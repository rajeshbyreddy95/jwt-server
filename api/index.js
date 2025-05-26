const express = require('express')
const app = express()
const port = 6060
const cors = require('cors')

app.use(express())
app.use(cors())

app.get('/',(req,res)=>{
    res.json({"message":"server running"})
})

app.listen(port, ()=> console.log('server running under port ', port))

module.exports = app