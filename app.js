// basic express
const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config()

// routes
const routes = require('./routes')
const twitterRoutes = require('./routes/twitter')
const sportdbRoutes = require('./routes/sportdb')
const ufcRoutes = require('./routes/ufc')
const footballRoutes = require('./routes/football')

// mongodb and mongoose
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/sportify8",{useNewUrlParser:true})
const db = mongoose.connection
db.once('open',function(){
    console.log('mongo connected')
})

//cors
app.use(cors())

//parser
app.use(express.urlencoded({extended : false}))
app.use(express.json())

//path
app.use('/',routes)
app.use('/twitter',twitterRoutes)
app.use('/sportdb',sportdbRoutes)
app.use('/ufc',ufcRoutes)
app.use('/football',footballRoutes)

//port
const port = 3000
app.listen(port,function(){
    console.log('listening on port',port)
})