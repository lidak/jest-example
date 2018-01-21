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

  render() {
    const {
      number
    } = this.state;

    return (
      <div>
        {number}
        <button onClick={this.increaseNumber.bind(this)}>+</button>
      </div>
    )
  }
}