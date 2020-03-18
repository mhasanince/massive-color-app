import React, { Component } from 'react';
import './styles/ColorBox.css';

export default class ColorBox extends Component {
  render() {
    const { color, name } = this.props;
    return (
      <div style={{ backgroundColor: color }} className="ColorBox">
        <div className="ColorBox-copy-container">
          <span className="ColorBox-name">{name}</span>
          <button className="ColorBox-copy">Copy</button>
        </div>
        <span className="ColorBox-more">MORE</span>
      </div>
    );
  }
}
