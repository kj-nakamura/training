import React, { Component } from "react";
import ReactDOM from "react-dom";

function TrainingCategory(props) {
    return props.categories.map(category => {
        return (
            <option key={category.id} value={category.id}>
                {category.name}
            </option>
        );
    });
}

class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="row">
            <select className="form-control col-md-4" name="category" onChange={this.props.changeCategory}>
              <TrainingCategory categories={this.props.categories} />
            </select>
          </div>
        );
    }
}

export default Category;
