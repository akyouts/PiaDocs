const mongoose = require('mongoose')


const schema = mongoose.Schema

const paitentImages = new schema({
    paitentid : {type:String, required:true},
    imageComment : {type:String, required:true},
    imagename: {type:String,required}
})

module.exports = mongoose.model('paitentImages', paitentImages)
