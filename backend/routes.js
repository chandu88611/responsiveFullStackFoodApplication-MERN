const express=require("express")
const router=express.Router();
const {getGoals,setGoal,putGoals,deleteGoals}=require('./controllers/controller')


router.get("/",getGoals)
router.post("/post",setGoal) 
router.put("/:id",putGoals)
router.delete("/delete:id ",deleteGoals)

// router.route('/post').post(setGoal)
// router.route('/get').get(getGoals)
// router.route('/:id').delete(deleteGoals).put(putGoals)
module.exports=router