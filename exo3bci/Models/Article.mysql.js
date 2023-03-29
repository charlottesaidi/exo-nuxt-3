const sql = require('../config/mysql');

const Article = function(Article) {
    this.title = Article.title;
    this.author_id = Article.author_id;
    this.body = Article.body;
    this.date = Article.date;
}

Article.create = (newArticle, result) => {
    sql.query('INSERT INTO article SET ?', newArticle, (err,res) => {
        if(err){
            result(err,null)
            return;
        }
        result(null,{id:res.insertId, ...newArticle})
    })
}

Article.getAll = (result) => {
    sql.query('SELECT * FROM article', (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, {data:res})
    })
}

Article.getOne  = (id, result) => {
    sql.query(`SELECT * FROM article WHERE id=${id}`, (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, {data:res})
    })
}

Article.updateById = (id,article, result ) => {
    sql.query(`UPDATE article SET title = ?,  body = ?  WHERE id = ${id} `,
        [article.title,article.body], (err,res) => {
            if(err){
                result(err,null);
                return;
            }
            result(null,{data:res})
        })
}
Article.deleteById = (id, result ) => {
    sql.query(`DELETE FROM article WHERE id = ${id}`, (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null,{data:res})
    })
}


module.exports = Article;
