
//server ko create karna 

const express = require('express')

const app = express()
app.use(express.json())

const notes = []
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"notes created successfull"
    })
})

app.get('/notes',(req,res)=>{
    message:"notes fatched successfully"
    notes:notes
})

module.exports = app;