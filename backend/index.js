const express = require('express')
const app = express()
//const port = 4000
const mongoDB = require("./db")
mongoDB();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://lovely-vacherin-6a1458.netlify.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
//https://65ec13ac91843170b1d5e457--lovely-vacherin-6a1458.netlify.app

app.use(express.json());
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));


const PORT = process.env.PORT


app.listen(PORT, () => {
  console.log(`Example app listening on port` + PORT)
})
