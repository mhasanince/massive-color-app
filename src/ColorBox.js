import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './styles/ColorBox.css';

export default class ColorBox extends Component {
  render() {
    const { color, name } = this.props;
    return (
      <CopyToClipboard text={color}>
        <div style={{ backgroundColor: color }} className="ColorBox">
          <div className="ColorBox-copy-container">
            <span className="ColorBox-name">{name}</span>
            <button className="ColorBox-copy">Copy</button>
          </div>
          <span className="ColorBox-more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}
