const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.end('EDN')
})

module.exports = routes