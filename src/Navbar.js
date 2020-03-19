import React, { Component } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/Navbar.css';

export default class Navbar extends Component {
  state = {
    format: this.props.format,
  };

  handleChange = (evt) => {
    this.setState({
      format: evt.target.value,
    });
    this.props.changeFormat(evt.target.value);
  };
  render() {
    const { format } = this.state;
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">React Color Picker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <Select value={format} onChange={this.handleChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - (255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - (255, 255, 255, 1)</MenuItem>
        </Select>
      </header>
    );
  }
}
