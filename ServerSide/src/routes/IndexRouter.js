const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/IndexController')

router.get('/', IndexController.index)

router.post('/', IndexController.index)

router.get('/q', IndexController.q)

router.get('/detail/:id', IndexController.detail)

module.exports = router