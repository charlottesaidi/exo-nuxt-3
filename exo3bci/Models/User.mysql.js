const sql = require('../config/mysql');

const User = function(User) {
  this.email = User.email;
  this.roles = User.roles;
  this.password = User.password;
}

User.login = (user, result) => {
  sql.query(`SELECT * FROM user WHERE email="${user.email}" AND password="${user.password}"`, (err,res) => {
    if(err){
      result(err,null);
      return;
    }
    result(null, res)
  })
}

User.create = (newUser, result) => {
  sql.query('INSERT INTO user SET ?', newUser, (err,res) => {
    if(err){
      result(err,null)
      return;
    }
    result(null,{id:res.insertId, ...newUser})
  })
}

module.exports = User;
