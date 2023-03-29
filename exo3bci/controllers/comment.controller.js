const Comment = require('../Models/Comment.mysql');

exports.create = async function(req,res) {
  const comments = new Comment({
    author_id: req.body.author_id,
    article_id : req.body.article_id,
    body : req.body.body,
    date: req.body.date
  });

  await Comment.create(comments, async (err,data) => {
    if(err){
      throw new Error(err.message || 'Une erreur est arrive')
    }

    res.json({success: true, data:data});
  })
}

exports.getAll = async function(req,res){
  await Comment.getAll(req.params.id, (err , data ) => {
    if(err){
      throw new Error(err.message || 'Une erreur est arrive')
    }

    res.json({data:data});
  })
}
exports.getOne = async function(req,res){
  await Comment.getOne(req.params.id, (err , data ) => {
    if(err){
      throw new Error(err.message || 'Une erreur est arrive')
    }

    res.json({data:data});
  })
}

exports.updateById = async function(req,res) {
  const comment = new Comment({
    author_id: req.body.author_id,
    body : req.body.body,
    article_id : req.body.article_id,
    date: req.body.date
  });

  await Comment.updateById(req.params.id, comment,(err,data) => {
    if(err){
      throw new Error(err.message || 'Une erreur est arrive')
    }

    res.json({data:data});
  })
}

exports.deleteById = async function(req,res) {

  await Comment.deleteById(req.params.id,(err,data) => {
    if(err){
      throw new Error(err.message || 'Une erreur est arrive')
    }

    res.json({data:data});
  })
}
