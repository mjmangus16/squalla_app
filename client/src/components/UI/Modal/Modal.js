import React, { Component } from "react";

import Backdrop from "../Backdrop/Backdrop";
import Aux from "../Aux";

import "./Modal.css";
import "../Backdrop/Backdrop.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidMount() {
    this.getModalPosition();
    window.addEventListener("resize", this.getModalPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getModalPosition);
  }

  getModalPosition = () => {
    let parentWidth = document.querySelector(".Modal").parentElement
      .offsetWidth;
    let modalWidth = document.querySelector(".Modal").offsetWidth;
    let position = (parentWidth - modalWidth) / 2;
    document.querySelector(".Modal").style.right = `${position}px`;
  };
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.remove} />
        <div
          className="Modal"
          onClick={this.getModalPosition}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
