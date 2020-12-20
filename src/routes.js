const { Router} = require('express')

const router = Router()

const OrderController = require('./controllers/OrderController')

router.get('/orders', OrderController.index)
router.post('/orders', OrderController.store)
router.patch('/orders/:id/status', OrderController.update)

module.exports = router
