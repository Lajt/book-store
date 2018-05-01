import React from 'react'
import Book from './Book'

const BookList = (props) => {
  return(
    <div>
      {props.books.map((book, id) => {
        return (
          <Book key={id}
          rating={props.calcRatingForBook(book.id)}
          onClick={props.onBookClick}
          {...book} />
        )
      })}
    </div>
  )
}

export default BookList