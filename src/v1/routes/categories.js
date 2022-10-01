const express = require('express');
const router = express.Router();

const categoryController = require("../../controllers/categoriesController");

router
    .get("/", categoryController.getAllCategories)
    .get("/:id", categoryController.getOneCategory)
    .post("/", categoryController.createNewCategory)
    .put("/:id", categoryController.updateCategory)
    .delete("/:id", categoryController.deleteCategory)

module.exports = router;