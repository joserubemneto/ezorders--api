const Order = require('../models/Order')

class OrderController {
  async index(request, response) {
    const orders = await Order.find()

    response.json(orders)
  }

  async store(request, response) {
    const { table, description } = request.body

    if (!table || !description) return response.sendStatus(400)

    const order = await Order.create({ table, description })

    response.json(order)
  }

  async update(request, response) {
    try {
      const { id } = request.params
      const { status } = request.body

      if (!status) return response.sendStatus(400)

      const order = await Order.findByIdAndUpdate(
        { _id: id },
        { status },
        { new: true, runValidators: true }
      )

      response.json(order)
    }
    catch(err){
      response.sendStatus(500)
    }
  }
}

module.exports = new OrderController()
