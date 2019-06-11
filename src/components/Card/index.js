import React from "react";

function Card(props) {
  return (
    <img
      className="m-3"
      src={props.image}
      alt={props.name}
      onClick={() => props.clickHandler(props.id)}
    />
  );
}

export default Card;
