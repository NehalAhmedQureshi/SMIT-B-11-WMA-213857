import express from 'express'
const app = express()
const port = 8000
const trip = []

npm.use(express.json())
app.get("/", (req, res) => {
   res.status(200).json({
      status:200,
      info:{
         guide:'ask me! what you want'
      }
   })
})
app.get("/home", (req, res) => {
   res.status(200).json({
      status:200,
      name:{
         username : 'nehal',
         fatherName:'waseem',
      },
      data:trip
   })
})
app.post('/home' , (req,res)=>{
   console.log(req.body , 'data a gaya');
   trip.push(req.body)
   res.send('data post ho gaya')
   
})
app.listen(port, () => {
   console.log(`server running on port ${port}`);
})
