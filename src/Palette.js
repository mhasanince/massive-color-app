import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './styles/Palette.css';

export default class Palette extends Component {
  state = {
    level: 500,
    format: 'hex',
  };

  changeLevel = (level) => {
    this.setState({
      level: level,
    });
  };

  changeFormat = (format) => {
    this.setState({
      format: format,
    });
  };

  render() {
    const { colors, name, emoji } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color, idx) => (
      <ColorBox key={idx} background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          format={format}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          <span className="Palette-name">{name}</span>
          <span className="Palette-emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
