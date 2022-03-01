const CategoryService = require('./categories.service');

class CategoryController {
    static async getAllCategories(req, res, next) {
        try {
            const categories = await CategoryService.getAllCategories();
            res.status(200).json(categories)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async createCategory(req, res, next) {
        try {
            const createdCategory = await CategoryService.createCategory(req.body);
            res.status(201).json(createdCategory)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = CategoryController;