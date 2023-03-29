const Article = require('../Models/Article.mysql');

exports.createArticle = async function(req,res) {
  const articles = new Article({
    title: req.body.title,
    author_id: req.body.author_id,
    body : req.body.body,
    date: req.body.date
  });

  await Article.create(articles, async (err,data) => {
    if(err){
      throw new Error(err.message || 'Une erreur est arrive')
    }

    res.json({success: true, data:data});
  })
}

exports.updateArticleById = async function(req,res) {
  const article = new Article({
    title: req.body.title,
    author_id: req.body.author_id,
    body : req.body.body,
    date: req.body.date
  });

  await Article.updateById(req.params.id, article,(err,data) => {
    if(err){
      throw new Error(err.message || 'Une erreur est arrive')
    }

    res.json({success: true, data:data});
  })
}

exports.deleteArticleById = async function(req,res) {

  await Article.deleteById(req.params.id,(err,data) => {
    if(err){
      throw new Error(err.message || 'Une erreur est arrive')
    }

    res.json({success: true, data:data});
  })
}
