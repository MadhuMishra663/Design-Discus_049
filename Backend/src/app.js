const express = require("express")
const cors = require("cors");
const { Dbconnect } = require("./config/DB");
const { UserRouter } = require("./Router/UserRouter");
const cookieParser = require('cookie-parser');
const { AdminRoute, AdminRouter } = require("./Router/AdminRouter");

//const { logger } = require("./logs/log");
require("dotenv").config();


const PORT = process.env.PORT;
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
//User Routers
app.use('/user',UserRouter)
//Admin Router
app.use('/admin',AdminRouter)


app.get("/",(req,res)=>{
    //logger.error('GET request received at /');
    res.json({messege:"from server"})
});

app.listen(PORT,(err)=>{
    if (err) {
        console.log(err);
    } else {
        try {
            Dbconnect(process.env.DB_URL)
            console.log(`server is running at port http://localhost:${PORT}`)
        } catch (error) {
            console.log(error)
        }
    }
})