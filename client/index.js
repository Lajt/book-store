import App from './components/App'
import axios from 'axios'


ReactDOM.render(
  <App initialData={window._initialData}/>,
  document.getElementById('root')
)
