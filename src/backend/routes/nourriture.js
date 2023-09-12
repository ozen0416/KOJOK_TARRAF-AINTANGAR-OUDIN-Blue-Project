const express = require('express')
const router = express.Router()
const controller = require("../controller/bouffe")

router.get('/bouffe', controller.getData)

module.exports = router