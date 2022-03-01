const router = require('express').Router();
const CategoryController = require('./categories.controller');

router.get('', CategoryController.getAllCategories);
router.post('/add-category', CategoryController.createCategory);

module.exports = router;