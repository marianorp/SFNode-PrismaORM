const Post = require("../database/Post")


const getAllPosts = () => {
    const allPosts = Post.getAllPosts()
    return allPosts
}

const getOnePost = (id) => {
    const postById = Post.getOnePost(id)
    return postById
}

const createNewPost = (newPost) => {
    const createdPost = Post.createNewPost(newPost)
    return createdPost
}

const updatePost = (id, newPost) => {
    const updatePost = Post.updatePost(id, newPost)
    return updatePost    
}

const deletePost = (id) => {
    const deleteOnePost = Post.deletePost(id)
    return deleteOnePost
    
}


module.exports = {
    getAllPosts,
    getOnePost,
    createNewPost,
    updatePost,
    deletePost
}