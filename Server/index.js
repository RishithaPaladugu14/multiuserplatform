const express = require("express");
const cors = require("cors");
const Signup = require("../Server/models/signup")
const UserRoute = require("../Server/Routes/userRoutes")
const mongoose = require("mongoose")

const app = express();
mongoose.connect("mongodb://localhost:27017")
.then(()=>console.log("mongodb connection sucessfully"))
.catch((error) => console.log(error));


app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Hello world");
});
app.use("/user",UserRoute)

app.listen(3000,()=>{
    console.log("Server is running")
});