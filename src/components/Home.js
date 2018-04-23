import React from 'react';
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }
    render() {
        const main =
        <div id="calendar-container">
            <div id="calendar-header">
                <span id="calendar-month-year"></span>
            </div>
            <div id="calendar-dates">
            {this.state.age}
            </div>
        </div>;
        return (
            <div id="main">
                { main }
            </div>
        );
    }
}

