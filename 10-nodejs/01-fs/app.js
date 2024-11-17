const  fs = require('fs') 
const  http =require('http')
const url = require('url')

const port = 8000
const server = http.createServer((req , res) => {
   console.log("🚀 ~ server ~ req:", req.url)
   switch (req.url) {
      case '/home':
         return(
            res.end('hello from /home server')
         );
         case  '/about' : 
         return(
            res.end('hello from /about server')
         );
      default:
         res.end('hello')
   }
}
)
server.listen(port , '0.0.0.0' , (err,data)=>{
   console.log(`listening to request on server ${port}`)
   if(err) throw err
})
