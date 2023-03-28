const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comment.controller')

router.get('/:id/comments', commentController.getAll);
router.get('/comment/:id', commentController.getOne);

router.post('/:id/createComment', commentController.create)
router.put('/comment/update/:id', commentController.updateById)
router.delete('/comment/delete/:id', commentController.updateById)


module.exports = router;
