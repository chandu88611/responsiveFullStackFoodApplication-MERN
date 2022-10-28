const express=require("express")
const router=express.Router();
const {setOrder,getOrders,deleteOrders,updateOrders}=require('./controllers/orderController')


router.get("/",getOrders)
router.delete("/:id",deleteOrders)
router.post("/order",setOrder) 
router.put("/:id",updateOrders)
// router.delete("/delete:id ",deleteGoals)

// router.route('/post').post(setGoal)
// router.route('/get').get(getGoals)
// router.route('/:id').delete(deleteGoals).put(putGoals)
module.exports=router