const Order=require('../model/ordeModel')

const asyncHandler=require("express-async-handler")




const setOrder=asyncHandler(async(req,res)=>{
    
    const {
      firstName,lastName,address,city,country,landMark,pincode,foodName

    }=req.body;
    if(!req.body){
        res.status(400).json({message:'please enter text'})
        res.status(400)
        throw new Error("please enter text")
    }

    // try{
    //     existingUser=await Restaurent.findOne({email})
    // }catch(err){
    // console.log(err)
    // }
    // if(existingUser){
    // return res.status(400).json({message:"user already exist:login instead"})
    // }

const order= await new Order({   
       firstName,lastName,address,city,country,landMark,pincode,foodName

})
try {
    await order.save()
} catch (error) {
    console.log(error)
}

    // res.status(200).json({message:"set goal"})

    res.status(200).json({order})
    console.log(order)
})


const getOrders=asyncHandler(async (req,res)=>{
    const orders= await Order.find()
        // res.status(200).json({message:"get chandan"})
        
        res.status(200).json(orders)
    })


  const deleteOrders= async (req,res,next)=>{
        const Id=req.params.id;
        let order;
        try {
            order=await Order.findByIdAndRemove(Id)
        } catch (error) {
            return console.log(error)
        }
       if(!order){
      return res.status(404).json({message:"unable to delete"})
       }
       return  res.status(200).json({message:"succesully deleted"})
    }

    const updateOrders=async (req,res,next)=>{

        const {
            firstName,lastName,address,city,country,landMark,pincode,foodName
      
          }=req.body;
        const Id=req.params.id;
        let updatedOrder;
        try {
             updatedOrder=await Order.findByIdAndUpdate(Id,{
                
            firstName,lastName,address,city,country,landMark,pincode,foodName
             })
        } catch (error) {
            return console.log(error)
        }
        if(!updatedOrder){
            return res.status(500).json({message:"Unable to  update the order"})
        }
        return res.status(200).json({updatedOrder})
    }
module.exports={setOrder,getOrders,deleteOrders,updateOrders}