import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Category from "./Category";

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3 className="mt-5">トレーニング管理システム</h3>
        <Category/>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
