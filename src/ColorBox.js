import React, { Component } from 'react';
import './styles/ColorBox.css';

export default class ColorBox extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.color }} className="ColorBox">
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}
