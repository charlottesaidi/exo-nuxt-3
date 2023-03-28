const sql = require('../config/mysql');

const User = function(User) {
  this.email = User.email;
  this.roles = User.roles;
  this.password = User.password;
}

User.login  = (user, result) => {
  sql.query(`SELECT * FROM user WHERE email=${user.email} AND password=${user.password}`, (err,res) => {
    if(err){
      result(err,null);
      return;
    }
    result(null, {data:res})
  })
}

module.exports = User;
