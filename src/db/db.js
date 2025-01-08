import { DB_NAME } from '../constants.js';
import mongoose from 'mongoose'

const connectDB = async () => {
    try{
            const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log("mongo connected");
            
        }catch (error){
            console.error("ERROR: ", error)
            process.exit(1)
        }
}
export default connectDB;