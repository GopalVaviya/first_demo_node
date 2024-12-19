const express = require('express')
const landing = require('../controllers/landing')

const routes = express.Router()

routes.get('/', landing.get_landing)

module.exports = routes