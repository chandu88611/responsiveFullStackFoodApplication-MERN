const express =require ("express")
const cors=require('cors')
// const dotenv=require('dotenv').config()
// const colors=require('colors')
const{errorHandler}=require("./middleware/erroeMiddleware")
const port=5000;
const app=express();
app.use(cors())
const connectDb=require('./config/db')
connectDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/restaurents",require("./routes"))

app.use("/api/orders",require("./orderRoute"))
app.use("/api",require("./userRoute"))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`app listening at port
    ${port}`)
})