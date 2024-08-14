
import mongoose from "mongoose";
import { app } from "./app.js";

const url = "mongodb://localhost:27017/bookstore"
const port = 8000

mongoose.connect(url, {}).then(()=>{
    console.log("DATABASE IS CONNECTED")
    app.listen(port, () => {
        console.log("Server is running at port : ",port);
    })
}).catch((error)=>{
    console.log("DATABASE CONNECTION FAILED!! ",error);
    
})
