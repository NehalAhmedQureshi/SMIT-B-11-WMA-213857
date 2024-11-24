import express from 'express'
const app = express()
const port = 8000

app.get("/", (req, res) => {
   res.send("hello ask me what you want!")
})
app.get("/home", (req, res) => {
   res.send("hello you are in home!")
})
app.listen(port, () => {
   console.log(`server running on port ${port}`);
})
