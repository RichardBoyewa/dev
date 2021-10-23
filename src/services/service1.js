const tapWaterRepository = require('../repositories/tapwater')
const oilRepository = require('../repositories/oil')

const Chef1Service = () => {
    const prepareEgusi = (requestData) => {
        const water = tapWaterRepository.getWater()
        /**
         * return {
            drumName: 'drumA',
            Content: tapWater
        }
         */
        const oil = oilRepository.getOil()

        const food = startCooking(water.Content)
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