import React, { Component } from "react";
import ReactDOM from "react-dom";

function TrainingEvent(props) {
  return props.events.map(event => {
    return (
      <option key={event.id} value={event.name}>
        {event.name}
      </option>
    );
  });
}

class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <select onChange={this.changeEvent} name="name" className="form-control col-md-4">
          <TrainingEvent events={this.props.events} />
        </select>
      </div>
    );
  }
}

export default Event;
