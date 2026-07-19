import mongoose from "mongoose"


export const connectDb = async ()=>{
    const url = process.env.DATABASE_URL 
    console.log("url==>",url);
    
try {
    const res = await mongoose.connect(url)
   console.log("database connected");
   

} catch (error) {
    console.log(error);
    
}
}