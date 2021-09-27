import React from "react";
import { Card } from "../card/card.component.jsx";
import "./card-list.style.css";

export const CardList = ({ cards, search}) => {

  if (cards.length) {
    return (
      <div className="card-list">
        {cards.map((e) => (
          <Card key={e.id} monster={e} />
        ))}
      </div>
    );
  } else {
    return <h1>'{search}' was not Found, try another search term</h1>;
  }
};
