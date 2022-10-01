const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getAllPosts = async () => {
    const allPosts = await prisma.post.findMany()
    return allPosts
}

const getOnePost = async (id) =>{
    const getOnePost = await prisma.post.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return getOnePost
}


const createNewPost = async (newPost) => {
    const createdPost = await prisma.post.create({
        data: newPost
    })
    return createdPost
}

const deletePost = async (id) => {
    const deleteOnePost = await prisma.post.delete({
        where: {
            id: Number.parseInt(id)
        }
    })
    return deleteOnePost
}

const updatePost = async (id, updatePost) => {
    const updateOnePost = await prisma.post.update({
        where: {
            id: Number.parseInt(id)
        },
        data: updatePost
    })
    return updateOnePost
}

module.exports = {
    getAllPosts,
    getOnePost,
    createNewPost,
    deletePost,
    updatePost
}