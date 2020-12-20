const { Router} = require('express')

const router = Router()


router.get('/orders')
router.post('/orders')
router.patch('/orders/:id/status')

module.exports = router
