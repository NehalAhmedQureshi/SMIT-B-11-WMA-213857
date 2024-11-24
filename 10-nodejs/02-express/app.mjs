import express from "express";
const app = express()
const port = 9000

app.get('/' ,(req , res)=>{
   console.log(req);
   
   res.send('nehal')
} )

app.listen(port , ()=>{
   console.log(`server running on port ${port}`);
})