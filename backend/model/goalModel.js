const mongoose =require('mongoose')

const goalSchema=mongoose.Schema({
    ownerName:{
        type:String
        ,required:true,
        ref:"User"
    }
    ,restaurentName:{type:String,required:true}
    ,location:{type:String,required:true}
  
    ,pin:{type:String,required:true},
    phone:{type:String,required:true}
    ,email:{type:String,required:true}
})

module.exports=mongoose.model('restaurent',goalSchema)