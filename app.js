const express = require('express')
const createError = require('http-errors')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
let models = require('./models');

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/user')

const app = express()

// setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// middleware
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404))
})

// module.exports = app

return models.sequelize.sync().then(result => {
  app.listen(8000, () => console.log('server is running on PORT: 8000'))
})
