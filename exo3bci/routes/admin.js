const express = require('express');
const router = express.Router();

const adminController = require("../controllers/admin.controller");

router.post('/createArticle', adminController.createArticle)
router.put('/update/single/article/:id', adminController.updateArticleById)
router.delete('/delete/single/article/:id', adminController.deleteArticleById)

module.exports = router;
