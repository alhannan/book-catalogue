import React from 'react'
import "./BookDetails.scss";

function BookDetails({ isSelected }) {

  return ( 
    <div className={`book_details ${isSelected ? "show" : "hide"} `} >
      <i className="far fa-times-circle fa-3x" ></i>
      <h1>The Long Universe</h1>
      <h3>Sci-Fi</h3>
      <h3>Terry Pratchett</h3>
      <h3>All Books by this Author: </h3>
      <ul>
        <li>The Long Earth</li>
        <li>The Color of Magic</li>
        <li>The Light Fantastic</li>
        <li>Hogfather</li>
        <li>Thud</li>
        <li>The Long Universe</li>
      </ul>
    </div>
  )
}

export default BookDetails
