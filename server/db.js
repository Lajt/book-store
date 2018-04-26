const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'books-dev',
  port: 5433,
})

pool.query('SELECT * from books', (err, res) => {
  console.log(res.rows);
  pool.end()
})
