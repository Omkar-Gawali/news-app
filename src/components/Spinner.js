import React, { Component } from "react";
import spinner from "./loading.gif";
export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <img src={spinner} alt="" />
        </div>
      </div>
    );
  }
}

export default Spinner;
