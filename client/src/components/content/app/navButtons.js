import React from "react";
import { Link } from "react-router-dom";
import Aux from "../../UI/Aux";

const navButtons = props => {
  let content;

  let containerClassName;

  if (props.buttons === 2) {
    containerClassName = "app-home-courses-nav";
    content = (
      <Aux>
        <Link to={props.links[0]} exact="true">
          <button
            className="app-home-nav-button"
            id={props.selected === 1 ? "app-home-nav-selected" : null}
          >
            {props.names[0]}
          </button>
        </Link>

        <Link to={props.links[1]} exact="true">
          <button
            className="app-home-nav-middle"
            id={props.selected === 2 ? "app-home-nav-selected" : null}
          >
            {props.names[1]}
          </button>
        </Link>
      </Aux>
    );
  } else if (props.buttons === 3) {
    containerClassName = "app-home-home-nav";
    content = (
      <Aux>
        <Link to={props.links[0]} exact="true">
          <button
            className="app-home-nav-button"
            id={props.selected === 1 ? "app-home-nav-selected" : null}
          >
            {props.names[0]}
          </button>
        </Link>

        <Link to={props.links[1]} exact="true">
          <button
            className="app-home-nav-middle"
            id={props.selected === 2 ? "app-home-nav-selected" : null}
          >
            {props.names[1]}
          </button>
        </Link>

        <Link to={props.links[2]} exact="true">
          <button
            className="app-home-nav-button"
            id={props.selected === 3 ? "app-home-nav-selected" : null}
          >
            {props.names[2]}
          </button>
        </Link>
      </Aux>
    );
  }

  return <div className={`${containerClassName} app-nav`}>{content}</div>;
};

export default navButtons;
