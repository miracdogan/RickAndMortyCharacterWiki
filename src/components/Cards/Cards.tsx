import React from "react";
import "./Cards.css";

const Cards = ({ character }) => {
  let badgeClass = "";

  if (character) {
    if (character.status === "Dead") {
      badgeClass = "bg-danger";
    } else if (character.status === "Alive") {
      badgeClass = "bg-success";
    } else {
      badgeClass = "bg-secondary";
    }

    //TODO: Adjust image border.
    return (
      <div className="card my-1 ms-1 col-3">
        <div className="position-relative">
          <img
            src={character.image}
            alt="CharacterImage"
            className="img-fluid"
          />
          <div className={`position-absolute badge ${badgeClass}`}>
            {character.status}
          </div>
        </div>
        <div className="content mt-2">
          <div className="fs-4 fw-semibold">{character.name}</div>
          <div className="my-3">
            <div className="">Last Location📍</div>
            <div className="fs-5">{character.location.name}</div>
          </div>
        </div>
      </div>
    );
  } else {
    //TODO:If there is no characters according to search return special message
    return <div className="col-3">There is no character for this search.</div>;
  }
};

export default Cards;
