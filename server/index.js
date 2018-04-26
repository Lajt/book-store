const express = require('express')

const app = express()
const cors = require('cors')
app.use(cors())
app.set('view engine', 'ejs')

import serverRender from './render'
import apiRouter from './apiRouter'

app.get('/', (req, res) => {
  res.render('index', {
    content: serverRender()
  })
})

app.use('/api', apiRouter)

app.listen(8080, () => console.log('Server started'))
