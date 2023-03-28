const mysql = require('mysql');

let connection;

connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'miaou_blog'
});

connection.connect(error => {
    if(error) throw error;
    console.log('Bien connecte à la BDD ');

})

module.exports = connection;
