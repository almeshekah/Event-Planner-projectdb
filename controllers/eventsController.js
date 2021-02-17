const {Event}=require("../db/models");


exports.fetchEvent=async(eventId , next)=>{
    try{
        const foundEvent = await Event.findByPk(eventId);
        return foundEvent;
    }catch(error){
        next(error);
    }
};


exports.eventList=( async(req , res ,next)=>{
    try{
        const _events=await Event.findAll({
            attributes:  ["id","name","image"],

        });
        res.json(_events);
    }catch(error){
        next(error);
    }

    
});


exports.eventDetail=( async (req,res)=>{
   
    res.json(req.event);
     
});



exports.eventCreate=( async (req,res,next)=>{
    try{
        const newEvent = await Event.bulkCreate(req.body);
        res.status(201).json(newEvent);
    }catch(error){
        next(error);
    }
});

exports.eventDelete=( async(req, res , next )=>{
    try{
        await req.event.destroy();
        res.status(204).end();
       
    }catch(error){
        next(error);
    }
});

exports.eventUpdate=( async(req, res,next )=>{
    try{
        await req.event.update(req.body);
        res.status(204).end();
    }catch(error){
    }
});