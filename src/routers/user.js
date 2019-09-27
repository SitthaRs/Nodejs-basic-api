const express = require('express')
const router = new express.Router()
const sysMsUserController = require('../controllers/sysMsUserController')

router
    .route("/sysMsUser")
    .get(sysMsUserController.index)
    .post(sysMsUserController.save)

module.exports = router