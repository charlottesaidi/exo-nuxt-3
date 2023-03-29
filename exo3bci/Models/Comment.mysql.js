const sql = require('../config/mysql');

const Comment = function(Comment) {
  this.author_id = Comment.author_id;
  this.article_id = Comment.article_id;
  this.body = Comment.body;
  this.date = Comment.date;
}

Comment.create = (newComment, result) => {
  sql.query('INSERT INTO comment SET ?', newComment, (err,res) => {
    if(err){
      result(err,null)
      return;
    }
    result(null,{id:res.insertId, ...newComment})
  })
}

Comment.getAll = (article, result) => {
  sql.query(`SELECT *, u.email, c.body as commentBody, c.date as commentDate FROM comment AS c
    JOIN article AS a ON c.article_id=a.id
    JOIN user AS u ON c.author_id=u.id
    WHERE a.id=${article}`,
    (err,res) => {
    if(err){
      result(err,null);
      return;
    }
    result(null, {data:res})
  })
}

Comment.getOne  = (id, result) => {
  sql.query(`SELECT * FROM comment WHERE id=${id}`, (err,res) => {
    if(err){
      result(err,null);
      return;
    }
    result(null, {data:res})
  })
}

Comment.updateById = (id,comment, result ) => {
  sql.query(`UPDATE comment SET body = ?  WHERE id = ${id} `,
    [comment.body], (err,res) => {
      if(err){
        result(err,null);
        return;
      }
      result(null,{data:res})
    })
}
Comment.deleteById = (id, result ) => {
  sql.query(`DELETE FROM comment WHERE id = ${id}`, (err,res) => {
    if(err){
      result(err,null);
      return;
    }
    result(null,{data:res})
  })
}


module.exports = Comment;
