const express = require('express')
const landing = require('../controllers/landing')

const routes = express.Router()

routes.get('/', landing.get_landing)
routes.post('/', landing.submit_lead)

module.exports = routes