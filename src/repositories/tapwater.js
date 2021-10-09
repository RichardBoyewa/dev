const WaterModel = require('../models/tapwater')
const TapWaterRepository = () => {

    const getWater = () => {
        // Dig well, break tank.....
        // just return water
        const water = new waterModel()
        // Fetch the water / data
        water.color = 'black'
        return water
    }
}

module.exports = TapWaterRepository()