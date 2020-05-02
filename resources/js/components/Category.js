import React, { Component } from "react";
import ReactDOM from "react-dom";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.changeCategory = this.changeCategory.bind(this);
  }

  //カテゴリが変更されたら
  changeCategory() {
    switch (event.target.name) {
      case "category":
        var getCategory = this.props.categories.filter(function (category, index) {
          if (category.id == event.target.value) return true;
        });
        this.setState({ events: getCategory[0].events });
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
          {this.props.categories.map(category => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            )
          })}
        </select>

        <select className="form-control col-md-4" name="name">
          {events.map(event => {
            return (
              <option key={event.id} value={event.name}>
                {event.name}
              </option>
            )
          })}
        </select>
      </div>
    );
  }
}

export default Category;
