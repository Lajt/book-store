import React from 'react'

const Book = (props) => {
  return(
    <div onClick={() => props.onClick(props.id)}>
      <div>{props.name}</div>
      <div>{props.author}</div>
      <div>{props.price}</div>
    </div>
  )
}

export default Book