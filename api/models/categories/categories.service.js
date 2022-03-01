const Category = require('./Category.model');

class CategoryService {
    static getAllCategories() {
        return Category.findAll();
    }
    
    static createCategory(data) {
        return Category.create(data);
    }
}

module.exports = CategoryService;