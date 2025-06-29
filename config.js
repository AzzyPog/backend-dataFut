const mysql = require('mysql2/promise');

const database = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'futdata'
});

module.exports = database;