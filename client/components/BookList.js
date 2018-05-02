import React from 'react'
import BookItem from './BookItem'

const BookList = (props) => {
  return(
    <div>
      {props.books.map((book, id) => {
        return (
          <BookItem key={id}
          showBookPage={props.showBookPage}
          rating={props.calcRatingForBook(book.id)}
          onRatingClick={props.onBookClick}
          {...book} />
        )
      })}
    </div>
  )
}

export default BookList