import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function TrainingEvent(props) {
    return props.events.map(event => {
        return (
            <option key={event.id} value={event.id}>{event.name}</option>
        )
    })
}

export default class Event extends Component {

    constructor(props) {
        super(props);
    }

    changeEvent(){
        this.setState({event: event.target.value});
    }

    render() {
        return (
            <div>
                <form role="form" className="form" method="POST" action="/api/events/add">
                    <select onChange={this.changeEvent} name="event">
                        <TrainingEvent events={this.props.events} />
                    </select>
                    <button type="submit" className="btn btn-danger">Send</button>
                </form>
            </div>
        );
    }
}

if (document.getElementById('event')) {
    ReactDOM.render(<Event />, document.getElementById('event'));
}
