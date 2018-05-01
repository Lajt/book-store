import React from 'react'

const Book = (props) => {
  return(
    <div onClick={() => props.onClick(props.id)}>
      <div style={{
        backgroundColor: 'red', 
        maxWidth: '200px'}}>
          {props.name}
      </div>
      <div style={{
        backgroundColor: 'lightblue', 
        maxWidth: '200px'}}>
          {props.author}
      </div>
      <div>{props.price}</div>
      <div>{props.rating}</div>
    </div>
  )
}

export default Book