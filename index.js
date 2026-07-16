import express from "express"
import dotenv from 'dotenv'
dotenv.config();
const app = express();

const port = process.env.PORT 

app.get("/" , (req,res)=>{
    res.send ("hello backend");
})

app.listen(port ,()=>{              //app.listen ye pore app ko dekhe ga koi chiz a rai hy ya etc.
   console.log(`server is running on port ${port}`);
   
   
})