import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Actions/auth.js";
import "./HomePage.styles.scss";
import CardBtn from "../../Components/CardBtn/CardBtn";
import BookDetails from "../../Components/BookDetails/BookDetails";

function HomePage() {
  const dispatch = useDispatch();

  const [bookSelected, setBookSelected] = useState(false);

  const handleClick = () => {
    setBookSelected(!bookSelected);
  };

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
          <CardBtn
            bookName="The Long Earth"
            selected={`${bookSelected && "selected"}`}
            onClick={handleClick}
          />
          <CardBtn bookName="The Colour of Magic" />
          <CardBtn bookName="The Light Fantastic" />
          <CardBtn bookName="The Final Empire" />
          <CardBtn bookName="The Hero of Ages" />
          <CardBtn bookName="The Name of the Wind" />
          <CardBtn bookName="Hogfather" />
          <CardBtn bookName="Thud" />
          <CardBtn bookName="The Long Universe" />
        </div>
      </div>

      <BookDetails isSelected={bookSelected} />
      {/* {sticky adding card} */}
    </div>
  );
}

export default HomePage;
