import React from 'react'
import BookList from './BookList'
import axios from 'axios'

class App extends React.Component {
  state = { 
    books: this.props.initialData,
    ratings: {}
  }

  // componentDidMount() {
  //   axios.get('http://localhost:8080/api/books/')
  //     .then(resp => {
  //       this.setState({books: resp.data})
  //     })
  // }
  fetchRatingForBook = (bookId) => {
    if(this.state.ratings[bookId]) return
    axios.get(`http://localhost:8080/api/books/${bookId}/ratings`)
      .then((resp) => {
        this.setState((prev) => {
          const currentRatings = prev.ratings
          currentRatings[bookId] = resp.data
          return {ratings: currentRatings}
        })
      })
  }
  render(){
    return(
      <div>
        <BookList 
        books={this.state.books}
        onBookClick={this.fetchRatingForBook}/>
      </div>
    )
  }
}

export default App