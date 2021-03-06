
import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
    }
  }
  
  sum(delta) {
    /*
    for state with more than one key/value pair
    this.setState({ ...this.state, value: this.state.value + delta});
    */
    this.setState({value: this.state.value + delta});
  }
  
  render() {
    return (
      <div>
        <h1>{ this.props.label }</h1>
        <h2>{ this.state.value }</h2>
        <button onClick={() => this.sum(1)}>Increment</button>
        <button onClick={() => this.sum(-1)}>Decrement</button>
      </div>
    )
  }
}