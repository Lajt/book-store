const React = require('react');

import App from '../client/components/App';
import axios from 'axios'

const ReactDOMServer = require('react-dom/server');

const getData = (bookId, respData) => {
  if(bookId){
    return {
      books: [respData],
      currentBookId: bookId
    }
  }

  return respData
}

const getUrl = (bookId) => {
  if(bookId)
    return `http://localhost:8080/api/books/${bookId}`

    return 'http://localhost:8080/api/books/'
}

export default (bookId) => {
  return axios.get(getUrl(bookId))
  .then(resp => {
    const data = getData(bookId, resp.data)
    return {
      markup: ReactDOMServer.renderToString(
        <App initialData={data} />
      ),
      data: data
    }
  })
}

