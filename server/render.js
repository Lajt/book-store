const React = require('react');

import App from '../client/components/App';
import axios from 'axios'

const ReactDOMServer = require('react-dom/server');

export default () => {
  return axios.get('http://localhost:8080/api/books/')
  .then(resp => {
    return {
      markup: ReactDOMServer.renderToString(
        <App initialData={resp.data} />
      ),
      data: resp.data
    }
  })
}

