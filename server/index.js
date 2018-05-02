const express = require('express')

const app = express()
const cors = require('cors')
app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static('client'))

import serverRender from './render'
import apiRouter from './apiRouter'

app.get(['/', '/books/:bookId'], (req, res) => {
  //res.render('index', {markup: '', initialData: ''})
  serverRender(req.params.bookId).then(renderData => {
    return (
      res.render('index', {
        markup: renderData.markup,
        initialData: renderData.data
      })
    )
  })
})

app.use('/api', apiRouter)

app.listen(8080, () => console.log('Server started'))
