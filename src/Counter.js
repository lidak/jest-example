import React, { Component } from 'react';

export default class Counter extends Component {
  constructor({number}) {
    super();
    this.state = {
      number
    };
  }

  increaseNumber() {
    this.setState({
      number: ++this.state.number
    })
  }

  getMessage(number) {
    if(number === 0) {
      return 'zero';
    } else if(number === 1) {
      return `Button clicked ${number} time.`
    } else {
      return `Button was clicked ${number} times!!!`;
    }
  }

  render() {
    const {
      number
    } = this.state;
    const message = this.getMessage(number);

    return (
      <div className="counter">
        <div className="number">{message}</div>
        <button onClick={this.increaseNumber.bind(this)}>+</button>
      </div>
    )
  }
}