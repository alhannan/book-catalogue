import React from "react";
import "./AddBookCard.styles.scss";
import { RenderInput } from "../Fields";

function AddBookCard() {
  return (
    <div className="addBook">
      <RenderInput type="text" name="Book name: " labelActive={true} card={true}/>
      <RenderInput type="text" name="Genre: " labelActive={true} card={true}/>
      <RenderInput type="text" name="Author: " labelActive={true} card={true}/>
      <i class="fas fa-plus-circle fa-3x icon-pink"></i>
    </div>
  );
}

export default AddBookCard;
