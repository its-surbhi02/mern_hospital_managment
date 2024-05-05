import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName:"HOSPITAL__MANAGEMENT"
    }).then(()=>{
        console.log("Connected to db")
    }).catch((err)=>{
        console.log(`Some Error Occured while connecting to db: ${err}`);
    });
}