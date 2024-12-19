const express = require('express')
const index = require('../controllers/index')

const routes = express.Router()

routes.get('/', index.index)

module.exports = routes