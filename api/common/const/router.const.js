const router = require('express').Router();
const postsRoutes = require('../../models/posts/post.routes');
const categoriesRoutes = require('../../models/categories/categories.routes');
const authRoutes = require('../../models/auth/auth.routes');

router.use('/post', postsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/auth', authRoutes)

module.exports = router;