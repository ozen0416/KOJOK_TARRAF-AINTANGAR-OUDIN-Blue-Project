const express = require('express')
const router = express.Router()
const controller = require("../controller/bouffe")

router.get('/bouffe', controller.getData)
router.get('/bouffe/:id', controller.getDatabyId)

module.exports = router