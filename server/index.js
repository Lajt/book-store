const express = require('express')

const app = express()
app.set('view engine', 'ejs')

import serverRender from './render'

app.get('/', (req, res) => {
  res.render('index', {
    content: serverRender()
  })
})

app.listen(8080, () => console.log('Server started'))
