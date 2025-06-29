const mysql = require('mysql2/promise');

const database = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'meubanco'
});

module.exports = database;