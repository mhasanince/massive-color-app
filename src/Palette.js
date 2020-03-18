import React, { Component } from 'react';
import './styles/Palette.css';
import ColorBox from './ColorBox';

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors.map((props, idx) => (
      <ColorBox key={idx} {...props} />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
