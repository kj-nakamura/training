import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Event from "./Event";
import Category from "./Category";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      events: []
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

  //カテゴリが変更されたら
  changeCategory() {
    switch (event.target.name) {
      case "category":
        this.setState({ events: event.target.value.events });
        // axios
        //     .get("/api/events/" + event.target.value)
        //     .then(response => {
        //         this.setState({
        //             events: response.data.events
        //         });
        //     })
        //     .catch(() => {
        //         console.log("未取得");
        //     });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="container">
        <h3 className="mt-5">トレーニング管理システム</h3>
        <Category categories={this.state.categories} changeCategory={this.changeCategory} />
        {/* <Event events={this.state.events} /> */}
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
