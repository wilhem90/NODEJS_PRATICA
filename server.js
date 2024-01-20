const express = require("express");
const app = express();
const porta = 8080;

const { router } = require("./router");
    app.use('/', router)

    app.listen(porta, () => {
        console.log(`Meu servidor esta rodando! http://localhost:${porta}/message`);
    })
