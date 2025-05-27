const express = require('express')
const app = express()
const port = 6060
const cors = require('cors')
const connectDB = require('../mongodb/db')
const authRoutes = require('../mongodb/routes/authRoutes')


app.use(express())
app.use(cors())

connectDB()

app.get('/',(req,res)=>{
    res.json({"message":"server running"})
})

app.use('/api', authRoutes)

app.listen(port, ()=> console.log('server running under port ', port))

module.exports = app