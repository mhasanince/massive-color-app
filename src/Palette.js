import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './styles/Palette.css';

export default class Palette extends Component {
  state = {
    level: 500,
  };

  changeLevel = (level) => {
    this.setState({
      level: level,
    });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((props, idx) => (
      <ColorBox key={idx} {...props} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
