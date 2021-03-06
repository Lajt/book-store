import React from 'react'
import BookList from './BookList'
import axios from 'axios'
import Book from './Book'

class App extends React.Component {
  state = { 
    books: this.props.initialData,
    ratings: {},
    currentBookId: null
  }

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

  calcRatingForBook = (bookId) => {
    const ratings = this.state.ratings[bookId]
    if(!ratings || ratings.length === 0) return
    console.log(ratings)
    return ratings.reduce((acc, review) => {
      return acc + review.rating
    }, 0) / ratings.length
  }
  showBookPage = (bookId) => {
    history.pushState({
      currentBookId: bookId
    }, "", `/books/${bookId}`)
    this.setState({currentBookId: bookId})
  }
  render(){
    return(
      this.state.currentBookId ? 
        <Book {...this.state.books[this.state.currentBookId]}/> :
        <BookList 
          books={this.state.books}
          showBookPage={this.showBookPage}
          calcRatingForBook={this.calcRatingForBook}
          onBookClick={this.fetchRatingForBook}/>
    )
  }
}

export default App