const Category = require("../database/Category.js")

const getAllCategories = () => {
    const allCategories = Category.getAllCategories()
    return allCategories
}

const getOneCategory = (id) => {
    const oneCategory = Category.getOneCategory(id)
    return oneCategory
}

const createNewCategory = (newCategory) => {
    const createdCategory = Category.createNewCategory(newCategory)
    return createdCategory
}

const updateCategory = (id, newUpdatedCategory) => {
    const updatedCategory = Category.updateCategory(id, newUpdatedCategory)
    return updatedCategory
}

const deleteCategory = (id) => {
    const deletedCategory = Category.deleteCategory(id)
    return deletedCategory
}

module.exports = {
    getAllCategories,
    getOneCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
}