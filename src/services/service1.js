const tapWaterRepository = require('../repositories/tapwater')
const oilRepository = require('../repositories/oil')

const Chef1Service = () => {
    const prepareEgusi = (requestData) => {
        const water = tapWaterRepository.getWater()
        const oil = oilRepository.getOil()

        const food = startCooking(water)
        return food + oil
    }
    const startCooking = (water) => {
        const food = water * water
        return food
    }
    return {
        prepareEgusi
    }
}

module.exports = Chef1Service