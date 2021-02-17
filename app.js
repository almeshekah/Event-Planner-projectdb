const express = require("express");
const app = express();
const eventsRoutes = require("./routes/events")
const db = require("./db/models");


app.use(express.json());
app.use("/event",eventsRoutes );

app.use((req,res,next )=>{
    next({
        status:404,
        message:"Path Not Found",
    });

});

app.use((err,req,res,next)=>{
    res
        .status(err.status ?? 500)
        .json({message: err.message ?? "Internal Server Error "});
});


//db.sequelize.sync();
db.sequelize.sync({alter:true});
app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });