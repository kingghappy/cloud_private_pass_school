import Token from "../models/token.js";


const allService = async () => {
    return await Token.find()
}

const findService = async (ref_user) => {
    return await Token.findOne({ ref_user })
}

const deleteService = async (ref_user) => {
    return await Token.findOneAndDelete({ ref_user })
}


export {
    allService,
    findService,
    deleteService
}

