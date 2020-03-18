import React, { Component } from 'react';

export default class Palette extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Palette">
        <div className="Palette-colors"></div>
      </div>
    );
  }
}
