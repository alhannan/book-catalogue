import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Actions/auth.js";
import { getBooks } from "../../Actions/books";
import "./HomePage.styles.scss";
import CardBtn from "../../Components/CardBtn/CardBtn";
import BookDetails from "../../Components/BookDetails/BookDetails";

function HomePage() {
  const dispatch = useDispatch();
  const books = useSelector((state) => Object.values(state.books));

  const [bookSelected, setBookSelected] = useState(false);

  const handleClick = (id) => {
    setBookSelected(id);
  };
  
  const handleClose = () => {
    setBookSelected("");
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

        <div className="home__main__cardbtns">
          {books.map(({ name, id}) => (
            <CardBtn
              key={id}
              bookName={name}
              selected={`${bookSelected === id ? "selected" : ""}`}
              onClick={() => handleClick(id)}
            />
          ))}
        </div>
      </div>

      <BookDetails isSelected={bookSelected} close={handleClose} />

      {/* {sticky adding card} */}
    </div>
  );
}

export default HomePage;
