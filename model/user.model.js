import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new Schema ({

// name:String,
// email:String,
// age:Number,
// roll:Number,
// isActive:Boolean,
// createdAt:new Date().String(),


// for multiple types i will create a object 

name:{
    type:String,
    required:[true,"name is required"]
},
email:{
   type:String,
   required:true,
   unique:true
},
password:{
    type:String,
    required:true,
}
},{timestamps:true})   //timestamps is liye ke jab user bane wo kis time bna time ke liye 

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
});



const User = mongoose.model("User", userSchema)

export {User}