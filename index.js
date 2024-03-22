const express = require('express');

const app = express();

const array = ["smdirr0", 'derfd']

app.get("/", (req, res) =>{
    console.log("main")
    res.send(array)
})

app.get("/id", (req, res) =>{
    const id = req.query.id;

    console.log(id);
    res.send(id)
})

app.listen(3001, ()=>{
    console.log("runiing")
})