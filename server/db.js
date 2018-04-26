const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'books-dev',
  port: 5433,
})

pool.connect(function(err, client, done){
  client.query('SELECT * from books', [], (err, res) => {
    if(err) throw err;
  
    console.log(res.rows);
    client.end()
  })
})