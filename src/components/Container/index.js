import React from "react";
import "./style.css";

function Container(props) {
  return <div className="container text-center">{props.children}</div>;
}

export default Container;
