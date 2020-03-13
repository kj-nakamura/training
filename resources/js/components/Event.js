import React, { Component } from "react";
import ReactDOM from "react-dom";

function TrainingEvent(props) {
  return props.events.map(event => {
    return (
      <option key={event.id} value={event.id}>
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
      <div>
        <select onChange={this.changeEvent} name="event">
          <TrainingEvent events={this.props.events} />
        </select>
      </div>
    );
  }
}

export default Event;
