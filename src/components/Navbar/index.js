import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-dark bg-light justify-content-center mt-3 mx-2">
      <ul className="navbar-nav">
        <li className="nav-item">
          <h3>
            <span className="text-success">WINS {props.wins}</span>{" "}
            <span className="text-danger">LOSSES {props.losses} </span>
          </h3>
        </li>
        <li className="nav-item">
          <h2>
            <span className="text-warning">CARDS TO GO {props.cardsToGo}</span>{" "}
          </h2>
        </li>
        <li className="nav-item">
          <h4>
            <span className="text-primary">{props.info}</span>
          </h4>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
