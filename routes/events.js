const express= require("express");

const router = express.Router();
const {
    eventList,
    eventDelete,
    eventUpdate,
    eventCreate,
    eventDetail,
    fetchEvent,

}=require("../controllers/eventsController");

router.param("eventId" , async (req , res , next , eventId )=>{
    const foundevent = await fetchEvent(eventId, next);
        if(foundevent){
            req.event=foundevent;
            next();
        }else{
           next({
                status:404,
                message:"event not found",
            });
        }
});

router.get("/" , eventList);

router.get("/:eventId" , eventDetail);

router.delete("/:eventId", eventDelete);

router.put("/:eventId",eventUpdate);

router.post("/", eventCreate);


module.exports=router;