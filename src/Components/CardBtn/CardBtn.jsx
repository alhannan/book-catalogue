import React from 'react'
import "./CardBtn.styles.scss";

function CardBtn({ bookName, onClick, selected }) {
  return (
    <button className={`card_btn ${selected}`} onClick={onClick}>
      {bookName}
    </button>
  )
}

export default CardBtn
