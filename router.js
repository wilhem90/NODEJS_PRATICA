const express = require("express")
const router = express.Router()

router.get('/message', (req, res) => {
    res.statusCodev = 200
    res.send("Hello World!")
})

module.exports = {
    router
}