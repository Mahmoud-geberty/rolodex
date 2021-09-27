import React from "react";
import "./card.style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${props.monster.name}?set=set2&size=180x180`} />
      <h2> {props.monster.name} </h2>
      <h2> {props.monster.email} </h2>
    </div>
  );
};
