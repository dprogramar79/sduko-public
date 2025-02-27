const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db') 
const router = require('./routes')


const app = express()
// app.use(cors({
//     origin : process.env.FRONTEND_URL, 
//     methods:["GET","POST","PUT","DELETE"],
//     credentials : true
// }))
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/api",router) 

const PORT = 8080 || process.env.PORT
connectDB();
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });
  

// connectDB().then(()=>{
//     app.listen(PORT,()=>{
//         console.log("connnect to DB")
//         console.log("Server is running "+ PORT)
//     })
// })
