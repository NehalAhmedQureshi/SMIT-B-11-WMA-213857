import express from 'express'

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
   res.send({
      status : 200,
      message : 'hello from server'})
})
app.get('/addtocart',(req,res)=>{
   res.status(200).send({
      name:'nehal'
   })
})
app.post('/addtocart',(req,res)=>{

   console.log(req.body)
   res.status(200).send(req.body)

})

console.log('chl rh hu');
app.listen(8000 , ()=>{
   console.log(`chl rh hu 8000 port p`)
})