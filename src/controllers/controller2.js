
const MeatAndOthersController = (serviceContainer, BagFood) => {
    // Whenever we receive a POST action request to the /veggie endpoint
    const postHandler = (request, response) => {
        // Validations and data clean up
        const result = serviceContainer.Chef1Service.prepareEgusi(request.body)
        /**
         * {
                brand: 'Our Food',
                message: 'Thanks',
                item: result
            }
         */
        return BagFood(result)
    }

    // Whenever we receive a GET action request to the /veggie endpoint
    const getHandler = (request, response) => {
        // Validations and data clean up
    }

    return {
        postHandler, getHandler
    }
}

module.exports = MeatAndOthersController