const BagFood = require('./helpers/bagging')

const serviceContainer = require('./services/index')
const VeggieController = require('./controllers/controller1')
const MeatAndOthersController = require('./controllers/controller2')

const ThirdController = require('./controllers/controller3')

const VeggieControllerHandler = VeggieController(serviceContainer, BagFood)
const MeatAndOthersControllerHandler = MeatAndOthersController(serviceContainer, BagFood)

const ThirdControllerInstance = new ThirdController(serviceContainer, BagFood)

const routeHandlers = (server) => {
    // Endpoint and the corresponding HTTP Verbs definitions
    server.post('/veggies', (request, response) => VeggieControllerHandler.postHandler(request, response ))
    server.post('/meat_and_others', (request, response) => MeatAndOthersControllerHandler.postHandler(request, response ))
    server.post('/seafood', () => {})

    server.get('/veggies', (request, response) => VeggieControllerHandler.getHandler(request, response ))
    server.get('/meat_and_others', (request, response) => MeatAndOthersControllerHandler.postHandler(request, response ))
    server.get('/seafood', () => {})

    return server
}

module.exports = routeHandlers