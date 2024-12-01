// * express use to handle efficiently http requests
import express from 'express'
// * dot env is use to access environment variables using "process.env.variable"
import "dotenv/config"
// * morgan is just like phuppo req kab ai kaha se ai kis time ai kis chez ki ai
import morgan from 'morgan'
//  * fs allow to read and write files as known as file system
import fs from 'fs'

let data = []
// * here is an environment variable from .env file
const PORT = process.env.PORT

const app = express()
// * this helps to read req data
app.use(express.json())
// * this is just like a security guard who check all req and add a time on this request
app.use((req,res,next)=>{
   req.body.configDate = new Date().toISOString()
   next()
})
// app.use(morgan('combined'))

app.post("/post",(req,res)=>{
   console.log(req.body, 'request se body ai hy');
   data.push(req.body)
   res.send(data)
   // ! here an fs file system write a file
   fs.writeFileSync("./data.txt",`Name : ${req.body.name} 
Father Name : ${req.body.fatherName}`)
})

app.get('/',(req,res)=>{
   res.status(200).send({
      status:200,
      name:'nehal',
      data
   })
})

app.listen(PORT , ()=>{
   console.log(`server running on port ${PORT}`);
})
