const mongoose = require("mongoose" )

async function connectDB (){
     await mongoose.connect("mongodb+srv://mrmaneditor000820_db_user:Rehman1985@backendfirstproject.etixrxf.mongodb.net/backend-3-withdatabase")

     console.log("Connected DB");
     
}