
import React, { Component } from 'react'

import ButtonComponent from './buttonComponent'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      value: props.initialValue,
    };
    this.changeLabelName = this.changeLabelName.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  
  changeLabelName() {
    this.setState({label: 'Counter'});
  }

  increment() {
    this.setState({value: this.state.value + 1});
  }

  decrement() {
    this.setState({value: this.state.value - 1});
  }
  
  render() {
    return (
      <div>
        <h1>{ this.state.label }</h1>
        <h2>{ this.state.value }</h2>
        <ButtonComponent buttonName='Increment' action={this.increment} />
        <ButtonComponent buttonName='Decrement' action={this.decrement} />
        <ButtonComponent buttonName='Change Name' action={this.changeLabelName}></ButtonComponent>
      </div>
    )
  }
}