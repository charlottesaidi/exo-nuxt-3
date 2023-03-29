const Article = require('../Models/Article.mysql');

exports.getAll = async function(req,res){
    await Article.getAll((err , data ) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({data:data});
    })
}
exports.getOne = async function(req,res){
    await Article.getOne(req.params.id, (err , data ) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({data:data});
    })
}
