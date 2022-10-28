const mongoose =require('mongoose')

const orderSchema=mongoose.Schema({
    firstName:{
        type:String
        ,required:true
    }
    ,lastName:{type:String,required:true}
    ,address:{type:String,required:true}
  
    ,landMark:{type:String,required:true}
    ,city:{type:String,required:true}
    ,
    country:{type:String,required:true},
    pincode:{type:String,required:true},    foodName:{type:String,required:true}

})

module.exports=mongoose.model('order',orderSchema)