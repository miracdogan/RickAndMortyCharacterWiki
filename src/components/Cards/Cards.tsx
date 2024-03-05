import React from "react";

const Cards = ({ character }) => {
  if (character) {
    return <div className="col-3">{character.name}</div>;
  } else {
    //TODO:If there is no characters according to search return special message
    return <div className="col-3">There is no character for this search.</div>;
  }
};

export default Cards;
