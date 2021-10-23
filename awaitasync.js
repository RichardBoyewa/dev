const setDate = async (username, date) => {
    const user = await UserModel.findOne({username: username});
    if (!user) {
        throw new Error('Cannot perform this request')
    }

    let newDate = new UserAvailabilityModel({
        date: date,
        userId: user._id
    });
    await newDate.save()
    return newDate
}

/*
const setDate = async (username, date) => {
    const user = await UserModel.findOne({username: username});
    if (!user) {
        throw new Error('Cannot perform this request')
    }

    let newDate = new UserAvailabilityModel({
        date: date,
        userId: user._id
    });
    await newDate.save()
    return 'Free date set successfully';
}

const setExpiredDate = async (username, date) => {
    const user = await UserModel.findOne({username: username});
    if (!user) {
        throw new Error('Cannot perform this request')
    }

    let newDate = new UserAvailabilityModel({
        date: date,
        userId: user._id
    });
    await newDate.save()
    return 'Free expired date set successfully';
}

*/





// Controller GET /set/free/date
(async (res) => {

try {
    const d = await dummyService.setDate()
    res.write('Free date set successfully');
} catch (error) {
    // here
}








})()