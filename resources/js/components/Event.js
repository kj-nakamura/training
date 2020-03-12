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

    constructor() {
        super();
        this.state = {
            events: [],
        };
    }

    changeEvent(){
        this.setState({event: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>aa</h1>
                {/* <form role="form" class="form" method="POST" action="{{ route('login') }}"> */}
                    {/* <select onChange={this.changeEvent}>
                        <TrainingEvent events={this.state.events} />
                    </select>
                </form> */}
            </div>
        );
    }
}

if (document.getElementById('event')) {
    ReactDOM.render(<Event />, document.getElementById('event'));
}
