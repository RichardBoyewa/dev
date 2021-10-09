
// Service department
const Chef1Service = require('./service1')
const FryingChef1Service = require('./service2')
const ContainerService = () => {

    return {
        Chef1Service: Chef1Service(),
        FryingChef1Service: FryingChef1Service(),
    }
}

module.exports = ContainerService