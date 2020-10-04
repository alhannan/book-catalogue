import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Actions/auth.js";
import { getBooks, getBookDetails, removeBookDetails } from "../../Actions/books";
import "./HomePage.styles.scss";
import CardBtn from "../../Components/CardBtn/CardBtn";
import BookDetails from "../../Components/BookDetails/BookDetails";

import Loader from "react-loader-spinner";

function HomePage() {
  const dispatch = useDispatch();

  const books = useSelector((state) => Object.values(state.books.allBooks));
  const { name, author, genre } = useSelector(
    (state) => state.books.selectedBook
  );

  const [bookSelected, setBookSelected] = useState(false);

  const handleClick = (id) => {
    dispatch(removeBookDetails())
    setBookSelected(id);
    dispatch(getBookDetails(id));
  };

  const handleClose = () => {
    setBookSelected("");
    dispatch(removeBookDetails())
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home__main">
        <div className="home__main__header">
          <h1>Ninja's Reading List</h1>
          <a href="/" onClick={() => dispatch(logout())}>
            Logout
          </a>
        </div>

        {books.length ? (
          <div className="home__main__cardbtns">
            {books.map(({ name, id }) => (
              <CardBtn
                key={id}
                bookName={name}
                selected={`${bookSelected === id ? "selected" : ""}`}
                onClick={() => handleClick(id)}
              />
            ))}
          </div>
        ) : (
          <Loader
            className="spinner"
            type="Puff"
            color="#ce4076"
            height={60}
            width={60}
          />
        )}
      </div>

      <BookDetails
        isSelected={bookSelected}
        close={handleClose}
        name={name}
        author={author}
        genre={genre}
      />

      {/* {sticky adding card} */}
    </div>
  );
}

export default HomePage;
