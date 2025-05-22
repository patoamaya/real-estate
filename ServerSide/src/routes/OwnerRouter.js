const express = require('express')
const router = express.Router()
const OwnerController = require('../controllers/OwnerController')
const upload = require('../middleware/Storage')


router.get('/', OwnerController.index)

router.get('/detail/:id', OwnerController.detail)

router.post('/post', upload.array('imagenes', 10), OwnerController.post)

router.patch('/update/:id', upload.array('imagenes', 10), OwnerController.update)

router.get('/delete/:id', OwnerController.delete)

module.exports = router