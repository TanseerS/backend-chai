import dotenv from 'dotenv'
import connectDB from './db/db.js';
dotenv.config({path: './env'})
import {app} from './app.js'


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongo connection falied" , err);
    
}) 