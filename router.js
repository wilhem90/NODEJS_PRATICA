const express = require("express")
const router = express.Router()
const axios = require("axios")

router.get('/message', (req, res) => {
    res.statusCode = 200
    res.send("Hello World!")
})


// rota para receber um arquivo JSON
router.get('/usuario', async(req, res) => {
    try {
        const  response = await axios.get("https://jsonplaceholder.typicode.com/todos/")
        if (!response.status === 200) {
            res.send("Algumas coisas estão erradas!")
        }
        const dados = response.data
        res.json(dados) 
    } catch (error) {
        res.statusCode = 504
        res.send("Problems server!")
    }
})


router.get('/youtube', async(req, res) => {
    try {
        const response = await axios.get('https://cdn.xsportbox.com/webplayer.php?t=ifr&c=2315174&lang=en&eid=187946203&lid=2315174&ci=851&si=1&ask=1705705200&noplayer=0')
        const dados = response.data
        res.json(dados)
    } catch (error) {
        console.log(error);
    }
})
router.get('*', (req, res) => {
    res.statusCode = 404
    res.send("Pagina não encontrada!")
})
module.exports = {
    router
}