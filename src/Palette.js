import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
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
    const { colors, name, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color, idx) => (
      <ColorBox
        key={idx}
        background={color[format]}
        name={color.name}
        id={id}
        colorId={color.id}
        showMore={true}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          format={format}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          isSingleColor={false}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter name={name} emoji={emoji} />
      </div>
    );
  }
}
