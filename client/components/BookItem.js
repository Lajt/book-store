import React from 'react'

const BookItem = (props) => {
  return(
    <div>
      <div onClick={() => props.showBookPage(props.id)}>
        {props.name}
      </div>
      <div>{props.author}</div>
      <div>{props.price}</div>
      <div>{props.rating}</div>
      <a href="#" onClick={() => props.onRatingClick(props.id)}>
        Show Ratings
      </a>
    </div>
  )
}

export default BookItem