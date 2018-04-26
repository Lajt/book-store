const { Pool, Client } = require('pg')

import secret from '../secret'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'books-dev',
  password: secret,
  port: 5433,
})

const express = require('express')

const router = express.Router()

router.get('/books', (req, res) => {
  pool.query('SELECT * from books', (err, result) => {
    if(err) throw err

    res.send(result.rows)
  })
})

router.get('/books/:bookId/ratings', (req, res) => {
  pool.query('SELECT * from reviews WHERE book_id = $1',[req.params.bookId], (err, result) => {
    if(err) throw err

    res.send(result.rows)
  })
})

export default router