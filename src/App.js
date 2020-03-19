import React, { Component } from 'react';
import Routes from './Routes';
import seedColors from './seedColors';

export default class App extends Component {
  render() {
    return <Routes palettes={seedColors} />;
  }
}
