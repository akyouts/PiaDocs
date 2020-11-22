const mongoose = require('mongoose')
const schema = mongoose.Schema

const paitentData = new schema({
    fristname : {type:String, required:true},
    lastname : {type:String, required:true},
    age : {type:Number, required:true},
    weight : {type:Number, required:true},
    height : {type:Number},
    address : {type:String, required:true},
    email : {type:String},
    areaCode : {type:Number, required:true},
    phone: {type: Number, required:true},
    sex : {type:String, required:true},
    comments : {type:String}

})

module.exports = mongoose.model('paitentData', paitentData)
