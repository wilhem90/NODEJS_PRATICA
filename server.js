const express = require("express")
const app = express()

const porta = 8080

app.get('/message', (req, res) => {
    res.statusCode = 200
    res.send("Hello World!")
})

app.listen(porta, () => {
    console.log(`Meu servidor esta rodando! http://localhost:${porta}`);
})