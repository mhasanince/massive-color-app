import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/Navbar.css';

export default class Navbar extends Component {
  state = {
    format: this.props.format,
    open: false,
  };

  handleFormatChange = (evt) => {
    this.setState({
      format: evt.target.value,
      open: true,
    });
    this.props.changeFormat(evt.target.value);
  };
  closeSnackbar = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const { format, open } = this.state;
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">React Color Picker</Link>
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
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - (255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - (255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          autoHideDuration={6000}
          onClose={this.closeSnackbar}
          message={
            <span id="message-id">Format change to {format.toUpperCase()}</span>
          }
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          action={
            <React.Fragment>
              <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                onClick={this.closeSnackbar}
              >
                <Close />
              </IconButton>
            </React.Fragment>
          }
        />
      </header>
    );
  }
}
