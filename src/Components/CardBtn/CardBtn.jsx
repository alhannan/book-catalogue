import React from 'react'
import "./CardBtn.styles.scss";

function CardBtn({ bookName, onClick, selected, ref }) {
  return (
    <button ref={ref} className={`card_btn ${selected}`} onClick={onClick}>
      {bookName}
    </button>
  )
}

export default CardBtn
