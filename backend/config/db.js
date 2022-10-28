const mongoose=require('mongoose')
 
const MONGO_URL="mongodb+srv://chandanas88:Chandu12345678@cluster0.srxfmuh.mongodb.net/?retryWrites=true&w=majority"
const connectDb=async()=>{
    try {
        await mongoose.connect(MONGO_URL).then(()=>console.log('connected')) 
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDb