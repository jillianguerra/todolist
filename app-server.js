const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

// middleware
app.use(express.json()) //req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img', 'calicokitty.png')))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/todos', require('./routes/api/todos'))

module.exports = app