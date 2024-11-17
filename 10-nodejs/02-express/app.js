require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/' , (req , res)=>{
   res.send('hello server')
})
app.get('/home' , (req , res)=>{
   res.send('<h1>Hello server</h1>')
})
app.get('/api' , (req ,res)=>{
   res.send({
      name: 'nehal',
      port : 4000
   })
})

app.listen(process.env.PORT , ()=>{
   console.log(`example listen on port ${port}`)
})

