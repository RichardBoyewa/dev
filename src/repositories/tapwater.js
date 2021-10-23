const WaterModel = require('../models/tapwater')
const TapWaterRepository = () => {

    const getWater = (id) => {
        // Dig well, break tank.....
        // just return water
        if(Date.now() > '2021-08-30') {
            const firebaseWaterSource = await _getWaterFromOcean(id)
            return {
                drumName: 'drumA',
                Content: firebaseWaterSource.waterBody
            }
        }else {
            const mongoWaterSource = await WaterModel.findOne(id)
            return {
                drumName: 'drumA',
                Content: mongoWaterSource.water
            }
        }
    }

    const _getWaterFromOcean = async(name) => {
        return new Promise((resolve, reject) => {
            /**
             * return {
                    waterBody,
                    sand,
                    seaShell
                }
             */
            fetch('/remote/data/source', {}, (data) => {
                resolve(data)
            })
        })
    }
}

module.exports = TapWaterRepository()