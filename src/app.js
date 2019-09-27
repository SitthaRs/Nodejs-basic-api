const express = require('express')
require('./db/mongoose')
const routes = require ('./routers/index')

const app = express()

app.use(express.json())

Object.keys(routes).map(
    (k) => app.use(routes[k])
)

module.exports = app