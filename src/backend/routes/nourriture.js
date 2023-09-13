const express = require('express')
const router = express.Router()
const controller = require("../controller/bouffe")

router.get('/', controller.getData)
router.get('/:id', controller.getDatabyId)

module.exports = router