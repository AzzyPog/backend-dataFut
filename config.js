const mysql = require('mysql2/promise');

const database = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'teste',
});

module.exports = database;
