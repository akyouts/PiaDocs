const express = require('express')
const app = express()

const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/piadocs',{useNewUrlParser: true, useUnifiedTopology: true});


app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))



app.set('views', path.join(__dirname,'/resoureses/views'))

app.set('view engine','ejs')

require('./routes/web')(app)






app.listen(3000, ()=>{
    console.log("Listing on port 3000")
})


