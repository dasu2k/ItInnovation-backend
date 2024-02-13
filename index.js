const express = require('express')

const app = express();

app.listen(6969);

app.get("/",(req,res)=>{
    res.json("backend is working");
})


