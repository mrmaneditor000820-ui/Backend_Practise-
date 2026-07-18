import express from "express"
import dotenv from 'dotenv'
import morgan from "morgan";
dotenv.config();
const app = express();
app.use(morgan())
app.use(express.json())

const port = process.env.PORT 

app.get("/" , (req,res)=>{
    res.send ("hello backend");
})


// const data = [
//     {
//         name:"abdurehman",
//         age:30
//     },
//     {
//         name:"abdurehman 2",
//         age:30
//     },
//     {
//         name:"abdurehman 3",
//         age:30
//     }
// ]

app.get("/data" , (req,res)=>{
    res.send (data);
})

const data = [];
app.post("/post-data",(req,res)=>{
    data.push(req.body)
    res.send({data:req.body,message:"dataposted"},)
    console.log(req.body);
    
})


app.listen(port ,()=>{              //app.listen ye pore app ko dekhe ga koi chiz a rai hy ya etc.
   console.log(`server is running on port ${port}`);
   
   
})