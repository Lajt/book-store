import React from 'react'
import BookList from './BookList'
import axios from 'axios'

class App extends React.Component {
  state = { 
    books: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/books/')
      .then(resp => {
        this.setState({books: resp.data})
      })
  }
  render(){
    return(
      <div>
        <BookList books={this.state.books}/>
      </div>
    )
  }
}

export default App