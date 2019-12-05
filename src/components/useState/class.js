import React from 'react';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
        <div>
            <h3>Hiciste click <b>{this.state.count}</b> veces</h3>
            <button onClick={this.handleClick}>
                Sumar
            </button>
        </div>
        );
    }
}
