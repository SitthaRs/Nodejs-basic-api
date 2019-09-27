const express = require('express')
const user = require('./user')

const router = new express.Router()

router
    .route("/")
    .get(async (req, res) => {
        try {
            res.status(201).send("Hello world")
        } catch (e) {
            res.status(400).send(e)
        }
    })

module.exports = {router, user}