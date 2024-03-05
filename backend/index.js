const express = require('express')
const app = express()
//const port = 4000
const mongoDB = require("./db")
mongoDB();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json());
app.use('/',require("./Routes/CreateUser"));
app.use('/',require("./Routes/DisplayData"));
app.use('/',require("./Routes/OrderData"));


const PORT = process.env.PORT


app.listen(PORT, () => {
  console.log(`Example app listening on port` + PORT)
})
