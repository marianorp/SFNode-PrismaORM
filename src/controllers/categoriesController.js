const categoryService = require("../services/categoryService.js")

const getAllCategories = async (req, res) => {
    const allCategories = await categoryService.getAllCategories()
    res.status(200).json({status:"ok", data: allCategories});
}

const getOneCategory = async (req, res) => {
    const { id } = req.params
    const oneCategory = await categoryService.getOneCategory(id)
    res.status(200).json({status:"ok", id: oneCategory})
}

const createNewCategory = async (req, res) => {
    const { name } = req.body

    if(!name) {
        res.status(400).json({status: "error",
            err: "You must fill the field name", 
            reason: "Field name is empty"
    })
    }
    const newCategory = {
        name: name
    }
    const createdCategory = await categoryService.createNewCategory(newCategory)
    res.status(201).json({msg: "Categoria creada correctamente!", data: createdCategory})
}

const updateCategory = async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    if(!name) {
        res.status(400).json({
            status: "error",
            err: "You must fill the field name",
            reason: "Field name is empty"
        })
    }
    const newUpdatedCategory = {
        name: name
    }
    const updatedCategory = await categoryService.updateCategory(id, newUpdatedCategory)
    res.status(200).json({msg: "Categoria actualizada!", data: updatedCategory})
}

const deleteCategory = async (req, res) => {
    const { id } = req.params
    const deletedCategory = await categoryService.deleteCategory(id)
    res.json({msg: "Categoria eliminada!", data: deletedCategory})
}

module.exports = {
    getAllCategories,
    getOneCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
}