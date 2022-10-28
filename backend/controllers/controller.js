//@desc getGoals
//@route  /api
//@access private
const asyncHandler=require("express-async-handler")
const Restaurent=require('../model/goalModel')

const getGoals=asyncHandler(async (req,res)=>{
    const goals= await Restaurent.find()
        // res.status(200).json({message:"get chandan"})
        
        res.status(200).json(goals)
    })
//@desc setGoals
//@route  /api/post
//@access private


const setGoal=asyncHandler(async(req,res)=>{
    
    const {
        ownerName,
        restaurentName,
        location, 
        pin,
        email,
        phone
    }=req.body;
    if(!req.body){
        res.status(400).json({message:'please enter text'})
        res.status(400)
        throw new Error("please enter text")
    }

    try{
        existingUser=await Restaurent.findOne({email})
    }catch(err){
    console.log(err)
    }
    if(existingUser){
    return res.status(400).json({message:"user already exist:login instead"})
    }

const goal= await new Restaurent({
    restaurentName,location,pin,ownerName,email,phone
})
try {
    await goal.save()
} catch (error) {
    console.log(error)
}

    // res.status(200).json({message:"set goal"})

    res.status(200).json({goal})
    console.log(goal)
})
    //@desc getGoals
//@route  /api/:id
//@access private


const putGoals=asyncHandler(async(req,res)=>{

    const goal=await Restaurent.findById(req.params.id)
if(!goal){
    res.status(400)
throw new Error("Goal not found")
}

const  updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})

res.status(200).json(updatedGoal)
console.log(updatedGoal)
    // res.status(200).json({message:`update gols ${req.params.id}`})
})


//@desc deleteGoals
//@route  /api/delete/:id
//@access private

const deleteGoals=asyncHandler(async(req,res)=>{

    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
    throw new Error("Goal not found")
    }
    
    await goal.remove()
    // const  deletedGoal=await Goal.findByIdAndDelete(req.params.id,req.body)
    
    // res.status(200).json(deletedGoal)
    // console.log(deletedGoal)
    res.status(200).json(req.params.id)
})




    module.exports={getGoals,setGoal,putGoals,deleteGoals}