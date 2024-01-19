const express = require("express")
const app = express()
const rotas = require("./router")
const porta = 8080

    app.use('/', rotas)
    app.listen(porta, () => {
        console.log(`Meu servidor esta rodando! http://localhost:${porta}/message`);
    })




    