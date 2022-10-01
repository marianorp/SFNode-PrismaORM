const User = require("../database/User")


const getAllUsers = () => {
    const allUsers = User.getAllUsers()
    return allUsers
}

const getOneUser = (id) => {
    const oneUser = User.getOneUser(id)
    return oneUser
}

const createNewUser = (newUser) => {
    const createUser = User.createNewUser(newUser)
    return createUser
}

const deleteUser = (id) => {
    const deleteOneUser = User.deleteUser(id)
    return deleteOneUser    
}

const updateUser = (id, newUser) => {
    const updateOneUser = User.updateUser(id, newUser)
    return updateOneUser

}


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    deleteUser,
    updateUser
}