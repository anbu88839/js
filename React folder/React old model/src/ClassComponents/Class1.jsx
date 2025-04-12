import React, { Component } from 'react'
import propTypes from "prop-types";
export default class Class1 extends Component {
   
  render() {
    return (
     <>
     <h1>Class Components</h1>
     {this.props.name}
     </>
    )
  }
}

Class1.propTypes={
    name: propTypes.string.isRequired
}