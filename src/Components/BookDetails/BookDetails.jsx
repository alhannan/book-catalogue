import React from "react";
import "./BookDetails.scss";

import Loader from "react-loader-spinner";

function BookDetails({ isSelected, close, name, author, genre, authorBooks }) {
  return (
    isSelected && (
      <div className={`book_details ${isSelected ? "show" : "hide"} `}>
        <i className="far fa-times-circle fa-3x" onClick={close}></i>
        {name ? (
          <>
            <h1>{name}</h1>
            <h3>{genre}</h3>
            <h3>{author?.name}</h3>
            <h3>All Books by this Author: </h3>
            <ul>
              {authorBooks.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </>
        ) : (
          <Loader
            className="detailsSpinner"
            type="Puff"
            color="white"
            height={60}
            width={60}
          />
        )}
      </div>
    )
  );
}

export default BookDetails;
