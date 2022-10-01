const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const getAllUsers = async () => {
    const allUsers = await prisma.user.findMany({   // llamo a todos los usuario con los post que hicieron
        include: {
            posts: true
        }
    })
    return allUsers
}

const getOneUser = async (id) =>{
    const oneUser = await prisma.user.findUnique({
        where: { 
            id: parseInt(id)
        },
        include: {
            posts: {select:{
                title: true,
                content: true   //campos que muestra//
            }}
        }
    })
    return oneUser
}

const createNewUser = async (newUser) => {
    const createUser = await prisma.user.create({
        data: newUser
    })
    return createUser
}



const deleteUser = async (id) => {
    const deleteOneUser = await prisma.user.delete({
        where: {
            id: Number.parseInt(id)
        }
    })
    return deleteOneUser
}

const updateUser = async (id, newUser) => {
    const updateOneUser = await prisma.user.update({
        where: {
            id: Number.parseInt(id)
        },
        data: newUser
    })
    return updateOneUser
}


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    deleteUser,
    updateUser
}