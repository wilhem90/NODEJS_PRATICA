const express = require("express")
const app = express()

const porta = 8080

function ServidorSimple(message) {
    // rota message
    app.get('/message', (req, res) => {
        res.statusCode = 200
        res.send(message)
    })

    // rota para receber um arquivo JSON
    app.get('/jsonArquivos', (req, res) => {
        res.statusCode(200)
        res.send(
            {
                id: 1,
                balance: 1805,
                tipoMoeda: "BRL",
                nome: "Wilhem Wundt",
                sobrenome: "Maxime",
                idade: 34,
                pais: "Brasil",
                estadoCivil: "Solteiro",
                escolaridade: "Superior Imcompleto",
            }
        )
    })
    
    app.listen(porta, () => {
        console.log(`Meu servidor esta rodando! http://localhost:${porta}/message`);
    })
}

ServidorSimple("Hello World! <br><br>Aqui esta meu primeiro servidor rodando!")