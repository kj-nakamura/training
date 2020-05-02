import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Category from "./Category";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.changeCategory = this.changeCategory.bind(this);
  }

  componentDidMount() {
    return axios.get("/api/categories")
      .then((response) => {
        console.log(response);
        this.setState({ categories: response.data });
      })
      .catch(() => {
        console.log("未取得");
      });
  }

  render() {
    return (
      <div className="container">
        <h3 className="mt-5">トレーニング管理システム</h3>
        <Category categories={this.state.categories} changeCategory={this.changeCategory} />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
