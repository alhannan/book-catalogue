import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddBookCard.styles.scss";
import { RenderDropdownList, RenderReduxInput } from "../Fields";
import { reduxForm } from "redux-form";
import { addAuthor, getAuthors } from "../../Actions/author";

let AddBookCard = ({ handleAdd }) => {
  const dispatch = useDispatch();

  const [author, setAuthor] = useState("");

  const authors = useSelector((state) => Object.values(state.authors));

  const handleAddAuthor = () => {
    dispatch(addAuthor());
    dispatch(getAuthors());
    setAuthor("");
  };

  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  return (
    <div className="addBook">
      <RenderReduxInput
        name="book"
        label="Book name: "
        labelActive={true}
        card={true}
      />
      <RenderReduxInput
        name="genre"
        label="Genre: "
        labelActive={true}
        card={true}
      />
      {author === "add" ? (
        <RenderReduxInput
          name="author"
          label="Author: "
          labelActive={true}
          card={true}
          addButton={true}
          onClick={handleAddAuthor}
        />
      ) : (
        <RenderDropdownList
          data={authors}
          name="author"
          label="Author: "
          onChange={(e) => setAuthor(e.target.value)}
        />
      )}
      <i className="fas fa-plus-circle fa-3x" onClick={handleAdd}></i>
    </div>
  );
};

AddBookCard = reduxForm({
  form: "addBook",
})(AddBookCard);

export default AddBookCard;
