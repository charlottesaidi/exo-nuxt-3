const express = require('express');
const router = express.Router();

const articleController = require('../controllers/article.controller')

router.get('/getArticle', articleController.getAll);
router.get('/get/single/article/:id', articleController.getOne);


module.exports = router;
