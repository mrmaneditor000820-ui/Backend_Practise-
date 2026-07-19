import {User} from "../model/user.model.js";
import bcrypt from "bcrypt";


export const admin =  async (req, res) => {

      console.log("Request Received");
    console.log(req.body);

    try {
        
        const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.status(400).send({  status: 400, message: "all fields are required" })
    }
    //  const hashedPassword = await bcrypt.hash(password,10)   //10 is liye ke password ko hash karne ke liye 10 rounds karne hy


    const user = await User.create({
        name,
        email,
        password
    })
    console.log(user);

   return res.status(201).send({ status: 201, data:user,  message: "user created successfully"})
    

    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 500, message: "internal server error" })
    }
 }