import React, { Component } from "react";
import ReactDOM from "react-dom";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      events: [],
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.postEvent = this.postEvent.bind(this);
  }

  componentDidMount() {
    return axios.get("/api/categories")
      .then((response) => {
        this.setState({ categories: response.data });
        this.setState({ events: response.data[0].events });
      })
      .catch(() => {
        console.log("未取得");
      });
  }

  //カテゴリが変更されたら
  changeCategory() {
    switch (event.target.name) {
      case "category":
        var getCategory = this.state.categories.filter(function (category, index) {
          if (category.id == event.target.value) return true;
        });
        this.setState({events: getCategory[0].events});
        break;
      default:
        break;
    }
  }

  // イベントが登録されたら
  postEvent() {
    switch (event.target.name) {
      case "event":
        axios.post("/api/event/" + event.target.value)
          .then((response) => {
            console.log(response);
          })
          .catch(() => {
            // ログイン画面を表示
            console.log("未登録");
          });
        break;
      default:
        break;
    }
  }

  render() {
    const events = this.state.events;

    return (
      <div className="row">
        <select className="form-control col-md-4" name="category" onChange={this.changeCategory}>
          {this.state.categories.map(category => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            )
          })}
        </select>

        <select className="form-control col-md-4" name="event">
          {events.map(event => {
            return (
              <option key={event.id} value={event.id}>
                {event.name}
              </option>
            )
          })}
        </select>

        <button type="button" className="btn btn-prymary" onClick={this.postEvent}></button>
      </div>
    );
  }
}

export default Category;
