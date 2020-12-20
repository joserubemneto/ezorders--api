class OrderController {
  index(request, response) {
    response.send('Index')
  }

  store(request, response) {
    response.send('Store')
  }

  update(request, response) {
    response.send('Update')
  }
}

module.exports = new OrderController()
