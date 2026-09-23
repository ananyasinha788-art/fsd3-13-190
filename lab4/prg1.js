import express from 'express'


const app = express()

//
app.get("/",(req,res)=>{
    res.send("<h1>HELLO EXPRESS</h1>")
})


//always listen at last
app.listen(3333,()=>console.log('prg1 is running at 3333'));