const express = require('express');
const controller = require('./controller')
const middleware = require('./middleware')
const app = express();


// Middleware para permitir solicitações de qualquer origem
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});



app.get("/", (req, res) =>{
    console.log("main")
    res.send("inicial")
})

app.get("/usuarios/buscar?", controller.buscarUsuario);

app.get("/usuarios/criar?", middleware.validarNovoUsuario, controller.criarUsuario);


app.listen(3001, ()=>{
    console.log("runiing port 3001")
})